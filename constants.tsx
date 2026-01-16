
import { Grade, Unit } from './types';

export const UNITS_DATA: Record<Grade, Unit[]> = {
  [Grade.GRADE_6]: [
    { id: 1, title: "My new school", vocab: [
      { word: "activity", pronunciation: "/ækˈtɪvəti/", meaning: "hoạt động" },
      { word: "boarding school", pronunciation: "/ˈbɔːdɪŋ skuːl/", meaning: "trường nội trú" },
      { word: "calculator", pronunciation: "/ˈkælkjuleɪtə/", meaning: "máy tính" },
      { word: "classmate", pronunciation: "/ˈklɑːsmeɪt/", meaning: "bạn cùng lớp" },
      { word: "compass", pronunciation: "/ˈkʌmpəs/", meaning: "com-pa" },
      { word: "creative", pronunciation: "/kriˈeɪtɪv/", meaning: "sáng tạo" },
      { word: "equipment", pronunciation: "/ɪˈkwɪpmənt/", meaning: "thiết bị" },
      { word: "international", pronunciation: "/ˌɪntəˈnæʃnəl/", meaning: "quốc tế" },
      { word: "interview", pronunciation: "/ˈɪntəvjuː/", meaning: "phỏng vấn" },
      { word: "smart", pronunciation: "/smɑːt/", meaning: "bảnh bao, thông minh" },
      { word: "favourite", pronunciation: "/ˈfeɪvərɪt/", meaning: "được yêu thích" },
      { word: "remember", pronunciation: "/rɪˈmembə/", meaning: "ghi nhớ" }
    ]},
    { id: 2, title: "My house", vocab: [
      { word: "apartment", pronunciation: "/əˈpɑːtmənt/", meaning: "căn hộ" },
      { word: "attic", pronunciation: "/ˈætɪk/", meaning: "gác mái" },
      { word: "chest of drawers", pronunciation: "/ˌtʃest əv ˈdrɔːz/", meaning: "tủ có ngăn kéo" },
      { word: "cupboard", pronunciation: "/ˈkʌbəd/", meaning: "tủ đựng bát đĩa" },
      { word: "dishwasher", pronunciation: "/ˈdɪʃwɒʃə/", meaning: "máy rửa bát" },
      { word: "furniture", pronunciation: "/ˈfɜːnɪtʃə/", meaning: "đồ đạc" },
      { word: "wardrobe", pronunciation: "/ˈwɔːdrəʊb/", meaning: "tủ quần áo" },
      { word: "country house", pronunciation: "/ˌkʌntri ˈhaʊs/", meaning: "nhà ở vùng quê" },
      { word: "fridge", pronunciation: "/frɪdʒ/", meaning: "tủ lạnh" },
      { word: "microwave", pronunciation: "/ˈmaɪkrəweɪv/", meaning: "lò vi sóng" }
    ]},
    { id: 3, title: "My friends", vocab: [
      { word: "active", pronunciation: "/ˈæktɪv/", meaning: "hăng hái" },
      { word: "appearance", pronunciation: "/əˈpɪərəns/", meaning: "diện mạo" },
      { word: "creative", pronunciation: "/kriˈeɪtɪv/", meaning: "sáng tạo" },
      { word: "kind", pronunciation: "/kaɪnd/", meaning: "tốt bụng" },
      { word: "confident", pronunciation: "/ˈkɒnfɪdənt/", meaning: "tự tin" },
      { word: "friendly", pronunciation: "/ˈfrendli/", meaning: "thân thiện" },
      { word: "funny", pronunciation: "/ˈfʌni/", meaning: "buồn cười, vui tính" },
      { word: "hard-working", pronunciation: "/ˌhɑːd ˈwɜːkɪŋ/", meaning: "chăm chỉ" },
      { word: "loving", pronunciation: "/ˈlʌvɪŋ/", meaning: "giàu tình yêu thương" },
      { word: "patient", pronunciation: "/ˈpeɪʃnt/", meaning: "kiên nhẫn" }
    ]},
    { id: 4, title: "My neighbourhood", vocab: [
      { word: "cathedral", pronunciation: "/kəˈθiːdrəl/", meaning: "nhà thờ lớn" },
      { word: "convenient", pronunciation: "/kənˈviːniənt/", meaning: "thuận tiện" },
      { word: "narrow", pronunciation: "/ˈnærəʊ/", meaning: "hẹp" },
      { word: "suburb", pronunciation: "/ˈsʌbɜːb/", meaning: "ngoại ô" },
      { word: "incredibly", pronunciation: "/ɪnˈkredəbli/", meaning: "đáng kinh ngạc" },
      { word: "historic", pronunciation: "/hɪˈstɒrɪk/", meaning: "cổ kính" },
      { word: "polluted", pronunciation: "/pəˈluːtɪd/", meaning: "ô nhiễm" },
      { word: "peaceful", pronunciation: "/ˈpiːsfl/", meaning: "yên tĩnh" }
    ]},
    { id: 5, title: "Natural wonders", vocab: [
      { word: "desert", pronunciation: "/ˈdezət/", meaning: "sa mạc" },
      { word: "mountain", pronunciation: "/ˈmaʊntən/", meaning: "núi" },
      { word: "waterfall", pronunciation: "/ˈwɔːtəfɔːl/", meaning: "thác nước" },
      { word: "wonder", pronunciation: "/ˈwʌndə/", meaning: "kỳ quan" },
      { word: "amazing", pronunciation: "/əˈmeɪzɪŋ/", meaning: "tuyệt vời" },
      { word: "backpack", pronunciation: "/ˈbackpak/", meaning: "ba-lô" },
      { word: "landscape", pronunciation: "/ˈlændskeɪp/", meaning: "phong cảnh" },
      { word: "natural", pronunciation: "/ˈnatʃ(ə)rəl/", meaning: "tự nhiên" }
    ]},
    { id: 6, title: "Our Tet holiday", vocab: [
      { word: "celebrate", pronunciation: "/ˈselɪbreɪt/", meaning: "kỷ niệm" },
      { word: "firework", pronunciation: "/ˈfaɪəwɜːk/", meaning: "pháo hoa" },
      { word: "luckymoney", pronunciation: "/ˈlʌki ˈmʌni/", meaning: "tiền lì xì" },
      { word: "decorate", pronunciation: "/ˈdekəreɪt/", meaning: "trang trí" },
      { word: "relative", pronunciation: "/ˈrelətɪv/", meaning: "họ hàng" },
      { word: "gathering", pronunciation: "/ˈɡæðərɪŋ/", meaning: "sự tụ họp" },
      { word: "behave", pronunciation: "/bɪˈheɪv/", meaning: "cư xử" },
      { word: "blessing", pronunciation: "/ˈblesɪŋ/", meaning: "lời chúc phúc" }
    ]},
    { id: 7, title: "Television", vocab: [
      { word: "channel", pronunciation: "/ˈtʃænl/", meaning: "kênh" },
      { word: "comedy", pronunciation: "/ˈkɒmədi/", meaning: "phim hài" },
      { word: "educational", pronunciation: "/ˌedʒuˈkeɪʃənl/", meaning: "giáo dục" },
      { word: "documentary", pronunciation: "/ˌdɒkjuˈmentri/", meaning: "phim tài liệu" },
      { word: "programme", pronunciation: "/ˈprəʊɡræm/", meaning: "chương trình" },
      { word: "animated", pronunciation: "/ˈænɪmeɪtɪd/", meaning: "hoạt hình" },
      { word: "viewer", pronunciation: "/ˈvjuːə/", meaning: "người xem" },
      { word: "compete", pronunciation: "/kəmˈpiːt/", meaning: "thi đấu" }
    ]},
    { id: 8, title: "Sports and games", vocab: [
      { word: "gymnastics", pronunciation: "/dʒɪmˈnæstɪks/", meaning: "thể dục dụng cụ" },
      { word: "marathon", pronunciation: "/ˈmærəθən/", meaning: "chạy bộ đường dài" },
      { word: "racket", pronunciation: "/ˈrækɪt/", meaning: "cái vợt" },
      { word: "equipment", pronunciation: "/ɪˈkwɪpmənt/", meaning: "thiết bị" },
      { word: "aerobics", pronunciation: "/eəˈrəʊbɪks/", meaning: "thể dục nhịp điệu" },
      { word: "karate", pronunciation: "/kəˈrɑːti/", meaning: "võ ka-ra-tê" },
      { word: "tournament", pronunciation: "/ˈtʊənəmənt/", meaning: "giải đấu" },
      { word: "congratulate", pronunciation: "/kənˈɡrætʃuleɪt/", meaning: "chúc mừng" }
    ]},
    { id: 9, title: "Cities of the world", vocab: [
      { word: "continent", pronunciation: "/ˈkɒntɪnənt/", meaning: "lục địa" },
      { word: "landmark", pronunciation: "/ˈlændmɑːk/", meaning: "danh thắng" },
      { word: "palace", pronunciation: "/ˈpæləs/", meaning: "cung điện" },
      { word: "postcard", pronunciation: "/ˈpəʊstkɑːd/", meaning: "bưu thiếp" },
      { word: "symbol", pronunciation: "/ˈsɪmbl/", meaning: "biểu tượng" },
      { word: "crowded", pronunciation: "/ˈkraʊdɪd/", meaning: "đông đúc" },
      { word: "popular", pronunciation: "/ˈpɒpjələ/", meaning: "phổ biến" },
      { word: "historic", pronunciation: "/hɪˈstɒrɪk/", meaning: "thuộc về lịch sử" }
    ]},
    { id: 10, title: "Our houses in the future", vocab: [
      { word: "wireless", pronunciation: "/ˈwaɪələs/", meaning: "không dây" },
      { word: "appliance", pronunciation: "/əˈplaɪəns/", meaning: "thiết bị" },
      { word: "skyscraper", pronunciation: "/ˈskaɪskreɪpə/", meaning: "nhà chọc trời" },
      { word: "automatic", pronunciation: "/ˌɔːtəˈmatɪk/", meaning: "tự động" },
      { word: "comfortable", pronunciation: "/ˈkʌmftəbl/", meaning: "thoải mái" },
      { word: "hi-tech", pronunciation: "/haɪ tek/", meaning: "công nghệ cao" },
      { word: "spaceship", pronunciation: "/ˈspeɪsʃɪp/", meaning: "tàu vũ trụ" },
      { word: "environment", pronunciation: "/ɪnˈvaɪrənmənt/", meaning: "môi trường" }
    ]},
    { id: 11, title: "Our greener world", vocab: [
      { word: "recycle", pronunciation: "/ˌriːˈsaɪkl/", meaning: "tái chế" },
      { word: "environment", pronunciation: "/ɪnˈvaɪrənmənt/", meaning: "môi trường" },
      { word: "pollute", pronunciation: "/pəˈluːt/", meaning: "ô nhiễm" },
      { word: "reduction", pronunciation: "/rɪˈdʌkʃn/", meaning: "sự cắt giảm" },
      { word: "reusable", pronunciation: "/ˌriːˈjuːzəbl/", meaning: "có thể tái sử dụng" },
      { word: "rubbish", pronunciation: "/ˈrʌbɪʃ/", meaning: "rác thải" },
      { word: "protect", pronunciation: "/prəˈtekt/", meaning: "bảo vệ" },
      { word: "charity", pronunciation: "/ˈtʃærəti/", meaning: "từ thiện" }
    ]},
    { id: 12, title: "Robots", vocab: [
      { word: "humanoid", pronunciation: "/ˈhjuːmənɔɪd/", meaning: "rô bốt hình người" },
      { word: "useful", pronunciation: "/ˈjuːsfl/", meaning: "hữu ích" },
      { word: "laundry", pronunciation: "/ˈlɔːndri/", meaning: "giặt ủi" },
      { word: "complicated", pronunciation: "/ˈkɒmplɪkeɪtɪd/", meaning: "phức tạp" },
      { word: "planet", pronunciation: "/ˈplanɪt/", meaning: "hành tinh" },
      { word: "space station", pronunciation: "/speɪs ˈsteɪʃn/", meaning: "trạm vũ trụ" },
      { word: "do the dishes", pronunciation: "/duː ðə ˈdɪʃɪz/", meaning: "rửa bát" },
      { word: "recognize", pronunciation: "/ˈrekəɡnaɪz/", meaning: "nhận diện" }
    ]}
  ],
  [Grade.GRADE_7]: [
    { id: 1, title: "Hobbies", vocab: [
      { word: "gardening", pronunciation: "/ˈɡɑːdnɪŋ/", meaning: "làm vườn" },
      { word: "horse-riding", pronunciation: "/ˈhɔːs raɪdɪŋ/", meaning: "cưỡi ngựa" },
      { word: "yoga", pronunciation: "/ˈjəʊɡə/", meaning: "yoga" },
      { word: "dollhouse", pronunciation: "/ˈdɒlhaʊs/", meaning: "nhà búp bê" },
      { word: "benefit", pronunciation: "/ˈbenɪfɪt/", meaning: "lợi ích" },
      { word: "responsibility", pronunciation: "/rɪˌspɒnsəˈbɪləti/", meaning: "trách nhiệm" },
      { word: "collect", pronunciation: "/kəˈlekt/", meaning: "sưu tầm" },
      { word: "unusual", pronunciation: "/ʌnˈjuːʒuəl/", meaning: "khác thường" }
    ]},
    { id: 2, title: "Healthy living", vocab: [
      { word: "acne", pronunciation: "/ˈækni/", meaning: "mụn trứng cá" },
      { word: "sunburn", pronunciation: "/ˈsʌnbɜːn/", meaning: "cháy nắng" },
      { word: "tofu", pronunciation: "/ˈtəʊfuː/", meaning: "đậu phụ" },
      { word: "active", pronunciation: "/ˈæktɪv/", meaning: "năng động" },
      { word: "avoid", pronunciation: "/əˈvɔɪd/", meaning: "tránh" },
      { word: "condition", pronunciation: "/kənˈdɪʃn/", meaning: "/điều kiện, tình trạng" },
      { word: "lifestyle", pronunciation: "/ˈlaɪfstaɪl/", meaning: "lối sống" },
      { word: "symptom", pronunciation: "/ˈsɪmptəm/", meaning: "triệu chứng" }
    ]},
    { id: 3, title: "Community service", vocab: [
      { word: "volunteer", pronunciation: "/ˌvɒlənˈtɪə/", meaning: "tình nguyện viên" },
      { word: "homeless", pronunciation: "/ˈhəʊmləs/", meaning: "vô gia cư" },
      { word: "nursing home", pronunciation: "/ˈnɜːsɪŋ həʊm/", meaning: "viện dưỡng lão" },
      { word: "community", pronunciation: "/kəˈmjuːnəti/", meaning: "cộng đồng" },
      { word: "donate", pronunciation: "/dəʊˈneɪt/", meaning: "quyên góp" },
      { word: "environment", pronunciation: "/ɪnˈvaɪrənmənt/", meaning: "môi trường" },
      { word: "tutor", pronunciation: "/ˈtjuːtə/", meaning: "gia sư, dạy kèm" },
      { word: "clean up", pronunciation: "/kliːn ʌp/", meaning: "dọn dẹp" }
    ]},
    { id: 4, title: "Music and arts", vocab: [
      { word: "composer", pronunciation: "/kəmˈpəʊzə/", meaning: "nhà soạn nhạc" },
      { word: "puppet", pronunciation: "/ˈpʌpɪt/", meaning: "con rối" },
      { word: "exhibition", pronunciation: "/ˌeksɪˈbɪʃn/", meaning: "triển lãm" },
      { word: "performance", pronunciation: "/pəˈfɔːməns/", meaning: "buổi trình diễn" },
      { word: "traditional", pronunciation: "/trəˈdɪʃənl/", meaning: "truyền thống" },
      { word: "instrument", pronunciation: "/ˈɪnstrəmənt/", meaning: "nhạc cụ" },
      { word: "gallery", pronunciation: "/ˈɡæləri/", meaning: "phòng trưng bày" },
      { word: "portrait", pronunciation: "/ˈpɔːtreɪt/", meaning: "chân dung" }
    ]},
    { id: 5, title: "Food and drink", vocab: [
      { word: "turmeric", pronunciation: "/ˈtɜːmərɪk/", meaning: "nghệ" },
      { word: "omelette", pronunciation: "/ˈɒmlət/", meaning: "trứng cuộn" },
      { word: "fragrant", pronunciation: "/ˈfreɪɡrənt/", meaning: "thơm" },
      { word: "ingredient", pronunciation: "/ɪnˈɡriːdiənt/", meaning: "nguyên liệu" },
      { word: "recipe", pronunciation: "/ˈresɪpi/", meaning: "công thức" },
      { word: "speciality", pronunciation: "/ˌspeʃiˈæləti/", meaning: "đặc sản" },
      { word: "pancake", pronunciation: "/ˈpænkeɪk/", meaning: "bánh kếp" },
      { word: "mineral water", pronunciation: "/ˈmɪnərəl ˈwɔːtə/", meaning: "nước khoáng" }
    ]},
    { id: 6, title: "A visit to school", vocab: [
      { word: "temple", pronunciation: "/ˈtempl/", meaning: "ngôi đền" },
      { word: "entrance", pronunciation: "/ˈentrəns/", meaning: "lối vào" },
      { word: "pavilion", pronunciation: "/pəˈvɪliən/", meaning: "đình, tạ" },
      { word: "imperial", pronunciation: "/ɪmˈpɪəriəl/", meaning: "hoàng gia" },
      { word: "relic", pronunciation: "/ˈrelɪk/", meaning: "di tích" },
      { word: "statue", pronunciation: "/ˈstatʃuː/", meaning: "tượng" },
      { word: "academy", pronunciation: "/əˈkadəmi/", meaning: "học viện" },
      { word: "historical", pronunciation: "/hɪˈstɒrɪkl/", meaning: "thuộc về lịch sử" }
    ]},
    { id: 7, title: "Traffic", vocab: [
      { word: "pavement", pronunciation: "/ˈpeɪvmənt/", meaning: "vỉa hè" },
      { word: "helmet", pronunciation: "/ˈhelmɪt/", meaning: "mũ bảo hiểm" },
      { word: "zebra crossing", pronunciation: "/ˌzebrə ˈkrɒsɪŋ/", meaning: "vạch kẻ cho người đi bộ" },
      { word: "passenger", pronunciation: "/ˈpasɪndʒə/", meaning: "hành khách" },
      { word: "seatbelt", pronunciation: "/ˈsiːtbelt/", meaning: "dây an toàn" },
      { word: "vehicle", pronunciation: "/ˈviːəkl/", meaning: "phương tiện" },
      { word: "traffic jam", pronunciation: "/ˈtrafɪk dʒam/", meaning: "tắc đường" },
      { word: "congestion", pronunciation: "/kənˈdʒestʃən/", meaning: "sự ùn tắc" }
    ]},
    { id: 8, title: "Films", vocab: [
      { word: "documentary", pronunciation: "/ˌdɒkjuˈmentri/", meaning: "phim tài liệu" },
      { word: "gripping", pronunciation: "/ˈɡrɪpɪŋ/", meaning: "hấp dẫn" },
      { word: "hilarious", pronunciation: "/hɪˈleəriəs/", meaning: "hài hước" },
      { word: "character", pronunciation: "/ˈkarəktə/", meaning: "nhân vật" },
      { word: "director", pronunciation: "/dɪˈrektə/", meaning: "đạo diễn" },
      { word: "audience", pronunciation: "/ˈɔːdiəns/", meaning: "khán giả" },
      { word: "plot", pronunciation: "/plɒt/", meaning: "cốt truyện" },
      { word: "sequel", pronunciation: "/ˈsiːkwəl/", meaning: "phần tiếp theo" }
    ]},
    { id: 9, title: "Festivals around the world", vocab: [
      { word: "carnival", pronunciation: "/ˈkɑːnɪvl/", meaning: "lễ hội hóa trang" },
      { word: "parade", pronunciation: "/pəˈreɪd/", meaning: "diễu hành" },
      { word: "superstitious", pronunciation: "/ˌsuːpəˈstɪʃəs/", meaning: "mê tín" },
      { word: "costume", pronunciation: "/ˈkɒstjuːm/", meaning: "trang phục" },
      { word: "celebration", pronunciation: "/ˌselɪˈbreɪʃn/", meaning: "sự kỷ niệm" },
      { word: "tradition", pronunciation: "/trəˈdɪʃn/", meaning: "truyền thống" },
      { word: "decorate", pronunciation: "/ˈdekəreɪt/", meaning: "trang trí" },
      { word: "harvest", pronunciation: "/ˈhɑːvɪst/", meaning: "vụ thu hoạch" }
    ]},
    { id: 10, title: "Energy sources", vocab: [
      { word: "renewable", pronunciation: "/rɪˈnjuːəbl/", meaning: "tái tạo" },
      { word: "biogas", pronunciation: "/ˈbaɪəʊɡæs/", meaning: "khí sinh học" },
      { word: "solar panel", pronunciation: "/ˈsəʊlə ˈpænl/", meaning: "tấm pin mặt trời" },
      { word: "hydroelectric", pronunciation: "/ˌhaɪdrəʊɪˈlektrɪk/", meaning: "thủy điện" },
      { word: "nuclear", pronunciation: "/ˈnjuːkliə/", meaning: "hạt nhân" },
      { word: "shortage", pronunciation: "/ˈʃɔːtɪdʒ/", meaning: "sự thiếu hụt" },
      { word: "effective", pronunciation: "/ɪˈfektɪv/", meaning: "hiệu quả" },
      { word: "consumption", pronunciation: "/kənˈsʌmpʃn/", meaning: "sự tiêu thụ" }
    ]},
    { id: 11, title: "Travelling in the future", vocab: [
      { word: "teleport", pronunciation: "/ˈtelɪpɔːt/", meaning: "dịch chuyển tức thời" },
      { word: "driverless", pronunciation: "/ˈdraɪvələs/", meaning: "không người lái" },
      { word: "hyperloop", pronunciation: "/ˈhaɪpəluːp/", meaning: "tàu siêu tốc" },
      { word: "supersonic", pronunciation: "/ˌsuːpəˈsɒnɪk/", meaning: "siêu thanh" },
      { word: "autopilot", pronunciation: "/ˈɔːtəʊˌpaɪlət/", meaning: "lái tự động" },
      { word: "ecological", pronunciation: "/ˌiːkəˈlɒdʒɪkl/", meaning: "thuộc về sinh thái" },
      { word: "flying car", pronunciation: "/ˈflaɪɪŋ kɑː/", meaning: "xe bay" },
      { word: "mode of transport", pronunciation: "/məʊd əv ˈtranspɔːt/", meaning: "loại phương tiện" }
    ]},
    { id: 12, title: "English speaking countries", vocab: [
      { word: "native", pronunciation: "/ˈneɪtɪv/", meaning: "bản ngữ" },
      { word: "symbol", pronunciation: "/ˈsɪmbl/", meaning: "biểu tượng" },
      { word: "coastline", pronunciation: "/ˈkəʊstlaɪn/", meaning: "đường bờ biển" },
      { word: "landscape", pronunciation: "/ˈlandskeɪp/", meaning: "phong cảnh" },
      { word: "territory", pronunciation: "/ˈterɪtri/", meaning: "lãnh thổ" },
      { word: "diverse", pronunciation: "/daɪˈvɜːs/", meaning: "đa dạng" },
      { word: "accent", pronunciation: "/ˈaksnt/", meaning: "giọng điệu" },
      { word: "culture", pronunciation: "/ˈkʌltʃə/", meaning: "văn hóa" }
    ]}
  ],
  [Grade.GRADE_8]: [
    { id: 1, title: "Leisure time", vocab: [
      { word: "balance", pronunciation: "/ˈbæləns/", meaning: "sự cân bằng" },
      { word: "bracelet", pronunciation: "/ˈbreɪslət/", meaning: "vòng đeo tay" },
      { word: "detest", pronunciation: "/dɪˈtest/", meaning: "căm ghét" },
      { word: "fancy", pronunciation: "/ˈfænsi/", meaning: "thích" },
      { word: "keen", pronunciation: "/kiːn/", meaning: "say mê" },
      { word: "origami", pronunciation: "/ˌɒrɪˈɡɑːmi/", meaning: "nghệ thuật gấp giấy" },
      { word: "stay in shape", pronunciation: "/steɪ ɪn ʃeɪp/", meaning: "giữ dáng" },
      { word: "craft", pronunciation: "/krɑːft/", meaning: "đồ thủ công" },
      { word: "DIY", pronunciation: "/ˌdiː aɪ ˈwaɪ/", meaning: "tự làm" },
      { word: "message", pronunciation: "/ˈmesɪdʒ/", meaning: "gửi tin nhắn" }
    ]},
    { id: 2, title: "Life in the countryside", vocab: [
      { word: "paddy field", pronunciation: "/ˈpædi ˌfiːld/", meaning: "ruộng lúa" },
      { word: "vast", pronunciation: "/vɑːst/", meaning: "rộng lớn" },
      { word: "hospitable", pronunciation: "/ˈhɒspɪtəbl/", meaning: "hiếu khách" },
      { word: "picturesque", pronunciation: "/ˌɪktʃəˈresk/", meaning: "đẹp như tranh" },
      { word: "orchard", pronunciation: "/ˈɔːtʃəd/", meaning: "vườn cây ăn quả" },
      { word: "harvest", pronunciation: "/ˈhɑːvɪst/", meaning: "thu hoạch" },
      { word: "cattle", pronunciation: "/ˈkatl/", meaning: "gia súc" },
      { word: "nomadic", pronunciation: "/nəʊˈmadɪk/", meaning: "du mục" }
    ]},
    { id: 3, title: "Teenagers", vocab: [
      { word: "bullying", pronunciation: "/ˈbʊliɪŋ/", meaning: "sự bắt nạt" },
      { word: "forum", pronunciation: "/ˈfɔːrəm/", meaning: "diễn đàn" },
      { word: "peer pressure", pronunciation: "/pɪə ˈpreʃə/", meaning: "áp lực đồng trang lứa" },
      { word: "concentrate", pronunciation: "/ˈkɒnsntreɪt/", meaning: "tập trung" },
      { word: "expectation", pronunciation: "/ˌekspekˈteɪʃn/", meaning: "sự mong đợi" },
      { word: "focused", pronunciation: "/ˈfəʊkəst/", meaning: "tập trung" },
      { word: "pressure", pronunciation: "/ˈpreʃə/", meaning: "áp lực" },
      { word: "schoolwork", pronunciation: "/ˈskuːlwɜːk/", meaning: "việc học ở trường" }
    ]},
    { id: 4, title: "Ethnic groups of Viet Nam", vocab: [
      { word: "communal house", pronunciation: "/kəˈmjuːnl haʊs/", meaning: "nhà rông" },
      { word: "costume", pronunciation: "/ˈkɒstjuːm/", meaning: "trang phục" },
      { word: "terraced field", pronunciation: "/ˈterəst fiːld/", meaning: "ruộng bậc thang" },
      { word: "minority", pronunciation: "/maɪˈnɒrəti/", meaning: "thiểu số" },
      { word: "heritage", pronunciation: "/ˈherɪtɪdʒ/", meaning: "di sản" },
      { word: "diversity", pronunciation: "/daɪˈvɜːsəti/", meaning: "sự đa dạng" },
      { word: "weaving", pronunciation: "/ˈwiːvɪŋ/", meaning: "việc dệt" },
      { word: "statue", pronunciation: "/ˈstatʃuː/", meaning: "tượng" }
    ]},
    { id: 5, title: "Our customs and traditions", vocab: [
      { word: "ceremony", pronunciation: "/ˈserəməni/", meaning: "nghi lễ" },
      { word: "worship", pronunciation: "/ˈwɜːʃɪp/", meaning: "thờ phụng" },
      { word: "reunion", pronunciation: "/ˌriːˈjuːniən/", meaning: "sự sum họp" },
      { word: "custom", pronunciation: "/ˈkʌstəm/", meaning: "phong tục" },
      { word: "tradition", pronunciation: "/trəˈdɪʃn/", meaning: "truyền thống" },
      { word: "worshipping", pronunciation: "/ˈwɜːʃɪpɪŋ/", meaning: "sự thờ cúng" },
      { word: "generation", pronunciation: "/ˌdʒenəˈreɪʃn/", meaning: "thế hệ" },
      { word: "ritual", pronunciation: "/ˈrɪtʃuəl/", meaning: "nghi lễ" }
    ]},
    { id: 6, title: "Lifestyles", vocab: [
      { word: "dogsled", pronunciation: "/ˈdɒɡsled/", meaning: "xe trượt tuyết chó kéo" },
      { word: "nomadic", pronunciation: "/nəʊˈmædɪk/", meaning: "du mục" },
      { word: "igloo", pronunciation: "/ˈɪɡluː/", meaning: "lều tuyết" },
      { word: "maintain", pronunciation: "/meɪnˈteɪn/", meaning: "duy trì" },
      { word: "lifestyle", pronunciation: "/ˈlaɪfstaɪl/", meaning: "lối sống" },
      { word: "interact", pronunciation: "/ˌɪntərˈakt/", meaning: "tương tác" },
      { word: "technology", pronunciation: "/tekˈnɒlədʒi/", meaning: "công nghệ" },
      { word: "habits", pronunciation: "/ˈhabɪts/", meaning: "thói quen" }
    ]},
    { id: 7, title: "Environmental protection", vocab: [
      { word: "ecosystem", pronunciation: "/ˈiːkəʊsɪstəm/", meaning: "hệ sinh thái" },
      { word: "toxic", pronunciation: "/ˈtɒksɪk/", meaning: "độc hại" },
      { word: "endangered", pronunciation: "/ɪnˈdeɪndʒəd/", meaning: "bị đe dọa" },
      { word: "habitat", pronunciation: "/ˈhabɪtat/", meaning: "môi trường sống" },
      { word: "extinction", pronunciation: "/ɪkˈstɪŋkʃn/", meaning: "tuyệt chủng" },
      { word: "wildlife", pronunciation: "/ˈwaɪldlaɪf/", meaning: "động vật hoang dã" },
      { word: "pollution", pronunciation: "/pəˈluːʃn/", meaning: "sự ô nhiễm" },
      { word: "awareness", pronunciation: "/əˈweənəs/", meaning: "nhận thức" }
    ]},
    { id: 8, title: "Shopping", vocab: [
      { word: "bargain", pronunciation: "/ˈbɑːɡən/", meaning: "mặc cả" },
      { word: "customer", pronunciation: "/ˈkʌstəmə/", meaning: "khách hàng" },
      { word: "discount", pronunciation: "/ˈdɪskaʊnt/", meaning: "giảm giá" },
      { word: "advertisement", pronunciation: "/ədˈvɜːtɪsmənt/", meaning: "quảng cáo" },
      { word: "complaint", pronunciation: "/kəmˈpleɪnt/", meaning: "phàn nàn" },
      { word: "item", pronunciation: "/ˈaɪtəm/", meaning: "món hàng" },
      { word: "schedule", pronunciation: "/ˈʃɛdjuːl/", meaning: "lịch trình" },
      { word: "price tag", pronunciation: "/praɪs taɡ/", meaning: "nhãn giá" }
    ]},
    { id: 9, title: "Natural disasters", vocab: [
      { word: "tornado", pronunciation: "/tɔːˈneɪdəʊ/", meaning: "lốc xoáy" },
      { word: "tsunami", pronunciation: "/tsuːˈnɑːmi/", meaning: "sóng thần" },
      { word: "earthquake", pronunciation: "/ˈɜːθkweɪk/", meaning: "động đất" },
      { word: "erupt", pronunciation: "/ɪˈrʌpt/", meaning: "phun trào" },
      { word: "predict", pronunciation: "/prɪˈdɪkt/", meaning: "dự đoán" },
      { word: "emergency kit", pronunciation: "/ɪˈmɜːdʒənsi kɪt/", meaning: "bộ dụng cụ khẩn cấp" },
      { word: "landslide", pronunciation: "/ˈlandˌslaɪd/", meaning: "sạt lở đất" },
      { word: "authority", pronunciation: "/ɔːˈθɒrəti/", meaning: "chính quyền" }
    ]},
    { id: 10, title: "Communication in the future", vocab: [
      { word: "holography", pronunciation: "/hɒˈlɒgrəf/", meaning: "giao tiếp 3D" },
      { word: "telepathy", pronunciation: "/təˈlepəθi/", meaning: "thần giao cách cảm" },
      { word: "instantly", pronunciation: "/ˈinstəntli/", meaning: "ngay lập tức" },
      { word: "video conference", pronunciation: "/ˈvɪdiəʊ ˈkɒnfərəns/", meaning: "họp qua video" },
      { word: "social network", pronunciation: "/ˈsəʊʃl ˈnetwɜːk/", meaning: "mạng xã hội" },
      { word: "advanced", pronunciation: "/ədˈvɑːnst/", meaning: "tiên tiến" },
      { word: "translation", pronunciation: "/transˈleɪʃn/", meaning: "sự dịch thuật" },
      { word: "emoji", pronunciation: "/ɪˈməʊdʒi/", meaning: "biểu tượng cảm xúc" }
    ]},
    { id: 11, title: "Science and technology", vocab: [
      { word: "biometric", pronunciation: "/ˌbaɪəʊˈmetrɪk/", meaning: "sinh trắc" },
      { word: "digital", pronunciation: "/ˈdɪdʒɪtl/", meaning: "kỹ thuật số" },
      { word: "breakout room", pronunciation: "/ˈbreɪkaʊt ru:m/", meaning: "phòng thảo luận nhóm" },
      { word: "experiment", pronunciation: "/ɪkˈsperɪmənt/", meaning: "thí nghiệm" },
      { word: "invention", pronunciation: "/ɪnˈvenʃn/", meaning: "sự phát minh" },
      { word: "discovery", pronunciation: "/dɪˈskʌvəri/", meaning: "sự khám phá" },
      { word: "platform", pronunciation: "/ˈplatfɔːm/", meaning: "nền tảng" },
      { word: "feedback", pronunciation: "/ˈfiːdbak/", meaning: "phản hồi" }
    ]},
    { id: 12, title: "Life on other planets", vocab: [
      { word: "alien", pronunciation: "/ˈeɪliən/", meaning: "người ngoài hành tinh" },
      { word: "galaxy", pronunciation: "/ˈɡæləksi/", meaning: "thiên hà" },
      { word: "gravity", pronunciation: "/ˈɡrævəti/", meaning: "trọng lực" },
      { word: "habitable", pronunciation: "/ˈhæbɪtəbl/", meaning: "có thể ở được" },
      { word: "telescope", pronunciation: "/ˈtelɪskəʊp/", meaning: "kính thiên văn" },
      { word: "possibility", pronunciation: "/ˌpɒsəˈbɪləti/", meaning: "khả năng" },
      { word: "rocket", pronunciation: "/ˈrɒkɪt/", meaning: "tên lửa" },
      { word: "creature", pronunciation: "/ˈkriːtʃə/", meaning: "sinh vật" }
    ]}
  ],
  [Grade.GRADE_9]: [
    { id: 1, title: "Local community", vocab: [
      { word: "artisan", pronunciation: "/ˌɑːtɪˈzæn/", meaning: "thợ làm nghề thủ công" },
      { word: "community", pronunciation: "/kəˈmjuːnəti/", meaning: "cộng đồng" },
      { word: "craft village", pronunciation: "/ˌkrɑːft ˈvɪlɪdʒ/", meaning: "làng nghề thủ công" },
      { word: "firefighter", pronunciation: "/ˈfaɪəfaɪtə/", meaning: "lính cứu hỏa" },
      { word: "pottery", pronunciation: "/ˈpɒtəri/", meaning: "đồ gốm" },
      { word: "speciality", pronunciation: "/ˌspeʃiˈæləti/", meaning: "đặc sản" },
      { word: "preserve", pronunciation: "/prɪˈzɜːv/", meaning: "bảo tồn" },
      { word: "facilities", pronunciation: "/fəˈsɪlətiz/", meaning: "cơ sở vật chất" },
      { word: "electrician", pronunciation: "/ɪˌlekˈtrɪʃn/", meaning: "thợ điện" },
      { word: "fragrance", pronunciation: "/ˈfreɪɡrəns/", meaning: "hương thơm" }
    ]},
    { id: 2, title: "City life", vocab: [
      { word: "bustling", pronunciation: "/ˈbʌslɪŋ/", meaning: "nhộn nhịp" },
      { word: "metro", pronunciation: "/ˈmetrəʊ/", meaning: "tàu điện ngầm" },
      { word: "liveable", pronunciation: "/ˈlɪvəbl/", meaning: "đáng sống" },
      { word: "concrete jungle", pronunciation: "/ˌkɒŋkriːt ˈdʒʌŋɡl/", meaning: "rừng bê tông" },
      { word: "congested", pronunciation: "/kənˈdʒestɪd/", meaning: "tắc nghẽn" },
      { word: "downtown", pronunciation: "/ˌdaʊnˈtaʊn/", meaning: "khu trung tâm" },
      { word: "amenities", pronunciation: "/əˈmiːnətiz/", meaning: "tiện nghi" },
      { word: "sky train", pronunciation: "/skaɪ treɪn/", meaning: "tàu điện trên không" }
    ]},
    { id: 3, title: "Healthy living for teens", vocab: [
      { word: "anxiety", pronunciation: "/æŋˈzaɪəti/", meaning: "lo lắng" },
      { word: "counsellor", pronunciation: "/ˈkaʊnsələ/", meaning: "cố vấn" },
      { word: "deadline", pronunciation: "/ˈdedlaɪn/", meaning: "hạn chót" },
      { word: "priority", pronunciation: "/praɪˈɒrəti/", meaning: "ưu tiên" },
      { word: "mental", pronunciation: "/ˈmentl/", meaning: "thuộc tinh thần" },
      { word: "physical", pronunciation: "/ˈfɪzɪkl/", meaning: "thuộc thể chất" },
      { word: "optimistic", pronunciation: "/ˌɒptɪˈmɪstɪk/", meaning: "lạc quan" },
      { word: "accomplish", pronunciation: "/əˈkʌmplɪʃ/", meaning: "hoàn thành" }
    ]},
    { id: 4, title: "Remembering the past", vocab: [
      { word: "ancient", pronunciation: "/ˈeɪnʃənt/", meaning: "cổ đại" },
      { word: "monument", pronunciation: "/ˈmɒnjumənt/", meaning: "tượng đài" },
      { word: "heritage", pronunciation: "/ˈherɪtɪdʒ/", meaning: "di sản" },
      { word: "anniversary", pronunciation: "/ˌænɪˈvɜːsəri/", meaning: "ngày kỷ niệm" },
      { word: "castle", pronunciation: "/ˈkɑːsl/", meaning: "lâu đài" },
      { word: "recognise", pronunciation: "/ˈrekəɡnaɪz/", meaning: "công nhận" },
      { word: "generation", pronunciation: "/ˌdʒenəˈreɪʃn/", meaning: "thế hệ" },
      { word: "communal", pronunciation: "/kəˈmjuːnl/", meaning: "thuộc cộng đồng" }
    ]},
    { id: 5, title: "Our experiences", vocab: [
      { word: "exhilarating", pronunciation: "/ɪɡˈzɪləreɪtɪŋ/", meaning: "phấn khích" },
      { word: "flora", pronunciation: "/ˈflɔːrə/", meaning: "hệ thực vật" },
      { word: "expedition", pronunciation: "/ˌekspəˈdɪʃn/", meaning: "thám hiểm" },
      { word: "amazing", pronunciation: "/əˈmeɪzɪŋ/", meaning: "kinh ngạc" },
      { word: "performance", pronunciation: "/pəˈfɔːməns/", meaning: "buổi biểu diễn" },
      { word: "confidence", pronunciation: "/ˈkɒnfɪdəns/", meaning: "sự tự tin" },
      { word: "memorable", pronunciation: "/ˈmemərəbl/", meaning: "đáng nhớ" },
      { word: "brilliant", pronunciation: "/ˈbrɪliənt/", meaning: "xuất sắc" }
    ]},
    { id: 6, title: "Vietnamese lifestyles", vocab: [
      { word: "lifestyle", pronunciation: "/ˈlaɪfstaɪl/", meaning: "lối sống" },
      { word: "generation", pronunciation: "/ˌdʒenəˈreɪʃn/", meaning: "thế hệ" },
      { word: "tradition", pronunciation: "/trəˈdɪʃn/", meaning: "truyền thống" },
      { word: "household", pronunciation: "/ˈhaʊshəʊld/", meaning: "hộ gia đình" },
      { word: "extended", pronunciation: "/ɪkˈstendɪd/", meaning: "nhiều thế hệ" },
      { word: "nuclear", pronunciation: "/ˈnjuːkliə/", meaning: "gia đình hạt nhân" },
      { word: "dependent", pronunciation: "/dɪˈpendənt/", meaning: "lệ thuộc" },
      { word: "popularity", pronunciation: "/ˌpɒpjuˈlærəti/", meaning: "sự phổ biến" }
    ]},
    { id: 7, title: "Natural wonders", vocab: [
      { word: "biodiversity", pronunciation: "/ˌbaɪəʊdaɪˈvɜːsəti/", meaning: "đa dạng sinh học" },
      { word: "majestic", pronunciation: "/məˈdʒestɪk/", meaning: "uy nghi" },
      { word: "ecosystem", pronunciation: "/ˈiːkəʊsɪstəm/", meaning: "hệ sinh thái" },
      { word: "annual", pronunciation: "/ˈænjuəl/", meaning: "hàng năm" },
      { word: "sustainable", pronunciation: "/səˈsteɪnəbl/", meaning: "bền vững" },
      { word: "paradise", pronunciation: "/ˈpærədaɪs/", meaning: "thiên đường" },
      { word: "feature", pronunciation: "/ˈfiːtʃə/", meaning: "đặc điểm" },
      { word: "destination", pronunciation: "/ˌdestɪˈneɪʃn/", meaning: "điểm đến" }
    ]},
    { id: 8, title: "Tourism", vocab: [
      { word: "itinerary", pronunciation: "/aɪˈtɪnərəri/", meaning: "lịch trình" },
      { word: "homestay", pronunciation: "/ˈəʊmsteɪ/", meaning: "nhà trọ" },
      { word: "souvenir", pronunciation: "/ˌsuːvəˈnɪə/", meaning: "quà lưu niệm" },
      { word: "brochure", pronunciation: "/ˈbrəʊʃə/", meaning: "tờ rơi du lịch" },
      { word: "package holiday", pronunciation: "/ˈpakɪdʒ ˈhɒlədeɪ/", meaning: "du lịch trọn gói" },
      { word: "agency", pronunciation: "/ˈeɪdʒənsi/", meaning: "đại lý" },
      { word: "domestic", pronunciation: "/dəˈmestɪk/", meaning: "trong nước" },
      { word: "estimate", pronunciation: "/ˈestɪmeɪt/", meaning: "ước tính" }
    ]},
    { id: 9, title: "World Englishes", vocab: [
      { word: "bilingual", pronunciation: "/baɪˈlɪŋɡwəl/", meaning: "song ngữ" },
      { word: "fluent", pronunciation: "/ˈfluːənt/", meaning: "thông thạo" },
      { word: "accent", pronunciation: "/ˈæksent/", meaning: "giọng điệu" },
      { word: "vocabulary", pronunciation: "/vəˈkabjələri/", meaning: "từ vựng" },
      { word: "standard", pronunciation: "/ˈstandəd/", meaning: "chuẩn mực" },
      { word: "variety", pronunciation: "/vəˈraɪəti/", meaning: "biến thể" },
      { word: "official language", pronunciation: "/əˈfɪʃl ˈlaŋɡwɪdʒ/", meaning: "ngôn ngữ chính thức" },
      { word: "establish", pronunciation: "/ɪˈstablɪʃ/", meaning: "thiết lập" }
    ]},
    { id: 10, title: "Planet Earth", vocab: [
      { word: "habitat", pronunciation: "/ˈhæbɪtæt/", meaning: "môi trường sống" },
      { word: "pesticide", pronunciation: "/ˈpestɪsaɪd/", meaning: "thuốc diệt cỏ" },
      { word: "global warming", pronunciation: "/ˈɡləʊbl ˈwɔːmɪŋ/", meaning: "nóng lên toàn cầu" },
      { word: "climate change", pronunciation: "/ˈklaɪmət tʃeɪndʒ/", meaning: "biến đổi khí hậu" },
      { word: "ecological", pronunciation: "/ˌiːkəˈlɒdʒɪkl/", meaning: "thuộc về sinh thái" },
      { word: "fascinating", pronunciation: "/ˈfasɪneɪtɪŋ/", meaning: "hấp dẫn" },
      { word: "essential", pronunciation: "/ɪˈsenʃl/", meaning: "vô cùng quan trọng" },
      { word: "preserve", pronunciation: "/prɪˈzɜːv/", meaning: "bảo tồn" }
    ]},
    { id: 11, title: "Electronic devices", vocab: [
      { word: "touchscreen", pronunciation: "/ˈtʌtʃskriːn/", meaning: "màn hình cảm ứng" },
      { word: "smartwatch", pronunciation: "/ˈsmɑːtwɒtʃ/", meaning: "đồng hồ thông minh" },
      { word: "virtual reality", pronunciation: "/ˈvɜːtʃuəl riˈæləti/", meaning: "thực tế ảo" },
      { word: "portable", pronunciation: "/ˈpɔːtəbl/", meaning: "có thể mang theo" },
      { word: "robotic", pronunciation: "/rəʊˈbɒtɪk/", meaning: "thuộc về rô bốt" },
      { word: "smart", pronunciation: "/smɑːt/", meaning: "thông minh" },
      { word: "scanner", pronunciation: "/ˈskanə/", meaning: "máy quét" },
      { word: "digital", pronunciation: "/ˈdɪdʒɪtl/", meaning: "kỹ thuật số" }
    ]},
    { id: 12, title: "Career choices", vocab: [
      { word: "software engineer", pronunciation: "/ˈsɒftweər endʒɪˈnɪə/", meaning: "kỹ sư phần mềm" },
      { word: "well-paid", pronunciation: "/ˌwel ˈpeɪd/", meaning: "được trả lương cao" },
      { word: "vocational", pronunciation: "/vəʊˈkeɪʃənl/", meaning: "hướng nghiệp" },
      { word: "mechanic", pronunciation: "/məˈkanɪk/", meaning: "thợ sửa máy" },
      { word: "surgeon", pronunciation: "/ˈsɜːdʒən/", meaning: "bác sĩ phẫu thuật" },
      { word: "repetitive", pronunciation: "/rɪˈpetətɪv/", meaning: "lặp đi lặp lại" },
      { word: "rewarding", pronunciation: "/rɪˈwɔːdɪŋ/", meaning: "bổ ích, đáng làm" },
      { word: "decisive", pronunciation: "/dɪˈsaɪsɪv/", meaning: "quyết đoán" }
    ]}
  ]
};

export const CHEERING_PHRASES = [
  "Xuất sắc luôn bạn ơi! 🌟",
  "Đỉnh của chóp! 🚀",
  "Bạn thông minh quá đi! 💡",
  "Quá tuyệt vời! Thầy Thành tự hào về bạn! ✨"
];

export const ENCOURAGING_PHRASES = [
  "Gần đúng rồi, đừng bỏ cuộc nhé! 💪",
  "Không sao cả, sai là mẹ thành công! 😊",
  "Cố gắng lên, kiến thức này hơi khó một chút! 📚"
];
