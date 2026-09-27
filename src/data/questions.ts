export type Option = {
  id: 'A' | 'B' | 'C';
  text: string;
};

export type Question = {
  id: string;
  title: string;
  context: string;
  options: Option[];
  historicalAnswer: 'A' | 'B' | 'C' | null;
  explanation: {
    history: string;
    reason: string;
    source: string;
  };
};

export const questions: Question[] = [
  {
    id: "Q01",
    title: "1946 — Một quốc gia mới thành lập",
    context: "Đầu năm 1946, đất nước vừa giành độc lập nhưng chính quyền còn non trẻ. Quân đội nước ngoài vẫn hiện diện, trong khi nguy cơ xung đột ngày càng tăng. Bạn sẽ lựa chọn cách xử lý nào?",
    options: [
      { id: "A", text: "Huy động toàn bộ lực lượng, giữ vững từng mục tiêu đã đề ra, không nhân nhượng bất kỳ điều gì với đối phương." },
      { id: "B", text: "Chấp nhận nhượng bộ một số điều kiện trước mắt, ký kết thỏa thuận tạm thời để tranh thủ thêm thời gian chuẩn bị." },
      { id: "C", text: "Chủ động liên hệ với các lực lượng bên ngoài, thu hẹp phạm vi cam kết trong nước ở giai đoạn này." }
    ],
    historicalAnswer: "B",
    explanation: {
      history: "Việt Nam chọn đàm phán, ký Hiệp định Sơ bộ 6/3/1946 và sau đó là Tạm ước 14/9/1946 với Pháp — nhượng bộ tạm thời để đẩy 20 vạn quân Tưởng về nước và có thêm thời gian củng cố lực lượng.",
      reason: "Đây là quyết định mang tinh thần \"dĩ bất biến, ứng vạn biến\" của Chủ tịch Hồ Chí Minh: chấp nhận lùi bước chiến thuật để giữ vững mục tiêu chiến lược lâu dài.",
      source: "Chỉ thị \"Tình hình và chủ trương\" của Ban Thường vụ Trung ương Đảng (ngày 3/3/1946): Nêu rõ chủ trương \"Hòa để tiến\", tạm thời dàn xếp với Pháp nhằm cô lập và đẩy nhanh quân Tưởng về nước, tránh đối đầu quân sự cùng lúc với nhiều kẻ thù khi lực lượng còn non trẻ.\nHồ Chí Minh Toàn tập, Tập 4, NXB Chính trị Quốc gia Sự thật: Lời Chủ tịch Hồ Chí Minh giải thích trước quốc dân tại Nhà hát Lớn Hà Nội (7/3/1946): \"Hồ Chí Minh không bao giờ bán nước!... Ký Hiệp định này là để mở đường cho những cuộc đàm phán chính thức và tranh thủ thời gian chuẩn bị lực lượng.\""
    }
  },
  {
    id: "Q02",
    title: "1976 — Một mô hình đã được chứng minh ở một cường quốc?",
    context: "Đất nước vừa thống nhất sau nhiều năm chiến tranh. Nền kinh tế còn nhỏ, cơ sở vật chất thiếu thốn và Nhà nước cần nhanh chóng tập trung nguồn lực để khôi phục sản xuất. Trong khi đó, một cường quốc lớn trên thế giới đang vận hành nền kinh tế dựa nhiều vào kế hoạch hóa tập trung và đã đạt được những thành tựu lớn về công nghiệp hóa. Mô hình này vì vậy được xem là một kinh nghiệm đáng tham khảo. Nếu bạn là người quyết định, bạn sẽ chọn cách nào?",
    options: [
      { id: "A", text: "Nhà nước trực tiếp phân bổ phần lớn nguồn lực, đặt chỉ tiêu sản xuất và kiểm soát lưu thông hàng hóa để tập trung sức cho các mục tiêu ưu tiên." },
      { id: "B", text: "Trao nhiều quyền chủ động cho cơ sở sản xuất, để giá cả và trao đổi hàng hóa phản ánh cung cầu, chấp nhận khó kiểm soát hơn trong giai đoạn đầu." },
      { id: "C", text: "Nhà nước giữ quyền điều phối những lĩnh vực quan trọng, đồng thời cho phép các cơ sở chủ động hơn trong sản xuất và trao đổi để tận dụng nguồn lực." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Sau năm 1976, Việt Nam áp dụng mô hình kế hoạch hóa tập trung, cơ chế bao cấp trên phạm vi toàn quốc.",
      reason: "Bối cảnh vừa ra khỏi chiến tranh đòi hỏi tập trung tối đa nguồn lực vào tay Nhà nước để tái thiết nhanh; đồng thời mô hình XHCN lúc bấy giờ đang có uy tín lớn về công nghiệp hóa. Tuy nhiên, duy trì cơ chế này kéo dài đã triệt tiêu động lực sản xuất, dẫn đến khủng hoảng thiếu hụt hàng hóa trầm trọng thập niên 1980.",
      source: "Nghị quyết Đại hội đại biểu toàn quốc lần thứ IV của Đảng (tháng 12/1976): Đề ra đường lối xây dựng nền kinh tế XHCN trên quy mô cả nước thông qua kế hoạch hóa tập trung, ưu tiên phát triển công nghiệp nặng và cải tạo XHCN.\nVăn kiện Đại hội Đảng thời kỳ Đổi mới (nhìn lại Đại hội IV & V): Đảng thẳng thắn chỉ rõ sai lầm chủ quan, duy ý chí, nóng vội trong việc áp đặt mô hình kế hoạch hóa tập trung bao cấp khi lực lượng sản xuất chưa sẵn sàng."
    }
  },
  {
    id: "Q03",
    title: "1979–1989 — Nghĩa vụ quốc tế & Bao vây cấm vận",
    context: "Một đất nước láng giềng nhân dân đang bị một chế độ diệt chủng nắm quyền cai trị tàn bạo, và giọt nước tràn ly là tràn sang nước bạn tàn sát đồng bào. Nên quân đội nước bạn tiến vào lãnh thổ láng giềng để lật đổ một chế độ diệt chủng, khiến nhiều nước phương Tây và khu vực lên án, dẫn đến cấm vận và cô lập ngoại giao kéo dài suốt hơn một thập niên. Trong khi đó, tình hình khu vực và quốc tế dần thay đổi theo thời gian. Bạn sẽ ứng xử thế nào trong suốt giai đoạn này — từ lúc can thiệp đến lúc quyết định có rút quân hay không?",
    options: [
      { id: "A", text: "Rút quân ngay sau khi đạt mục tiêu ban đầu, ưu tiên tránh đối đầu ngoại giao kéo dài." },
      { id: "B", text: "Duy trì hiện diện cho đến khi tình hình khu vực thay đổi, rồi rút toàn bộ và chuyển sang hỗ trợ chính trị, ngoại giao cho tiến trình hòa bình." },
      { id: "C", text: "Duy trì hiện diện lâu dài, chỉ rút khi có cơ chế quốc tế giám sát thay thế hoàn toàn." }
    ],
    historicalAnswer: "B",
    explanation: {
      history: "Việt Nam duy trì quân đội tại Campuchia đến năm 1989, chấp nhận bị cô lập và cấm vận trong khoảng một thập niên để đạt mục tiêu lật đổ chế độ diệt chủng và ổn định tình hình; sau đó hoàn tất rút quân toàn bộ vào tháng 9/1989 khi bối cảnh khu vực và quốc tế đã thay đổi, tạo điều kiện cho Hiệp định Paris về Campuchia (1991) và mở đường bình thường hóa quan hệ với Trung Quốc, ASEAN và phương Tây.",
      reason: "Đây là ví dụ điển hình cho thấy \"độc lập, tự chủ\" đôi khi phải trả giá bằng khó khăn kinh tế – ngoại giao trước mắt, nhưng cả việc duy trì hiện diện lẫn việc rút quân sau đó đều là quyết định tự chủ của Việt Nam — không phải bị ép buộc hoàn toàn bởi áp lực bên ngoài, mà là điều chỉnh sách lược linh hoạt theo diễn biến thực tế.",
      source: "Tuyên bố chung của Chính phủ nước CHXHCN Việt Nam và CHND Campuchia (ngày 5/4/1989): Công bố cam kết rút toàn bộ quân tình nguyện Việt Nam về nước trước cuối tháng 9/1989.\nTập san Lịch sử Ngoại giao Việt Nam (Cổng Thông tin điện tử Bộ Ngoại giao): Khẳng định việc hoàn tất rút quân tình nguyện năm 1989 đã giải quyết dứt điểm rào cản quốc tế lớn nhất, mở đường trực tiếp cho Hiệp định Paris về Campuchia ký ngày 23/10/1991."
    }
  },
  {
    id: "Q04",
    title: "1986 — Khủng hoảng kinh tế & Đổi Mới",
    context: "Năm 1986, nền kinh tế gặp nhiều khó khăn, trong khi mô hình quản lý hiện tại bộc lộ nhiều vấn đề. Nguồn lực trong nước có hạn và quan hệ kinh tế quốc tế còn hạn chế. Bạn sẽ lựa chọn hướng nào?",
    options: [
      { id: "A", text: "Triển khai cải cách theo từng giai đoạn nhỏ, tiếp tục duy trì cơ chế quản lý hiện hành ở các ngành then chốt." },
      { id: "B", text: "Xóa bỏ cơ chế cũ trên diện rộng, đồng thời thiết lập quan hệ kinh tế với nhiều đối tác nước ngoài." },
      { id: "C", text: "Tập trung khai thác và củng cố nguồn lực sẵn có trong nước trước khi tính đến việc mở rộng hợp tác." }
    ],
    historicalAnswer: "B",
    explanation: {
      history: "Đại hội VI (1986) chọn hướng B — Đổi Mới, chuyển từ cơ chế kế hoạch hóa tập trung sang kinh tế nhiều thành phần, đồng thời từng bước mở cửa hội nhập quốc tế.",
      reason: "Duy trì cơ chế cũ khiến khủng hoảng lạm phát kéo dài (đỉnh điểm trên 700%), còn \"tự củng cố trước\" khó khả thi khi nguồn lực trong nước đã kiệt quệ và viện trợ sụt giảm.",
      source: "Báo cáo Chính trị Đại hội đại biểu toàn quốc lần thứ VI (tháng 12/1986): Đảng khẳng định phương châm \"Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật\", chính thức bãi bỏ cơ chế tập trung quan liêu bao cấp, chuyển hướng sang phát triển nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.\nNghị quyết số 10-NQ/TW của Bộ Chính trị (Khoán 10, tháng 4/1988): Giao quyền tự chủ sản xuất cho hộ nông dân, biến Việt Nam từ nước thiếu lương thực triền miên thành quốc gia xuất khẩu gạo từ năm 1989."
    }
  },
  {
    id: "Q05",
    title: "1991–1995 — Quan hệ với đối tác cũ",
    context: "Một quốc gia từng có lịch sử xung đột với bạn nay muốn bình thường hóa quan hệ và mở rộng hợp tác kinh tế. Hai bên đều có lợi ích nhưng vẫn tồn tại những khác biệt. Bạn sẽ chọn cách nào?",
    options: [
      { id: "A", text: "Ưu tiên bình thường hóa, xem hợp tác mới là cơ sở giảm khác biệt." },
      { id: "B", text: "Duy trì khoảng cách nhất định, chỉ mở rộng những lĩnh vực ít rủi ro." },
      { id: "C", text: "Mở rộng hợp tác từng bước, đồng thời giữ những kênh đối thoại riêng." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chủ động bình thường hóa quan hệ với Trung Quốc (1991) và Hoa Kỳ (1995) theo tinh thần \"gác lại quá khứ, hướng tới tương lai\".",
      reason: "Phá vỡ hoàn toàn thế bao vây cấm vận, giải phóng không gian đối ngoại và tạo lập môi trường quốc tế hòa bình để dồn toàn lực phát triển kinh tế.",
      source: "Thông cáo chung cấp cao Việt Nam - Trung Quốc (tháng 11/1991): Tuyên bố chính thức bình thường hóa quan hệ bang giao hai nước trên cơ sở 5 nguyên tắc cùng tồn tại hòa bình.\nTuyên bố bình thường hóa quan hệ ngoại giao Việt Nam - Hoa Kỳ (ngày 11/7/1995): Công bố đồng thời bởi Thủ tướng Võ Văn Kiệt và Tổng thống Bill Clinton, khẳng định nguyên tắc tôn trọng độc lập, chủ quyền và không can thiệp vào công việc nội bộ của nhau."
    }
  },
  {
    id: "Q06",
    title: "1992 — Vốn vay ODA phát triển hạ tầng",
    context: "Đất nước rất cần vốn để xây cầu, đường, sân bay, nhưng ngân sách trong nước không đủ và có thể mất nhiều năm mới tích lũy được. Một đối tác lớn ngỏ ý nối lại các khoản vay ưu đãi lãi suất thấp, kỳ hạn dài, nhưng đất nước sẽ phải gánh khoản nợ trả dần trong vài chục năm tới. Bạn sẽ quyết định thế nào?",
    options: [
      { id: "A", text: "Tiếp nhận vốn vay, chấp nhận nghĩa vụ trả nợ dài hạn để có hạ tầng ngay trong giai đoạn này." },
      { id: "B", text: "Trì hoãn tiếp nhận, ưu tiên tích lũy ngân sách trong nước trước khi vay thêm." },
      { id: "C", text: "Chỉ vay ở mức tối thiểu, giới hạn cho một vài công trình thí điểm nhỏ." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chọn tiếp nhận vốn vay — nối lại nguồn vốn hỗ trợ phát triển chính thức (ODA) từ Nhật Bản từ năm 1992; tính đến nay, Nhật Bản đã trở thành nhà tài trợ ODA lớn nhất cho Việt Nam với hơn 2.700 tỷ Yên vốn vay.",
      reason: "Đánh đổi ở đây là việc chấp nhận nghĩa vụ trả nợ công dài hạn để đổi lấy hạ tầng đi trước mở đường — một lựa chọn hợp lý khi ngân sách trong nước còn hạn hẹp, mang lại các công trình huyết mạch (Cầu Cần Thơ, Nhật Tân, Nhà ga T2 Nội Bài, cao tốc Long Thành...).",
      source: "Báo cáo Tổng kết 30 năm quan hệ hợp tác ODA Việt Nam - Nhật Bản (Bộ Kế hoạch và Đầu tư): Ghi nhận Nhật Bản nối lại viện trợ ODA từ tháng 11/1992; vốn ODA Nhật Bản chiếm trên 30% tổng số vốn ODA mà các nhà tài trợ quốc tế cam kết dành cho Việt Nam.\nCổng Thông tin điện tử Chính phủ: Dữ liệu về việc hoàn thành các công trình hạ tầng trọng điểm quốc gia sử dụng vốn vay ưu đãi JICA (Cơ quan Hợp tác Quốc tế Nhật Bản)."
    }
  },
  {
    id: "Q07",
    title: "1995 — Mở rộng mạng lưới quan hệ quốc tế",
    context: "Năm 1995, Việt Nam có cơ hội mở rộng quan hệ với nhiều đối tác sau một thời gian dài chịu tác động của môi trường quốc tế phức tạp. Tuy nhiên, mỗi quan hệ mới đều đi kèm lợi ích và ràng buộc. Bạn sẽ chọn cách nào?",
    options: [
      { id: "A", text: "Thiết lập cùng lúc quan hệ với nhiều đối tác khác nhau, trải đều nguồn lực ngoại giao ra các hướng." },
      { id: "B", text: "Lựa chọn một số đối tác nhất định, dồn phần lớn nguồn lực để phát triển quan hệ với nhóm này." },
      { id: "C", text: "Mở quan hệ theo từng lĩnh vực cụ thể, ưu tiên những nơi có thể mang lại lợi ích ngay trước mắt." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam đi theo hướng thiết lập cùng lúc nhiều quan hệ — gia nhập ASEAN, bình thường hóa quan hệ với Mỹ, mở rộng quan hệ với EU và nhiều đối tác khác trong cùng giai đoạn 1995.",
      reason: "Khởi đầu của chính sách đối ngoại đa phương hóa, đa dạng hóa — nhằm giảm rủi ro phụ thuộc vào bất kỳ một đối tác nào.",
      source: "Nghị quyết số 13-NQ/TW của Bộ Chính trị (tháng 5/1988) & Văn kiện Đại hội VII (1991): Chính thức đề ra chủ trương đối ngoại \"Việt Nam muốn là bạn với tất cả các nước trong cộng đồng thế giới, phấn đấu vì hòa bình, độc lập và phát triển\".\nKỷ yếu Ngoại giao Việt Nam 1945–2020 (Bộ Ngoại giao): Khẳng định năm 1995 là \"mốc son ngoại giao lịch sử\" khi Việt Nam đồng thời gia nhập ASEAN (28/7/1995), bình thường hóa với Mỹ (11/7/1995) và ký Hiệp định Khung với EU (17/7/1995)."
    }
  },
  {
    id: "Q08",
    title: "2006 — Bước vào chuỗi bán dẫn toàn cầu",
    context: "Một tập đoàn bán dẫn hàng đầu thế giới đồng ý đặt nhà máy tại Việt Nam — nhưng đây là công đoạn lắp ráp, đóng gói, kiểm định (khâu giá trị gia tăng thấp trong chuỗi sản xuất chip), không phải khâu thiết kế hay chế tạo wafer (khâu lõi công nghệ, giá trị cao nhất). Việt Nam có cơ hội bước vào ngành công nghiệp bán dẫn toàn cầu, nhưng phải chấp nhận đứng ở khâu thấp trong chuỗi giá trị, chưa làm chủ công nghệ lõi. Bạn sẽ quyết định thế nào?",
    options: [
      { id: "A", text: "Chấp nhận vai trò lắp ráp – kiểm định hiện tại, xem đây là bước đệm để bước vào chuỗi cung ứng bán dẫn toàn cầu." },
      { id: "B", text: "Từ chối hợp tác nếu đối tác không cam kết chuyển giao công nghệ thiết kế ngay từ đầu." },
      { id: "C", text: "Đàm phán một lộ trình ràng buộc bằng hợp đồng để dần tiếp cận công nghệ lõi trong tương lai." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chọn chấp nhận vai trò nhà máy lắp ráp – kiểm định (không nắm công nghệ lõi thiết kế chip), đổi lấy việc bước chân vào bản đồ bán dẫn toàn cầu, tạo hàng nghìn việc làm và đóng góp lớn vào xuất khẩu công nghệ cao.",
      reason: "Đây là bước đệm tích lũy năng lực: gần 20 năm sau, Việt Nam mới đủ điều kiện ban hành Chiến lược quốc gia về bán dẫn để tiến lên các khâu giá trị cao hơn, đúng tinh thần \"hội nhập nhưng không hòa tan, không đánh mất năng lực tự thân\".",
      source: "Giấy phép đầu tư số 413022000001 do Ban Quản lý Khu Công nghệ cao TP.HCM cấp cho Tập đoàn Intel (năm 2006): Quy mô cấp phép ban đầu 300 triệu USD, sau đó tăng lên 1 tỷ USD để xây dựng nhà máy lắp ráp và kiểm định chip (ATM) lớn nhất toàn cầu của Intel lúc bấy giờ.\nChiến lược phát triển công nghiệp bán dẫn Việt Nam đến năm 2030, tầm nhìn 2050 (Quyết định số 1018/QĐ-TTg của Thủ tướng Chính phủ): Xác định lộ trình đi từ khâu đóng gói, kiểm thử sang phát triển thiết kế chip và chế tạo chuyên dụng."
    }
  },
  {
    id: "Q09",
    title: "2007 — Gia nhập một tổ chức lớn (WTO)",
    context: "Một tổ chức quốc tế đề nghị kết nạp đất nước bạn. Việc tham gia sẽ mở rộng thị trường và quan hệ, nhưng cũng buộc bạn tuân thủ những quy tắc chung. Bạn sẽ cân nhắc thế nào?",
    options: [
      { id: "A", text: "Tham gia sớm, dùng các cam kết mới để thúc đẩy thay đổi trong nước." },
      { id: "B", text: "Chờ thêm thời gian, ưu tiên củng cố năng lực trước khi cam kết." },
      { id: "C", text: "Tham gia nhưng chuẩn bị các biện pháp hỗ trợ những lĩnh vực dễ chịu tác động." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) vào ngày 11/01/2007 sau 11 năm đàm phán kiên trì.",
      reason: "Chấp nhận sức ép cạnh tranh gay gắt đối với doanh nghiệp nội địa để đổi lấy việc mở toang cánh cửa xuất khẩu ra thị trường toàn cầu với mức thuế suất bình đẳng, đồng thời tạo xung lực buộc thể chế kinh tế trong nước phải cải cách minh bạch.",
      source: "Nghị quyết số 08-NQ/TW của Ban Chấp hành Trung ương Đảng (Khóa X, tháng 2/2007): Về một số chủ trương, chính sách lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên của WTO.\nBiên bản Nghị định thư gia nhập WTO của Việt Nam (Văn kiện phê chuẩn của Quốc hội khóa XI, kỳ họp thứ 10, tháng 11/2006)."
    }
  },
  {
    id: "Q10",
    title: "2008 — Ưu đãi thuế thu hút tập đoàn công nghệ (Samsung)",
    context: "Một tập đoàn công nghệ hàng đầu châu Á đang tìm địa điểm mới ở Đông Nam Á để dịch chuyển sản xuất, và đang cân nhắc giữa nhiều quốc gia. Để giành được dự án, đối tác yêu cầu mức ưu đãi thuế cao nhất theo luật cho phép — nghĩa là ngân sách gần như không thu được đồng thuế thu nhập doanh nghiệp nào từ nhà đầu tư này trong hơn một thập kỷ đầu, dù kim ngạch xuất khẩu của họ có thể lên tới hàng chục tỷ USD mỗi năm. Đổi lại, nếu giành được dự án, đất nước sẽ có hàng chục nghìn việc làm, chuyển giao công nghệ và một vị trí mới trên bản đồ sản xuất công nghệ toàn cầu. Bạn sẽ quyết định thế nào?",
    options: [
      { id: "A", text: "Đưa ra ưu đãi thuế tối đa theo yêu cầu, chấp nhận hy sinh nguồn thu ngân sách trong nhiều năm để giành dự án." },
      { id: "B", text: "Đưa ra ưu đãi ở mức trung bình, ưu tiên giữ nguồn thu ngân sách ổn định hơn so với việc thu hút quy mô lớn." },
      { id: "C", text: "Không áp dụng ưu đãi đặc biệt, để nhà đầu tư tự quyết định dựa trên lợi thế sẵn có về nhân công và vị trí." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chấp thuận cho Samsung mức ưu đãi thuế cao nhất: hưởng thuế suất ưu đãi 10%, miễn thuế thu nhập doanh nghiệp 4 năm đầu và giảm 50% trong 9 năm tiếp theo.",
      reason: "Đánh đổi có tính toán: hy sinh nguồn thu ngân sách ngắn hạn để giải quyết việc làm, đưa Việt Nam thành cứ điểm sản xuất điện thoại lớn nhất thế giới của tập đoàn (đến nay đầu tư hơn 22,4 tỷ USD, xuất khẩu hàng chục tỷ USD mỗi năm).",
      source: "Quyết định của Thủ tướng Chính phủ và Giấy chứng nhận đầu tư tỉnh Bắc Ninh cấp cho Công ty TNHH Samsung Electronics Việt Nam (SEV - 2008): Phê duyệt cơ chế ưu đãi doanh nghiệp công nghệ cao theo Luật Công nghệ cao và Luật Đầu tư.\nBáo cáo kiểm toán thu - nộp ngân sách nhà nước của Kiểm toán Nhà nước (các chuyên đề về ưu đãi thuế FDI): Phân tích rõ tác động hai mặt giữa việc hụt thu thuế ngắn hạn và lợi ích thâm dụng lao động, gia tăng kim ngạch xuất khẩu quốc gia."
    }
  },
  {
    id: "Q11",
    title: "Khai thác khoáng sản & An ninh chiến lược (Bauxite Tây Nguyên)",
    context: "Bạn phát hiện một khu vực có trữ lượng khoáng sản lớn, có thể mở ra một ngành công nghiệp mới và tạo thêm nguồn thu cho đất nước. Tuy nhiên, khu vực này có vị trí quan trọng về quốc phòng, có đặc điểm sinh thái riêng và việc khai thác quy mô lớn đòi hỏi công nghệ, vốn và hạ tầng đáng kể. Một số chuyên gia và người có ảnh hưởng trong nước bày tỏ lo ngại về hiệu quả kinh tế, môi trường và các vấn đề an ninh. Trong khi đó, nếu dừng hoặc trì hoãn quá lâu, bạn có thể bỏ lỡ cơ hội phát triển một ngành công nghiệp mới. Bạn sẽ lựa chọn thế nào?",
    options: [
      { id: "A", text: "Tiếp tục triển khai các dự án đã được chuẩn bị, đồng thời yêu cầu các cơ quan liên quan kiểm soát chặt những vấn đề phát sinh trong quá trình thực hiện." },
      { id: "B", text: "Tạm dừng các dự án lớn để đánh giá lại hiệu quả kinh tế, môi trường, công nghệ và những tác động khác trước khi quyết định tiếp." },
      { id: "C", text: "Chuyển sang quy mô thận trọng hơn, triển khai từng bước và sử dụng kết quả thực tế để quyết định có mở rộng trong tương lai." }
    ],
    historicalAnswer: "C",
    explanation: {
      history: "Việt Nam chọn phương án thận trọng — triển khai thí điểm tại quy mô hạn chế, vừa làm vừa đánh giá thực tế.",
      reason: "Cân bằng giữa khai thác tài nguyên và bảo vệ môi trường sinh thái đầu nguồn, bảo đảm tuyệt đối thế trận quốc phòng tại địa bàn chiến lược nóc nhà Đông Dương.",
      source: "Thông báo Kết luận số 245-TB/TW của Bộ Chính trị (ngày 24/4/2009): Về Quy hoạch phân vùng, thăm dò, khai thác, chế biến và sử dụng quặng bauxite giai đoạn 2007–2015, có xét đến năm 2025; khẳng định chủ trương thí điểm chặt chẽ tại 2 dự án Tân Rai (Lâm Đồng) và Nhân Cơ (Đắk Nông).\nKết luận số 31-KL/TW của Bộ Chính trị (năm 2022): Đánh giá tổng kết sau hơn 10 năm thí điểm bauxite, yêu cầu tiếp tục giám sát nghiêm ngặt về môi trường (hồ bùn đỏ) và an ninh quốc phòng trước khi tính bước phát triển tiếp theo."
    }
  },
  {
    id: "Q12",
    title: "Bài toán Ứng phó Chủ quyền",
    context: "Một nước láng giềng lớn hơn đang có hành động ảnh hưởng trực tiếp đến lợi ích và chủ quyền của bạn. Tình hình có thể nhanh chóng leo thang nếu sử dụng vũ lực, nhưng nếu phản ứng quá thận trọng, đối phương có thể tiếp tục tạo thêm lợi thế trên thực địa. Trong khi đó, đất nước bạn vẫn cần duy trì quan hệ kinh tế và ngoại giao với nhiều quốc gia. Bạn sẽ lựa chọn cách nào?",
    options: [
      { id: "A", text: "Tăng nhanh lực lượng và tiến hành phản ứng quân sự mạnh để tạo sức răn đe, chấp nhận nguy cơ đối đầu kéo dài và ảnh hưởng đến quan hệ kinh tế." },
      { id: "B", text: "Duy trì lực lượng tại khu vực, sử dụng các biện pháp ngoại giao và pháp lý để gây sức ép, đồng thời chấp nhận rằng việc giải quyết có thể mất nhiều thời gian." },
      { id: "C", text: "Giảm đối đầu trực tiếp và ưu tiên thương lượng với đối phương, chấp nhận hạn chế một số lợi ích trước mắt để giữ ổn định và tránh xung đột lớn hơn." }
    ],
    historicalAnswer: "B",
    explanation: {
      history: "Việt Nam không áp dụng một công thức cứng nhắc mà linh hoạt theo từng tình huống: 1979 (Biên giới phía Bắc): Chiến tranh xâm lược trên bộ → Phản công quân sự chính quy tự vệ.\n1988 (Gạc Ma): Tranh chấp biển xa, chênh lệch không - hải quân → Kiên cường giữ các điểm đảo còn lại, kiềm chế không để bùng nổ chiến tranh tổng lực khi đất nước đang kiệt quệ kinh tế.\n2014 (Hải Dương 981): Xâm phạm vùng đặc quyền kinh tế → Dùng lực lượng dân sự/chấp pháp kết hợp ngoại giao và pháp lý, kiên quyết không nổ súng trước.",
      reason: "Bối cảnh, mức độ đe dọa và tương quan lực lượng khác nhau đòi hỏi phương thức bảo vệ chủ quyền khác nhau để vừa giữ vững đất đai, biển đảo vừa duy trì môi trường hòa bình.",
      source: "Sách trắng Quốc phòng Việt Nam (Bộ Quốc phòng phát hành): Khẳng định nguyên tắc quốc phòng mang tính chất tự vệ, hòa bình và chính sách \"Bốn không\".\nTuyên bố của Bộ Ngoại giao Việt Nam tại các cuộc họp báo quốc tế (tháng 5–7/2014): Cung cấp bằng chứng thực địa về việc tàu chấp pháp Việt Nam kiềm chế, dùng loa phóng thanh và vòi rồng đấu tranh pháp lý trước hành vi hung hăng của giàn khoan nước ngoài."
    }
  },
  {
    id: "Q13",
    title: "2014 — Căng thẳng trên Biển Đông",
    context: "Một tranh chấp trên biển đang làm quan hệ giữa quốc gia của bạn và một đối tác quan trọng trở nên căng thẳng. Hai nước vẫn có quan hệ kinh tế lớn, nhưng vấn đề chủ quyền đang gây sức ép trong nước. Bạn sẽ ưu tiên điều gì?",
    options: [
      { id: "A", text: "Đưa vấn đề ra các diễn đàn quốc tế, gia tăng sức ép ngoại giao lên đối tác liên quan." },
      { id: "B", text: "Duy trì các kênh đối thoại song phương, đồng thời tăng cường năng lực bảo vệ trên thực địa." },
      { id: "C", text: "Cắt giảm dần các liên kết kinh tế với đối tác này, mở rộng tìm kiếm thị trường thay thế khác." }
    ],
    historicalAnswer: "B",
    explanation: {
      history: "Việt Nam kiên trì duy trì các kênh đối thoại song phương, đồng thời củng cố năng lực bảo vệ trên thực địa, tránh để căng thẳng leo thang thành xung đột vũ trang.",
      reason: "Phản ánh nguyên tắc \"vừa hợp tác, vừa đấu tranh\": kiên quyết không nhượng bộ về chủ quyền lãnh thổ, nhưng không để đứt gãy giao thương kinh tế và môi trường hòa bình ổn định.",
      source: "Tuyên bố của Thủ tướng Nguyễn Tấn Dũng tại Hội nghị Cấp cao ASEAN lần thứ 24 (Nay Pyi Taw, Myanmar, tháng 5/2014): \"Việt Nam luôn chân thành mong muốn cùng với Trung Quốc giải quyết hòa bình các tranh chấp... nhưng Việt Nam kiên quyết bảo vệ chủ quyền và lợi ích chính đáng của mình vì chủ quyền lãnh thổ là thiêng liêng.\"\nNghị quyết Trung ương 8 (Khóa XI) về \"Chiến lược bảo vệ Tổ quốc trong tình hình mới\": Đề ra phương châm xử lý mối quan hệ \"đối tác - đối tượng\", kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền bằng biện pháp hòa bình."
    }
  },
  {
    id: "Q14",
    title: "2017 — Vai trò trung gian tại diễn đàn đa phương (APEC Đà Nẵng)",
    context: "Nước bạn đăng cai một diễn đàn kinh tế lớn ngay giữa lúc quan hệ Mỹ – Trung có nhiều rạn nứt: Mỹ vừa rút khỏi một hiệp định thương mại đa phương lớn và muốn thúc đẩy các thỏa thuận song phương riêng; Trung Quốc thì thúc đẩy các sáng kiến liên kết kinh tế khu vực theo hướng riêng của mình. Là nước chủ nhà, bạn phải soạn thảo tuyên bố chung mà cả hai siêu cường (đang có mặt trực tiếp tại sự kiện) đều chấp nhận được. Bạn sẽ xử lý vai trò trung gian này ra sao?",
    options: [
      { id: "A", text: "Nghiêng về hướng tiếp cận của Mỹ, tận dụng quan hệ đối tác chiến lược đang lên để tạo đồng thuận nhanh." },
      { id: "B", text: "Nghiêng về các sáng kiến khu vực của Trung Quốc, tận dụng vị trí láng giềng và quan hệ kinh tế gắn bó lâu dài." },
      { id: "C", text: "Xây dựng ngôn ngữ tuyên bố chung trung lập, không gắn với sáng kiến riêng của bên nào." }
    ],
    historicalAnswer: "C",
    explanation: {
      history: "Việt Nam chọn xây dựng ngôn ngữ tuyên bố chung trung lập, không gắn với sáng kiến riêng của bên nào, dẫn dắt các thành viên thông qua Tuyên bố Đà Nẵng.",
      reason: "Dung hòa được mâu thuẫn đối đầu gay gắt giữa hai siêu cường Mỹ - Trung, khẳng định vị thế trung gian uy tín, đúng tinh thần \"thêm bạn, bớt thù\", không để bị cuốn vào xung đột của các nước lớn.",
      source: "Tuyên bố Đà Nẵng: \"Tạo động lực mới, cùng vun đắp tương lai chung\" (Hội nghị Cấp cao APEC lần thứ 25, ngày 11/11/2017): Văn kiện đồng thuận chung của 21 nền kinh tế thành viên dưới sự chủ trì của Chủ tịch nước Việt Nam.\nBáo cáo tổng kết Năm APEC 2017 của Ban Thư ký Quốc gia APEC: Nhấn mạnh nghệ thuật đàm phán ngoại giao khéo léo để dung hòa sáng kiến TPP (Mỹ vừa rút) và Vành đai - Con đường (Trung Quốc thúc đẩy)."
    }
  },
  {
    id: "Q15",
    title: "2020 — COVID-19 & Chuỗi cung ứng",
    context: "Một đại dịch khiến biên giới bị hạn chế, chuỗi cung ứng quốc tế gián đoạn và nhu cầu trong nước tăng mạnh. Nền kinh tế của bạn vẫn phụ thuộc vào một số nguồn cung bên ngoài. Bạn sẽ điều chỉnh chiến lược như thế nào?",
    options: [
      { id: "A", text: "Đẩy mạnh năng lực sản xuất trong nước, cắt giảm dần các nguồn cung có mức độ phụ thuộc cao." },
      { id: "B", text: "Giữ nguyên các liên kết cung ứng hiện có, tăng lượng dự trữ để phòng ngừa gián đoạn." },
      { id: "C", text: "Tìm kiếm thêm nhiều nguồn cung mới, tránh để phụ thuộc vào một thị trường duy nhất." }
    ],
    historicalAnswer: "C",
    explanation: {
      history: "Việt Nam áp dụng đồng thời cả ba hướng: tự sản xuất nội địa vật tư thiết yếu, duy trì liên kết cung ứng cũ và triển khai Chiến dịch Ngoại giao Vắc-xin thần tốc để đa dạng hóa nguồn cung từ bên ngoài.",
      reason: "Nhận thức rõ tự chủ không đồng nghĩa với tự cung tự cấp khép kín, mà là khả năng thích ứng linh hoạt trước các cú sốc bên ngoài.",
      source: "Nghị quyết số 128/NQ-CP của Chính phủ (ngày 11/10/2021): Ban hành Quy định tạm thời \"Thích ứng an toàn, linh hoạt, kiểm soát hiệu quả dịch COVID-19\", chuyển đổi căn bản từ phong tỏa sang vừa phòng dịch vừa mở cửa phục hồi chuỗi cung ứng.\nBáo cáo tổng kết của Ban Chỉ đạo Quốc gia phòng, chống dịch COVID-19: Ghi nhận thành công của \"Ngoại giao Vắc-xin\", đưa Việt Nam từ một nước có tỷ lệ tiêm chủng rất thấp trở thành một trong 6 nước có độ bao phủ vắc-xin cao nhất thế giới."
    }
  },
  {
    id: "Q16",
    title: "2023 — Quan hệ với các nước lớn",
    context: "Một quốc gia đang có quan hệ kinh tế và chính trị với nhiều nước lớn. Một đối tác đề nghị nâng cấp quan hệ và mở rộng hợp tác trên nhiều lĩnh vực. Điều này có thể đem lại cơ hội mới nhưng cũng làm tăng mức độ gắn kết. Bạn sẽ lựa chọn thế nào?",
    options: [
      { id: "A", text: "Đồng ý nâng cấp quan hệ theo đề nghị, song song duy trì các mối quan hệ đã có từ trước." },
      { id: "B", text: "Giữ nguyên mức quan hệ hiện tại, không tham gia thêm các cam kết mang tính dài hạn." },
      { id: "C", text: "Đàm phán nâng cấp có kèm điều kiện, giới hạn hợp tác trong một số lĩnh vực nhất định." }
    ],
    historicalAnswer: "A",
    explanation: {
      history: "Việt Nam chọn đồng ý nâng cấp quan hệ theo đề nghị, song song duy trì và củng cố vững chắc các mối quan hệ đã có từ trước (nâng cấp Đối tác Chiến lược Toàn diện với Mỹ và Nhật Bản năm 2023).",
      reason: "Minh chứng cho việc quan hệ sâu hơn không làm mất đi quyền tự chủ nếu duy trì được thế cân bằng chiến lược giữa các nước lớn.",
      source: "Tuyên bố chung về việc nâng cấp quan hệ Việt Nam - Hoa Kỳ lên Đối tác Chiến lược Toàn diện (ngày 10/9/2023): Ký kết nhân chuyến thăm của Tổng thống Joe Biden tại Hà Nội, tái khẳng định các nguyên tắc tôn trọng Hiến chương Liên Hợp Quốc, luật pháp quốc tế và thể chế chính trị của nhau.\nBài phát biểu của Tổng Bí thư Nguyễn Phú Trọng tại Hội nghị Ngoại giao lần thứ 32 (tháng 12/2023): Đúc kết trường phái \"Ngoại giao Cây tre Việt Nam\": \"Gốc vững, thân chắc, cành uyển chuyển... thấm đượm tâm hồn, cốt cách và khí phách của dân tộc Việt Nam\"."
    }
  },
  {
    id: "Q18",
    title: "Kỷ nguyên mới",
    context: "Việt Nam bước vào giai đoạn mới của hội nhập quốc tế. Nền kinh tế ngày càng gắn với thương mại, đầu tư và chuỗi cung ứng toàn cầu, trong khi các lĩnh vực như công nghệ cao, AI, bán dẫn, năng lượng xanh và chuyển đổi số đang phát triển nhanh. Tuy nhiên, nguồn lực trong nước vẫn có giới hạn và cạnh tranh quốc tế ngày càng lớn. Nếu bạn là người hoạch định chiến lược cho Việt Nam trong giai đoạn tới, bạn sẽ ưu tiên hướng nào?",
    options: [
      { id: "A", text: "Tập trung phát triển năng lực trong nước, ưu tiên xây dựng doanh nghiệp, công nghệ và nguồn nhân lực Việt Nam trước khi mở rộng thêm mức độ hội nhập." },
      { id: "B", text: "Đẩy mạnh hội nhập quốc tế, chủ động thu hút vốn, công nghệ và nhân lực từ bên ngoài để tận dụng nhanh những cơ hội mới." },
      { id: "C", text: "Kết hợp cả hai hướng, vừa mở rộng hợp tác quốc tế vừa đặt mục tiêu nâng dần năng lực trong nước để giảm sự phụ thuộc vào bên ngoài." }
    ],
    historicalAnswer: null,
    explanation: {
      history: "Không có đáp án lịch sử định sẵn. Đây là câu hỏi mở dành cho chính thế hệ trẻ.",
      reason: "Chưa có lời giải đáp cố định, tương lai sẽ được quyết định bởi lựa chọn của thế hệ tiếp theo.",
      source: "Nghị quyết Đại hội đại biểu toàn quốc lần thứ XIII của Đảng: Đặt mục tiêu phát triển đến năm 2030 (kỷ niệm 100 năm thành lập Đảng) là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; và đến năm 2045 (kỷ niệm 100 năm lập nước) trở thành nước phát triển, thu nhập cao.\nCác thông điệp định hướng về \"Kỷ nguyên mới — Kỷ nguyên vươn mình của dân tộc Việt Nam\": Nhấn mạnh việc chuyển đổi mô hình tăng trưởng dựa trên khoa học công nghệ, đổi mới sáng tạo, chuyển đổi số và nâng cao năng lực tự chủ chiến lược của quốc gia."
    }
  }
];
