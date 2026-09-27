import { create } from 'zustand';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSy" + "AQjPHtOjzHZ" + "-jM63zJSuWzcaaPXMda8sY",
  authDomain: "van-menh-quoc-gia.firebaseapp.com",
  databaseURL: "https://van-menh-quoc-gia-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "van-menh-quoc-gia",
  storageBucket: "van-menh-quoc-gia.firebasestorage.app",
  messagingSenderId: "572045767281",
  appId: "1:572045767281:web:fe751e7c2dac2d95f0e1d0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const roomRef = ref(db, 'room');

export type GamePhase = 'lobby' | 'question_active' | 'lock_ack' | 'debriefing';

export type Team = {
  id: string;
  name: string;
  answers: Record<string, 'A' | 'B' | 'C'>;
};

export type RoomState = {
  roomId: string;
  phase: GamePhase;
  currentQuestionIndex: number;
  timer: number;
  teams: Record<string, Team>;
};

const INITIAL_STATE: RoomState = {
  roomId: '123456',
  phase: 'lobby',
  currentQuestionIndex: 0,
  timer: 45,
  teams: {},
};

interface GameStore extends RoomState {
  setRoomState: (state: Partial<RoomState>) => void;
  joinTeam: (id: string, name: string) => void;
  submitAnswer: (teamId: string, qId: string, answer: 'A' | 'B' | 'C') => void;
  nextPhase: (phase: GamePhase) => void;
  setQuestionIndex: (index: number) => void;
  setTimer: (timer: number) => void;
}

export const useGameStore = create<GameStore>((setZustand) => {
  // 1. Subscribe to Firebase changes to update local Zustand state
  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      setZustand({
        phase: data.phase || 'lobby',
        currentQuestionIndex: data.currentQuestionIndex || 0,
        timer: data.timer ?? 45,
        teams: data.teams || {}
      });
    } else {
      // If db is empty, initialize it with default state
      set(roomRef, INITIAL_STATE);
    }
  });

  return {
    ...INITIAL_STATE,

    // Write operations (only update Firebase, onValue will trigger UI updates)
    setRoomState: (state) => {
      update(roomRef, state);
    },

    joinTeam: (id, name) => {
      set(ref(db, `room/teams/${id}`), { id, name, answers: {} });
    },

    submitAnswer: (teamId, qId, answer) => {
      set(ref(db, `room/teams/${teamId}/answers/${qId}`), answer);
    },

    nextPhase: (phase) => {
      update(roomRef, { phase });
    },

    setQuestionIndex: (index) => {
      update(roomRef, { currentQuestionIndex: index, timer: 45 });
    },

    setTimer: (timer) => {
      update(roomRef, { timer });
    }
  };
});
