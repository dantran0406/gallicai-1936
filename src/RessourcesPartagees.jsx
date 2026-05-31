import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CRIMSON = "#7B1D35";
const CRIMSON_LIGHT = "#f5e8eb";

export default function RessourcesPartagees() {
  const navigate = useNavigate();

  // Quản lý trạng thái đóng/mở chi tiết của từng thẻ bài viết (Theo Corpus 2.jpg)
  const [expandedId, setExpandedId] = useState("pierre-renard"); // Mặc định mở bài đầu tiên giống ảnh mẫu
  
  // Quản lý trạng thái đóng/mở hộp thoại Modal chia sẻ (Theo Corpus 3.jpg)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Quản lý trạng thái hover cho các thẻ danh mục phổ biến
  const [hoveredTheme, setHoveredTheme] = useState(null);

  const popularThemes = [
    { name: "politiques", count: "245 corpus" },
    { name: "sports", count: "203 corpus" },
    { name: "économies", count: "198 corpus" },
    { name: "arts et cultures", count: "351 corpus" },
  ];

  const communitySelections = [
    {
      id: "pierre-renard",
      author: "Dr. Pierre Renard",
      role: "Enseignant-Chercheur En Histoire Contemporaine",
      subRole: "Histoire Des Médias Et De La Presse",
      title: "Le Traitement Médiatique Des Conflits Sociaux De 1936",
      desc: "Cette recherche documentaire analyse la couverture par la presse française des mouvements de grève de mai-juin 1936, en comparant les approches éditoriales selon les orientations politiques des journaux.",
      collections: "4 collections",
      itemsCount: "10 revues de presse",
      tag: "Presse",
      // Dữ liệu mở rộng chi tiết cấu trúc nhóm báo chí (Dành cho trạng thái Corpus 2.jpg)
      details: [
        {
          groupName: "Presse de gauche",
          count: "3 articles",
          links: ["le populaire - 8 juin 1936", "l'humanité - 11 juin 1936", "ce soir - 12 juin 1936"]
        },
        {
          groupName: "Presse de droite",
          count: "3 articles",
          links: ["le figaro - 9 juin 1936", "le temps - 10 juin 1936", "l'action française - 8 juin 1936"]
        },
        {
          groupName: "Presse syndicale",
          count: "2 articles",
          links: ["le peuple (cgt) - 7 juin 1936", "la vie ouvrière - 10 juin 1936"]
        }
      ]
    },
    {
      id: "aurelie-mulin",
      author: "Aurélie Moulin",
      role: "Étudiante En Master 2 Histoire",
      subRole: "Histoire Sociale",
      title: "Le Front Populaire Et Les Acquis Sociaux",
      desc: "Mémoire de master portant sur les conquêtes sociales du front populaire, notamment les accords de matignon et leurs conséquences sur le monde ouvrier français.",
      collections: "3 collections",
      itemsCount: "9 articles",
      tag: "Politique",
    },
    {
      id: "marc-dubois",
      author: "Marc Dubois",
      role: "Étudiant En Licence 3 STAPS",
      subRole: "Histoire Du Sport",
      title: "Sport Et Politique Aux JO De Berlin 1936",
      desc: "Travail de recherche sur les enjeux politiques des jeux olympiques de berlin 1936 et la participation française dans un contexte de montée du nazisme.",
      collections: "3 collections",
      itemsCount: "6 articles",
      tag: "Sports",
    },
    {
      id: "sophie-martin",
      author: "Sophie Martin",
      role: "Doctorante En Histoire",
      subRole: "Relations Internationales",
      title: "La Guerre Civile Espagnole Vue De France",
      desc: "Thèse de doctorat analysant la perception française de la guerre civile espagnole (1936-1939), entre solidarité républicaine et politique de non-intervention.",
      collections: "5 collections",
      itemsCount: "8 articles",
      tag: "Mouvements Sociaux",
    }
  ];

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#fff", minHeight: "100vh", color: "#1a1a1a", position: "relative" }}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO BANNER BAN ĐẦU */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/images/accueil.jpeg"
            alt="GallicAI 1936 background"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)" }} />
        </div>
        
        {/* Nút Back quay về trang trước */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "24px", cursor: "pointer", zIndex: 2, color: "#1a1a1a" }}
        >
          ❮
        </button>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "2.2rem", fontWeight: "700", color: "#1a1a1a", margin: "0 0 0.2rem" }}>GallicAI — 1936</h1>
          <p style={{ color: "#333", fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600", letterSpacing: "0.02em" }}>
            L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
          </p>
        </div>
      </div>

      {/* NỘI DUNG CHÍNH TIÊU ĐỀ & THANH TÌM KIẾM KHU VỰC RESSOUCES */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "2rem", fontWeight: "700", margin: "0 0 0.5rem", color: "#1a1a1a" }}>Ressources partagées</h2>
          </div>
          
          {/* THANH TÌM KIẾM NHỎ PHÍA TRÊN BÊN PHẢI */}
          <div style={{ display: "flex", alignItems: "center", width: "380px", background: "#f2ebed", borderRadius: "20px", padding: "4px 4px 4px 10px", border: "1px solid #e0d5d7" }}>
            <span style={{ color: "#999", fontSize: "13px", marginRight: "6px" }}>🔍</span>
            <input 
              type="text" 
              placeholder="Mouvements politiques de 1936?" 
              style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: "11px", fontFamily: "sans-serif" }} 
            />
            <button style={{ background: CRIMSON, color: "#fff", border: "none", borderRadius: "15px", padding: "4px 12px", fontSize: "10px", fontFamily: "sans-serif", fontWeight: "600", cursor: "pointer" }}>
              Demander à l'IA
            </button>
          </div>
        </div>

        {/* ĐOẠN TRÍCH MÔ TẢ ĐẦU TRANG */}
        <div style={{ borderLeft: `3px solid ${CRIMSON}`, paddingLeft: "12px", marginBottom: "2rem" }}>
          <p style={{ fontStyle: "italic", fontSize: "13px", color: "#333", lineHeight: "1.5", margin: 0, fontFamily: "'Georgia', serif" }}>
            Explorez les sélections documentaires constituées par la communauté. Inspirez-vous de leurs corpus, parcourez leurs collections, et lancez vos propres recherches à partir de leurs travaux.
          </p>
        </div>

        {/* THANH DANH MỤC THỂ LOẠI PHỔ BIẾN (POPULAIRES) */}
        <div style={{ background: CRIMSON, borderRadius: "4px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}>
          <span style={{ color: "#fff", fontFamily: "'Georgia', serif", fontSize: "13px", fontWeight: "600", marginRight: "8px" }}>Les thématiques populaires</span>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {popularThemes.map((theme) => {
              const isHovered = hoveredTheme === theme.name;
              return (
                <div 
                  key={theme.name}
                  onMouseEnter={() => setHoveredTheme(theme.name)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  style={{ 
                    background: isHovered ? CRIMSON_LIGHT : "#fff", 
                    color: isHovered ? CRIMSON : "#1a1a1a",
                    padding: "4px 10px", 
                    borderRadius: "12px", 
                    fontSize: "10px", 
                    fontFamily: "sans-serif", 
                    display: "flex", 
                    gap: "6px", 
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <span style={{ fontWeight: "600" }}>{theme.name}</span>
                  <span style={{ color: isHovered ? CRIMSON : "#666", fontSize: "9px" }}>{theme.count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* DANH SÁCH CÁC BỘ SƯU TẬP TỪ CỘNG ĐỒNG */}
        <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.2rem" }}>Sélections de la communauté</h3>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {communitySelections.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <div key={item.id} style={{ background: "#fcf9f9", border: "1px solid #f0e6e8", borderRadius: "8px", padding: "1.5rem", position: "relative" }}>
                
                {/* Khu vực Header của thẻ */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.2rem" }}>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: "700", margin: 0, fontFamily: "'Georgia', serif" }}>{item.author}</h4>
                  <span style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "2px 10px", fontSize: "10px", color: "#666", fontFamily: "sans-serif" }}>
                    {item.role}
                  </span>
                  <span style={{ background: "#dfd5d7", color: "#666", borderRadius: "10px", padding: "2px 8px", fontSize: "10px", fontFamily: "sans-serif" }}>
                    Public
                  </span>

                  {/* Nút ẩn/hiện chi tiết (Chuyển đổi giữa Corpus 1 và Corpus 2) */}
                  <button 
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    style={{ marginLeft: "auto", background: "none", border: "none", color: "#666", fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    {isExpanded ? "Masquer ↑" : "Voir détails →"}
                  </button>
                </div>

                {/* SubRole xuất hiện khi mở rộng chi tiết (Theo hình mẫu Corpus 2.jpg) */}
                {isExpanded && item.subRole && (
                  <p style={{ margin: "0 0 0.5rem", fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>{item.subRole}</p>
                )}

                <h5 style={{ fontFamily: "'Georgia', serif", fontSize: "14px", fontWeight: "700", margin: "0.5rem 0", textTransform: "capitalize" }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.5", margin: "0 0 1rem", fontFamily: "sans-serif" }}>
                  {item.desc}
                </p>

                {/* Khu vực lưu trữ thông số count & tag */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", borderBottom: isExpanded ? "1px solid #ebdcd9" : "none", paddingBottom: isExpanded ? "12px" : "0" }}>
                  <span style={{ fontSize: "11px", color: "#666", fontFamily: "sans-serif" }}>{item.collections}</span>
                  <span style={{ fontSize: "11px", color: "#666", fontFamily: "sans-serif" }}>{item.itemsCount}</span>
                  <span style={{ background: "#ebdcd9", color: CRIMSON, borderRadius: "12px", padding: "3px 12px", fontSize: "11px", fontFamily: "sans-serif", fontWeight: "500", marginLeft: "12px" }}>
                    {item.tag}
                  </span>
                </div>

                {/* KHU VỰC CHI TIẾT SỔ XUỐNG KHI ĐƯỢC CHỌN (TRẠNG THÁI CORPUS 2.JPG) */}
                {isExpanded && item.details && (
                  <div style={{ marginTop: "1.2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {item.details.map((group, idx) => (
                      <div key={idx} style={{ background: "#fff", border: "1px solid #ebdcd9", borderRadius: "6px", padding: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem", borderBottom: "1px dashed #f0e6e8", paddingBottom: "6px" }}>
                          <span style={{ fontWeight: "700", fontSize: "13px", fontFamily: "'Georgia', serif" }}>{group.groupName}</span>
                          <span style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>{group.count}</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {group.links.map((linkText, lIdx) => (
                            <div key={lIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "12px", color: "#1a1a1a", fontFamily: "sans-serif", textTransform: "capitalize" }}>{linkText}</span>
                              <span style={{ fontSize: "11px", color: CRIMSON, cursor: "pointer", fontFamily: "sans-serif" }}>Ouvrir ↗</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Các nút chức năng dưới cùng của mục mở rộng */}
                    <div style={{ display: "flex", gap: "10px", marginTop: "0.5rem" }}>
                      <button style={{ flex: 1, background: CRIMSON, color: "#fff", border: "none", borderRadius: "4px", padding: "8px", fontSize: "11px", fontFamily: "sans-serif", fontWeight: "600", cursor: "pointer" }}>
                        Sauvegarder ce corpus
                      </button>
                      <button 
                        onClick={() => setIsModalOpen(true)} // Mở cửa sổ chia sẻ (Corpus 3.jpg)
                        style={{ background: "#fff", color: "#1a1a1a", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 24px", fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer" }}
                      >
                        Partager
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Nút xem thêm dưới danh sách */}
        <div style={{ textAlign: "right", marginTop: "1rem" }}>
          <span style={{ fontSize: "12px", color: "#666", cursor: "pointer", fontFamily: "sans-serif" }}>Voir plus →</span>
        </div>

        {/* KHỐI BOTTOM: KÊU GỌI TẠO BỘ SƯU TẬP MỚI */}
        <div style={{ marginTop: "3rem", background: "#fdfbfb", border: "1px dashed #dcd0d2", borderRadius: "8px", padding: "2.5rem", textAlign: "center" }}>
          <h4 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: "700", margin: "0 0 0.5rem" }}>
            Créez et partagez votre propre sélection
          </h4>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 1.5rem", fontFamily: "sans-serif" }}>
            Organisez votre sélection dans votre bibliothèque et partagez-la avec la communauté.
          </p>
          <button style={{ background: CRIMSON, color: "#fff", border: "none", borderRadius: "20px", padding: "8px 30px", fontSize: "12px", fontFamily: "sans-serif", fontWeight: "600", cursor: "pointer" }}>
            Créer ➔
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* GIAO DIỆN HỘP THOẠI MODAL PHẦN CHIA SẺ (ỨNG VỚI HÌNH Corpus 3.jpg) */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
          <div style={{ background: "#fff", width: "460px", borderRadius: "4px", padding: "1.8rem", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", position: "relative" }}>
            
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.3rem", fontWeight: "700", margin: "0 0 1.5rem", color: "#000" }}>
              Partager la sélection
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "1.5rem" }}>
              
              {/* Trường dữ liệu 1 */}
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "4px", fontFamily: "sans-serif" }}>
                  Type de travaux
                </label>
                <input 
                  type="text" 
                  defaultValue="Recherche documentaire" 
                  style={{ width: "100%", border: "1px solid #ccc", borderRadius: "2px", padding: "6px 8px", fontSize: "11px", fontFamily: "sans-serif", boxSizing: "border-box" }} 
                />
              </div>

              {/* Trường dữ liệu 2 */}
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "4px", fontFamily: "sans-serif" }}>
                  Description courte
                </label>
                <textarea 
                  rows="3"
                  defaultValue="Analyse de la couverture médiatique des grèves de juin 1936 dans la presse française, de Populaire au Figaro. Comparaison des choix éditoriaux." 
                  style={{ width: "100%", border: "1px solid #ccc", borderRadius: "2px", padding: "6px 8px", fontSize: "11px", fontFamily: "sans-serif", boxSizing: "border-box", resize: "none", lineHeight: "1.4" }} 
                />
              </div>

              {/* Trường dữ liệu 3 */}
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", marginBottom: "4px", fontFamily: "sans-serif" }}>
                  Envoyer à
                </label>
                <input 
                  type="text" 
                  defaultValue="Aussi - Étudiant Licence 3 - Science politique" 
                  style={{ width: "100%", border: "1px solid #ccc", borderRadius: "2px", padding: "6px 8px", fontSize: "11px", fontFamily: "sans-serif", boxSizing: "border-box" }} 
                />
              </div>

            </div>

            {/* Cụm nút hành động của Modal */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: "#000", color: "#fff", border: "none", borderRadius: "12px", padding: "6px 20px", fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer" }}
              >
                Annuler
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: CRIMSON, color: "#fff", border: "none", borderRadius: "12px", padding: "6px 20px", fontSize: "11px", fontFamily: "sans-serif", fontWeight: "600", cursor: "pointer" }}
              >
                Partager
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}