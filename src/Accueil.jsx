import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
 
const CRIMSON = "#7B1D35";
const CRIMSON_LIGHT = "#f5e8eb";
 
const timelineEvents = [
  { month: "JAN", day: "7/6", label: "Front populaire" },
  { month: "FÉV", day: "12/5", label: "" },
  { month: "MAR", day: "3/4", label: "" },
  { month: "AVR", day: "4/6", label: "Élection en France" },
  { month: "MAI", day: "13/7", label: "Léon Blum" },
  { month: "JUN", day: "3/0", label: "Accord de Matignon" },
  { month: "JUIL", day: "10/6", label: "" },
  { month: "AOÛT", day: "60/6", label: "Conflit en Espagne" },
  { month: "SEP", day: "5/2", label: "" },
  { month: "OCT", day: "5/3", label: "Bataille de Madrid" },
  { month: "NOV", day: "7/0", label: "" },
  { month: "DÉC", day: "10/6", label: "Édouard VIII" },
];
 
const highlights = [
  {
    type: "IMAGE",
    typeColor: "#1a3a5c",
    img: "/images/front-populaire.jpg",
    imgPosition: "center center",
    title: "Victoire du Front Populaire",
    date: "7 juillet 1936",
    desc: "La coalition de gauche du Front populaire, regroupe la Section française de l'Internationale ouvrière.",
  },
  {
    type: "PRESSE",
    typeColor: CRIMSON,
    img: "/images/greve-generale.jpg",
    imgPosition: "center center",
    title: "Grève générale",
    date: "11 mai 1936",
    desc: "Près de 12 000 actions sont recensées pour environ deux millions de grévistes pendant que 9 000 usines sont occupées.",
  },
  {
    type: "PRESSE",
    typeColor: CRIMSON,
    img: "/images/guerre-espagne.jpg",
    imgPosition: "center center",
    title: "Guerre civile en Espagne",
    date: "17 violent 1936",
    desc: "Après l'assassinat de Calvo Sotelo, several garnisons militaires de l'armée espagnol se soulèvent.",
  },
  {
    type: "BROCHURE",
    typeColor: "#2d6a2d",
    img: "/images/jo-berlin.jpg",
    imgPosition: "center 10%",
    title: "Jeux Olympiques de Berlin",
    date: "1er août 1936",
    desc: "Quarante-neuf pays et près de 4 000 athlètes participent à l'événement. Dans le stade flambant neuf de Berlin.",
  },
];
 
const sharedResources = [
  { name: "Dr Pierre Renard", title: "Le traitement médiatique des conflits sociaux de 1936", collections: 4, revues: 10 },
  { name: "Aurélie Moulin", title: "Le Front populaire et les acquis sociaux", collections: 3, revues: 9 },
];
 
const tags = ["Les événements marquants en 1936", "Guerre d'Espagne", "L'Exposition universelle", "Le sport ouvrier"];
 
