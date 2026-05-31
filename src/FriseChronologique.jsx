import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CRIMSON = "#7B1D35";
const LIGHT_PINK = "#F5ECEB"; // Màu nền hồng nhạt của các thẻ trong Figma

const eventsData = [
  { id: 1, position: "top", day: "2", title: "Grèves générales en France", desc: "Le Populaire. Vague de grèves sans...", img: "/images/greve-generale.jpg" },
  { id: 2, position: "bottom", day: "4", title: "Accords de Matignon", desc: "Signature historique sous la direction de Léon Blum.", img: "/images/accordmatignon.png" },
  { id: 3, position: "top", day: "7", title: "Victoire du Front Populaire", desc: "Les ouvriers fêtent les premiers congés payés.", img: "/images/victoire.png" },
  { id: 4, position: "bottom", day: "9", title: "Grève générale de la CGT", desc: "Appel à la mobilisation générale des travailleurs.", img: "/images/061936.jpg" },
  { id: 5, position: "top", day: "11", title: "Loi sur les conventions collectives", desc: "Vote de la loi étendant les droits syndicaux.", img: "/images/loiconges.jpeg" }, // Thẻ không có ảnh giống thiết kế
  { id: 6, position: "bottom", day: "12", title: "Occupation d'usines à Saint-Étienne", desc: "Reportage sur les occupations d'usines.", img: "/images/10juin1936.jpg" },
  { id: 7, position: "top", day: "18", title: "La quinzaine de 40 heures", desc: "Application de la semaine de 40 heures.", img: "/images/40h.jpeg" },
  { id: 8, position: "bottom", day: "24", title: "Loi sur la semaine de 40h", desc: "Promulgation officielle du texte législatif.", img: "/images/40h.jpeg" },
];

export default function FriseChronologique() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Tự động cuộn đến tháng hoặc vị trí được chỉ định từ trang Accueil
    if (location.state?.targetMonth && scrollRef.current) {
      // Vì Frise hiển thị chi tiết theo ngày của Juin 1936, mặc định cuộn vào giữa
      scrollRef.current.scrollLeft = 200;
    }
  }, [location]);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", fontFamily: "sans-serif", color: "#333", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* HEADER TRẮNG + FILTER (Giống hệt góc trên Figma) */}
      <div style={{ padding: "2rem 3rem 0.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "4rem", color: "#B8B3B0", fontWeight: "400", margin: 0, display: "flex", alignItems: "baseline", gap: "10px" }}>
            Juin <span style={{ fontSize: "2rem" }}>1936</span>
          </h1>
        </div>

        {/* Cụm Bộ lọc nhỏ phía trên bên phải */}
        <div style={{ display: "flex", gap: "2rem", fontSize: "11px", color: "#666" }}>
          <div>
            <span style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>FILTRER PAR THÉMATIQUE ▼</span>
            <label style={{ display: "block" }}><input type="checkbox" defaultChecked /> Politique</label>
            <label style={{ display: "block" }}><input type="checkbox" /> Culture</label>
          </div>
          <div>
            <span style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>TYPES DE DOCUMENT ▼</span>
            <label style={{ display: "block" }}><input type="checkbox" defaultChecked /> Presse</label>
            <label style={{ display: "block" }}><input type="checkbox" /> Images</label>
          </div>
          {/* Nút X Đóng */}
          <div onClick={() => navigate("/")} style={{ fontSize: "18px", cursor: "pointer", paddingLeft: "10px", color: "#333" }}>✕</div>
        </div>
      </div>

      {/* KHU VỰC TRỤC THỜI GIAN CUỘN NGANG */}
      <div 
        ref={scrollRef}
        style={{ 
          flex: 1, 
          overflowX: "auto", 
          display: "flex", 
          alignItems: "center", 
          position: "relative",
          padding: "0 4rem",
          minHeight: "550px"
        }}
      >
        <div style={{ display: "flex", position: "relative", alignItems: "center", height: "100%", width: "max-content" }}>
          
          {/* TRỤC ĐƯỜNG THẲNG CHÍNH GIỮA (MÀU HỒNG ĐẬM/CRIMSON NHẠT) */}
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: 0, 
            right: 0, 
            height: "2px", 
            background: "#D4C5C3", 
            zIndex: 0 
          }} />

          {/* CÁC ĐIỂM NGÀY NHỎ CHẠY DỌC TRÊN TRỤC THỜI GIAN (1 đến 30) */}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((dayNum) => {
            // Tìm xem ngày này có sự kiện nào không
            const dayEvents = eventsData.filter(e => parseInt(e.day) === dayNum);
            
            return (
              <div 
                key={dayNum} 
                style={{ 
                  width: "90px", 
                  position: "relative", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center",
                  flexShrink: 0
                }}
              >
                {/* Số ngày nhỏ nằm ngay dưới/trên nút trục */}
                <span style={{ position: "absolute", top: "calc(50% + 12px)", fontSize: "10px", color: "#999", fontWeight: "600" }}>
                  {dayNum}
                </span>

                {/* Nút tròn mốc thời gian */}
                <div style={{ 
                  width: dayEvents.length > 0 ? "14px" : "8px", 
                  height: dayEvents.length > 0 ? "14px" : "8px", 
                  borderRadius: "50%", 
                  background: dayEvents.length > 0 ? CRIMSON : "#D4C5C3", 
                  zIndex: 2,
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  boxShadow: dayEvents.length > 0 ? `0 0 0 4px #FFF` : "none"
                }} />

                {/* HIỂN THỊ THẺ SỰ KIỆN NẾU CÓ */}
                {dayEvents.map((ev) => (
                  <div
                    key={ev.id}
                    style={{
                      position: "absolute",
                      // Nếu là 'top' thì đẩy lên trên trục, 'bottom' thì kéo xuống dưới trục
                      bottom: ev.position === "top" ? "calc(50% + 30px)" : "auto",
                      top: ev.position === "bottom" ? "calc(50% + 35px)" : "auto",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "190px",
                      background: LIGHT_PINK,
                      border: "1px solid #E3D5D2",
                      borderRadius: "6px",
                      padding: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      zIndex: 3
                    }}
                  >
                    {/* Đường kẻ chỉ từ Thẻ vào điểm nút tròn trên trục */}
                    <div style={{
                      position: "absolute",
                      left: "50%",
                      width: "1px",
                      background: "#D4C5C3",
                      height: "30px",
                      bottom: ev.position === "top" ? "-30px" : "auto",
                      top: ev.position === "bottom" ? "-35px" : "auto",
                      zIndex: -1
                    }} />

                    {/* Ảnh sự kiện (nếu có) */}
                    {ev.img && (
                      <img src={ev.img} alt="" style={{ width: "100%", height: "95px", objectFit: "cover", borderRadius: "4px", marginBottom: "6px" }} />
                    )}

                    {/* Tiêu đề văn bản */}
                    <h4 style={{ fontSize: "11px", fontWeight: "700", margin: "0 0 3px 0", color: "#1a1a1a", lineHeight: "1.3" }}>
                      {ev.title}
                    </h4>
                    
                    {/* Ngày tháng nhỏ */}
                    <span style={{ fontSize: "9px", color: CRIMSON, fontWeight: "600", display: "block", marginBottom: "4px" }}>
                      {ev.day} juin 1936
                    </span>

                    {/* Mô tả tóm tắt */}
                    <p style={{ fontSize: "10px", color: "#666", margin: 0, lineHeight: "1.3" }}>
                      {ev.desc}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}