export default function Accueil() {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const [periode] = useState("Juin 1936");
  const [lieu] = useState("France");
  const [theme] = useState("Front populaire");

  // Tạo State để lưu tag nào đang được rê chuột vào (hover)
  const [hoveredTag, setHoveredTag] = useState(null);
 
  const handleSearch = (text) => {
    const queryToSearch = text || searchVal;
    const val = queryToSearch.trim().toLowerCase();
  
    if (val.includes("politique") || val.includes("marquants") || val.length > 3) {
      navigate("/resultats", { state: { query: queryToSearch } });
    }
  };
 
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f7f5f2", minHeight: "100vh", color: "#1a1a1a" }}>
 
      {/* NAVBAR */}
      <Navbar />
 
      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "260px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem 2rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/images/accueil.jpeg"
            alt="GallicAI 1936 background"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(246, 240, 240, 0.45)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "700", color: "#000", margin: "0 0 0.5rem", letterSpacing: "-1px" }}>GallicAI — 1936</h1>
          <p style={{ color: "#000", textShadow: "0 1px 4px rgba(0,0,0,0.7)", fontSize: "1.2rem", fontFamily: "Georgia,sans-serif", fontWeight: "300", letterSpacing: "0.04em", marginBottom: "1.5rem" }}>
            L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
          </p>
          
          {/* SEARCH BAR */}
          <div style={{ display: "flex", alignItems: "center", maxWidth: "640px", margin: "0 auto 0.5rem", background: "rgba(255,255,255,0.97)", borderRadius: "30px", border: "2px solid " + CRIMSON, padding: "5px 5px 5px 12px" }}>
            <span style={{ padding: "0 12px", display: "flex", alignItems: "center", color: "#888", fontSize: "18px" }}>🔍</span>
            <input
              type="text"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              placeholder="Utilisez la loupe pour une recherche par mots clés ou interrogez l'IA"
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", fontFamily: "sans-serif", padding: "12px 0", background: "transparent", color: "#1a1a1a" }}
            />
            <button 
              onClick={() => handleSearch()}
              style={{ background: CRIMSON, color: "#fff", border: "none", padding: "8px 20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500", whiteSpace: "nowrap", borderRadius: "0px 20px 20px 20px", flexShrink: "0" }}
            >
            Demander à l'IA
            </button>
          </div>

          {/* Dòng text gợi ý nhanh dưới thanh Search để bấm Demo nhanh */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ fontSize: "12px", color: "#666" }}>Exemple : </span>
            <span 
              onClick={() => {
              setSearchVal("Quelles sont les réactions de la presse aux accords de Matignon en juin 1936 ?");
          // Chuyển trang trực tiếp luôn sau khi click
              navigate("/chat-ai");
              }}
              style={{ fontSize: "12px", color: CRIMSON, textDecoration: "underline", cursor: "pointer", fontStyle: "italic" }}
              >
              "Quelles sont les réactions de la presse aux accords de Matignon en juin 1936 ?"
            </span>
          </div>

          {/* QUICK QUICK TAGS */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {tags.map((t) => {
              // Kiểm tra xem chuột có đang đứng gần (hover) nút này không
              const isHovered = hoveredTag === t;
              
              return (
                <button 
                  key={t} 
                  onClick={() => handleSearch(t)}
                  onMouseEnter={() => setHoveredTag(t)} // Chuột di chuyển vào nút -> set trạng thái hover
                  onMouseLeave={() => setHoveredTag(null)} // Chuột rời khỏi nút -> xóa trạng thái hover
                  style={{ 
                    // Nếu đang được hover thì đổi sang màu CRIMSON, nếu không thì giữ màu mờ mặc định
                    background: isHovered ? CRIMSON : "rgba(255,255,255,0.15)", 
                    color: "#fff", 
                    // Tương tự cho màu viền
                    border: "1px solid " + (isHovered ? CRIMSON : "rgba(255,255,255,0.5)"), 
                    padding: "5px 14px", 
                    borderRadius: "20px", 
                    fontSize: "12px", 
                    fontFamily: "sans-serif", 
                    cursor: "pointer",
                    // Thêm hiệu ứng transition để màu chuyển đổi mượt mà hơn khi di chuột
                    transition: "background 0.2s ease, border-color 0.2s ease"
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>
 
      {/* TIMELINE TRONG ACCUEIL.JSX */}
      <div style={{ background: "#1a1a1a", padding: "1.2rem 2rem", overflowX: "auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", minWidth: "700px", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#444", zIndex: 0 }} />
          {timelineEvents.map((ev, i) => (
            <div 
              key={i} 
              onClick={() => navigate("/frise", { state: { targetMonth: ev.month } })} // Gửi dữ liệu tháng qua state
              style={{ 
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", 
                position: "relative", zIndex: 1, cursor: "pointer" 
              }}
            >
              {ev.label ? (
                <div style={{ fontSize: "9px", color: "#ccc", fontFamily: "sans-serif", marginBottom: "4px", textAlign: "center", lineHeight: "1.2", maxWidth: "70px" }}>
                  {ev.label}
                </div>
              ) : <div style={{ height: "14px" }} />} {/* Giữ khoảng cách đều */}
        
              <div style={{ 
                width: ev.label ? "10px" : "8px", 
                height: ev.label ? "10px" : "8px", 
                borderRadius: "50%", 
                background: ev.label ? CRIMSON : "#555", 
                border: "2px solid " + (ev.label ? CRIMSON : "#666"), 
                margin: "4px 0",
                transition: "transform 0.2s",
              }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.5)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
        
            <div style={{ fontSize: "9px", color: "#888", fontFamily: "sans-serif", marginTop: "4px", letterSpacing: "0.06em" }}>{ev.month}</div>
            <div style={{ fontSize: "9px", color: "#666", fontFamily: "sans-serif" }}>{ev.day}</div>
          </div>
        ))}
      </div>
      </div>
 
      {/* MAIN */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>
 
        {/* COMBINER */}
        <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "6px", padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "600", color: CRIMSON, marginBottom: "4px" }}>Combiner les axes pour affiner votre recherche</p>
          <p style={{ fontSize: "13px", color: "#666", fontFamily: "sans-serif", marginBottom: "1rem" }}>Sélectionnez une période, un lieu et un thème pour obtenir des résultats ciblés.</p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { icon: "📅", label: "Période", val: periode },
              { icon: "📍", label: "Lieu", val: lieu },
              { icon: "🏷️", label: "Thème", val: theme },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span style={{ color: "#999", fontSize: "18px" }}>+</span>}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #ddd", borderRadius: "4px", padding: "7px 12px", background: "#fafafa", cursor: "pointer" }}>
                  <span style={{ fontSize: "14px" }}>{item.icon}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>{item.label}</span>
                  <span style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "500" }}>{item.val}</span>
                  <span style={{ color: "#888", fontSize: "12px" }}>▼</span>
                </div>
              </div>
            ))}
            <button 
              onClick={() => navigate("/explorer")} // Thêm sự kiện điều hướng ở đây
              style={{ 
                marginLeft: "auto", 
                background: CRIMSON, 
                color: "#fff", 
                border: "none", 
                padding: "9px 20px", 
                borderRadius: "4px", 
                fontSize: "13px", 
                fontFamily: "sans-serif", 
                cursor: "pointer", 
                fontWeight: "500" 
              }}
              >
              Explorer les résultats →
            </button>
          </div>
        </div>
 
        {/* COLLECTIONS */}
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: "700", color: CRIMSON, marginBottom: "0.4rem" }}>Explorer les collections</h2>
        <p style={{ fontSize: "14px", color: "#555", fontFamily: "sans-serif", marginBottom: "1.5rem" }}>Affirmez vos entries, combinez les axes et accédez aux documents qui vous intéressent.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "6px", padding: "1.5rem", cursor: "pointer" }}>
            <p style={{ fontFamily: "sans-serif", fontWeight: "600", color: CRIMSON, marginBottom: "0.5rem", fontSize: "15px" }}>Explorer par lieu</p>
            <p style={{ fontSize: "13px", color: "#666", fontFamily: "sans-serif", marginBottom: "1rem" }}>Explorez les collections en sélectionnant les zones géographiques concernées.</p>
            <div style={{ borderRadius: "4px", overflow: "hidden", marginBottom: "1rem", height: "140px", background: "#d4c9b8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", opacity: 0.7 }}>
                <rect width="200" height="160" fill="#c8b89a"/>
                <ellipse cx="100" cy="80" rx="65" ry="60" fill="#a89070" stroke="#8a7055" strokeWidth="1.5"/>
                <ellipse cx="95" cy="50" rx="30" ry="18" fill="#b8a080" stroke="#8a7055" strokeWidth="1"/>
                <ellipse cx="110" cy="100" rx="35" ry="20" fill="#b8a080" stroke="#8a7055" strokeWidth="1"/>
                <circle cx="100" cy="75" r="3" fill="#7B1D35"/>
                <text x="100" y="72" textAnchor="middle" fontSize="8" fill="#5a1426" fontFamily="sans-serif">Paris</text>
              </svg>
            </div>
            <button onClick={()=> navigate("/carte")} style={{ color: CRIMSON, background: "none", border: "none", fontFamily: "sans-serif", fontSize: "13px", cursor: "pointer", fontWeight: "600", padding: 0 }}>Voir la carte →</button>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "6px", padding: "1.5rem" }}>
            <p style={{ fontFamily: "sans-serif", fontWeight: "600", color: CRIMSON, marginBottom: "0.5rem", fontSize: "15px" }}>Explorer par thème</p>
            <p style={{ fontSize: "13px", color: "#666", fontFamily: "sans-serif", marginBottom: "1.2rem" }}>Trouvez ce que vous recherchez en explorant les grandes thématiques du corpus.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {["Politique", "Économie", "Sports", "Arts et culture", "International", "Mouvements sociaux"].map(t => (
                <button key={t} style={{ background: CRIMSON_LIGHT, color: CRIMSON, border: "1px solid " + CRIMSON, padding: "7px 8px", borderRadius: "20px", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>{t}</button>
              ))}
            </div>
          </div>
        </div>
 
        {/* LES TEMPS FORTS */}
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: "700", color: CRIMSON, marginBottom: "1.5rem" }}>Les temps forts de l'année 1936</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    objectPosition: item.imgPosition,
                    filter: "grayscale(0.2) sepia(0.15)",
                    display: "block"
                  }}
                />
                <span style={{ position: "absolute", bottom: "8px", left: "8px", background: item.typeColor, color: "#fff", fontSize: "10px", fontFamily: "sans-serif", fontWeight: "700", padding: "2px 8px", borderRadius: "2px", letterSpacing: "0.08em" }}>{item.type}</span>
                <button style={{ position: "absolute", bottom: "8px", right: "8px", background: "rgba(0,0,0,0.4)", border: "none", borderRadius: "50%", width: "24px", height: "24px", color: "#fff", fontSize: "12px", cursor: "pointer" }}>🔖</button>
              </div>
              <div style={{ padding: "12px" }}>
                <a href="#" style={{ fontFamily: "Georgia, serif", fontSize: "14px", fontWeight: "700", color: "#1a1a1a", textDecoration: "underline", display: "block", marginBottom: "4px", lineHeight: "1.3" }}>{item.title}</a>
                <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", marginBottom: "6px" }}>{item.date}</p>
                <p style={{ fontSize: "12px", color: "#555", fontFamily: "sans-serif", lineHeight: "1.4", marginBottom: "10px" }}>{item.desc}</p>
                <a href="#" style={{ fontSize: "12px", color: "#555", fontFamily: "sans-serif", textDecoration: "none" }}>Consulter ↗</a>
              </div>
            </div>
          ))}
        </div>
 
        {/* RESSOURCES */}
        <div style={{ background: "#f0ebe6", border: "1px solid #e0dbd5", borderRadius: "6px", padding: "2rem", marginBottom: "2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: "1.2rem", right: "1.2rem", width: "44px", height: "44px", borderRadius: "50%", background: CRIMSON, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>💬</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.7rem", color: "#1a1a1a" }}>Ressources partagées</h3>
              <p style={{ fontSize: "13px", color: "#555", fontFamily: "sans-serif", lineHeight: "1.6", marginBottom: "1rem" }}>Rejoignez nos experts et passionnés pour enrichir la connaissance collective. Les corpus validés par la communauté sont utilisés pour affiner les réponses de l'IA.</p>
              <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "9px 20px", borderRadius: "4px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>Parcourir →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {sharedResources.map((r, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "6px", padding: "1rem", border: "1px solid #e0dbd5" }}>
                  <p style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px", color: CRIMSON, marginBottom: "4px" }}>{r.name}</p>
                  <p style={{ fontSize: "12px", color: "#333", fontFamily: "Georgia, serif", marginBottom: "8px", lineHeight: "1.3" }}>{r.title}</p>
                  <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>{r.collections} collections · {r.revues} revues de presse</p>
                </div>
              ))}
            </div>
          </div>
        </div>
 
      </div>
 
      {/* FOOTER */}
      <div style={{ background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "3rem 2rem" }}>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.7rem" }}>La lettre GallicAI</h3>
        <p style={{ fontSize: "13px", color: "#aaa", fontFamily: "sans-serif", marginBottom: "1.5rem" }}>Chaque mois, recevez toute l'actualité de Gallica grâce à notre lettre d'information mensuelle.</p>
        <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "10px 30px", borderRadius: "4px", fontSize: "14px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>S'inscrire</button>
        <p style={{ fontSize: "11px", color: "#555", fontFamily: "sans-serif", marginTop: "2rem" }}>© 2026 GallicAI · L'Archive numérique</p>
      </div>
 
    </div>
  );
}