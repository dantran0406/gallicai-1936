import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
 
const CRIMSON = "#7B1D35";
 
const tabTypes = [
  { label: "Tous les résultats", count: 1248 },
  { label: "Articles de presse", count: 842 },
  { label: "Documents d'archives", count: 356 },
  { label: "Publications", count: 167 },
  { label: "Médias", count: 147 },
];
 
const lieuxData = [
  { label: "Paris", count: 482 },
  { label: "Lyon", count: 176 },
  { label: "Marseille", count: 128 },
  { label: "Lille", count: 98 },
];
 
const thematiqueData = [
  { label: "Front populaire", count: 634 },
  { label: "Sports", count: 512 },
  { label: "Politique", count: 402 },
  { label: "Économie", count: 286 },
  { label: "Culture et Arts", count: 198 },
];
 
const typeDocData = [
  { label: "Presse", count: 842 },
  { label: "Images", count: 231 },
  { label: "Monographies", count: 128 },
  { label: "Brochures", count: 47 },
];
 
const typeBadgeColors = {
  Presse: CRIMSON,
  Brochures: "#6a4c93",
  Images: "#2d6a4a",
};
 
const results = [
  {
    id: 1,
    img: "/images/061936.jpg",
    title: "Grève générale ou révolution ? — Le débat au sein de la CGT",
    date: "11 juin 1936",
    desc: "Les tensions montent dans plusieurs secteurs. Les syndicats débattent de la stratégie à adopter face au gouvernement.",
    source: "Le Populaire",
    type: "Presse",
  },
  {
    id: 2,
    img: "/images/greve-generale2.jpg",
    title: "Tract de la CGT — Appel à la grève générale",
    date: "9 juin 1936",
    desc: "Appel à la mobilisation générale des travailleurs pour obtenir la satisfaction des revendications.",
    source: "Archives nationales",
    type: "Brochures",
  },
  {
    id: 3,
    img: "/images/10juin1936.jpg",
    title: "Les usines occupées à Saint-Étienne",
    date: "10 juin 1936",
    desc: "Reportage sur les occupations d'usines et la mise en place de comités de grève.",
    source: "Le Progrès",
    type: "Images",
  },
  {
    id: 4,
    img: "/images/accordmatignon.png",
    title: "Les Accords Matignon — Texte intégral",
    date: "11 juin 1936",
    desc: "Texte officiel des accords signés entre le gouvernement et les organisations syndicales.",
    source: "Le Populaire",
    type: "Presse",
  },
];
 
export default function ExplorerResultats() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [affichage, setAffichage] = useState("liste");
  const [checkedLieux, setCheckedLieux] = useState([]);
  const [checkedThemes, setCheckedThemes] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [periode, setPeriode] = useState("Juin 1936");
  const [lieu, setLieu] = useState("France");
  const [theme, setTheme] = useState("Grèves");
 
  const toggleItem = (list, setList, label) => {
    setList(prev => prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]);
  };
 
  return (
    <div style={{ background: "#f7f5f2", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <Navbar />
 
      {/* HERO compact */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/accueil.jpeg" alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
          <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(251,248,248,0.45)" }} />
        </div>
        <div style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#000", fontSize: "28px", cursor: "pointer" }}
          onClick={() => navigate(-1)}>‹</div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: "700", color: "#000", margin: "0 0 0.4rem", letterSpacing: "-1px" }}>GallicAI — 1936</h1>
          <p style={{ color: "#000", fontSize: "1.2rem", fontFamily: "Georgia, serif", fontWeight: "300", margin: 0 }}>
            L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
          </p>
        </div>
      </div>
 
      {/* MAIN */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
 
        {/* Title */}
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", fontWeight: "700", color: CRIMSON, marginBottom: "0.3rem" }}>Explorer les resultats</h2>
        <p style={{ fontSize: "13px", color: "#666", fontFamily: "sans-serif", marginBottom: "1.5rem" }}>Selectionnez une période, un lieu et un thème pour obtenir des résultats ciblés.</p>
 
        {/* Filtres combinés */}
        <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1rem 1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { icon: "📅", label: "Période", val: periode, set: setPeriode },
            { icon: "📍", label: "Lieu", val: lieu, set: setLieu },
            { icon: "🏷️", label: "Thème", val: theme, set: setTheme },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {i > 0 && <span style={{ color: "#bbb", fontSize: "18px" }}>+</span>}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #ddd", borderRadius: "4px", padding: "7px 12px", background: "#fafafa", cursor: "pointer" }}>
                <span>{item.icon}</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "10px", color: "#aaa", fontFamily: "sans-serif" }}>{item.label}</span>
                  <span style={{ fontSize: "13px", fontWeight: "500", fontFamily: "sans-serif" }}>{item.val}</span>
                </div>
                <span style={{ color: "#999", fontSize: "11px" }}>▼</span>
              </div>
            </div>
          ))}
          <button style={{ marginLeft: "auto", background: CRIMSON, color: "#fff", border: "none", padding: "10px 22px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
            Lancer la recherche →
          </button>
        </div>
 
        {/* Tabs */}
        <div style={{ border: "1px solid #e0dbd5", borderRadius: "8px", background: "#fff", marginBottom: "1rem", overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid #e0dbd5" }}>
            {tabTypes.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                style={{ flex: 1, padding: "12px 8px", background: "none", border: "none", cursor: "pointer", borderBottom: activeTab === i ? "3px solid " + CRIMSON : "3px solid transparent", fontFamily: "sans-serif", fontSize: "13px", fontWeight: activeTab === i ? "700" : "400", color: activeTab === i ? "#1a1a1a" : "#888" }}>
                {tab.label}<br />
                <span style={{ fontSize: "15px", fontWeight: "700", color: activeTab === i ? CRIMSON : "#555" }}>{tab.count.toLocaleString()}</span>
              </button>
            ))}
          </div>
 
          <div style={{ display: "flex" }}>
            {/* Sidebar filtres */}
            <div style={{ width: "220px", flexShrink: 0, borderRight: "1px solid #e0dbd5", padding: "1.2rem" }}>
 
              {/* Résultats count */}
              <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "1.2rem", color: "#1a1a1a" }}>
                {tabTypes[activeTab].count.toLocaleString()} résultats
              </p>
 
              {/* Lieu */}
              <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", fontWeight: "700", marginBottom: "0.6rem" }}>Lieu</h4>
              <input placeholder="Rechercher un lieu" style={{ width: "100%", border: "1px solid #ddd", borderRadius: "4px", padding: "5px 8px", fontSize: "12px", fontFamily: "sans-serif", outline: "none", marginBottom: "0.6rem", boxSizing: "border-box" }} />
              {lieuxData.map(l => (
                <div key={l.label} onClick={() => toggleItem(checkedLieux, setCheckedLieux, l.label)}
                  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px", cursor: "pointer" }}>
                  <div style={{ width: "13px", height: "13px", border: "1px solid " + (checkedLieux.includes(l.label) ? CRIMSON : "#bbb"), borderRadius: "2px", background: checkedLieux.includes(l.label) ? CRIMSON : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {checkedLieux.includes(l.label) && <span style={{ color: "#fff", fontSize: "9px" }}>✓</span>}
                  </div>
                  <span style={{ fontSize: "12px", fontFamily: "sans-serif", flex: 1 }}>{l.label}</span>
                  <span style={{ fontSize: "11px", color: "#aaa", fontFamily: "sans-serif" }}>{l.count}</span>
                </div>
              ))}
              <button style={{ background: "none", border: "none", color: CRIMSON, fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer", padding: 0, marginBottom: "1.2rem" }}>Voir plus →</button>
 
              {/* Thématique */}
              <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", fontWeight: "700", marginBottom: "0.6rem" }}>Thématique</h4>
              {thematiqueData.map(t => (
                <div key={t.label} onClick={() => toggleItem(checkedThemes, setCheckedThemes, t.label)}
                  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px", cursor: "pointer" }}>
                  <div style={{ width: "13px", height: "13px", border: "1px solid " + (checkedThemes.includes(t.label) ? CRIMSON : "#bbb"), borderRadius: "2px", background: checkedThemes.includes(t.label) ? CRIMSON : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {checkedThemes.includes(t.label) && <span style={{ color: "#fff", fontSize: "9px" }}>✓</span>}
                  </div>
                  <span style={{ fontSize: "12px", fontFamily: "sans-serif", flex: 1 }}>{t.label}</span>
                  <span style={{ fontSize: "11px", color: "#aaa", fontFamily: "sans-serif" }}>{t.count}</span>
                </div>
              ))}
              <button style={{ background: "none", border: "none", color: CRIMSON, fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer", padding: 0, marginBottom: "1.2rem" }}>Voir plus →</button>
 
              {/* Type de document */}
              <h4 style={{ fontFamily: "sans-serif", fontSize: "13px", fontWeight: "700", marginBottom: "0.6rem" }}>Type de document</h4>
              {typeDocData.map(t => (
                <div key={t.label} onClick={() => toggleItem(checkedTypes, setCheckedTypes, t.label)}
                  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px", cursor: "pointer" }}>
                  <div style={{ width: "13px", height: "13px", border: "1px solid " + (checkedTypes.includes(t.label) ? CRIMSON : "#bbb"), borderRadius: "2px", background: checkedTypes.includes(t.label) ? CRIMSON : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {checkedTypes.includes(t.label) && <span style={{ color: "#fff", fontSize: "9px" }}>✓</span>}
                  </div>
                  <span style={{ fontSize: "12px", fontFamily: "sans-serif", flex: 1 }}>{t.label}</span>
                  <span style={{ fontSize: "11px", color: "#aaa", fontFamily: "sans-serif" }}>{t.count}</span>
                </div>
              ))}
 
              <button style={{ background: "#f0ebe6", border: "1px solid #ddd", borderRadius: "20px", padding: "6px 14px", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", color: "#555", marginTop: "1rem", width: "100%" }}>
                Enregistrer cette recherche
              </button>
            </div>
 
            {/* Results list */}
            <div style={{ flex: 1, padding: "1.2rem" }}>
              {/* Sort + affichage */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "13px", color: "#555", fontFamily: "sans-serif" }}>{tabTypes[activeTab].count.toLocaleString()} résultats</span>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>Trier par :</span>
                    <select style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "4px 8px", fontSize: "12px", fontFamily: "sans-serif", outline: "none", cursor: "pointer" }}>
                      <option>Pertinence</option>
                      <option>Date</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>Affichage :</span>
                    <button onClick={() => setAffichage("grille")}
                      style={{ background: affichage === "grille" ? "#f0ebe6" : "none", border: "1px solid #ddd", borderRadius: "4px", padding: "4px 8px", cursor: "pointer", fontSize: "14px" }}>⊞</button>
                    <button onClick={() => setAffichage("liste")}
                      style={{ background: affichage === "liste" ? "#f0ebe6" : "none", border: "1px solid " + (affichage === "liste" ? CRIMSON : "#ddd"), borderRadius: "4px", padding: "4px 8px", cursor: "pointer", fontSize: "14px" }}>☰</button>
                  </div>
                </div>
              </div>
 
              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {results.map(item => (
                  <div key={item.id} style={{ display: "flex", background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ width: "130px", flexShrink: 0 }}>
                      <img src={item.img} alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.2) sepia(0.1)", display: "block" }}
                        onError={e => { e.target.style.background = "#c8b09a"; e.target.src = ""; }} />
                    </div>
                    <div style={{ padding: "1rem 1.2rem", flex: 1 }}>
                      <h4 style={{ fontFamily: "Georgia, serif", fontSize: "15px", fontWeight: "700", color: "#1a1a1a", margin: "0 0 6px", lineHeight: "1.3" }}>{item.title}</h4>
                      <p style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif", marginBottom: "4px", fontWeight: "600" }}>{item.date}</p>
                      <p style={{ fontSize: "13px", color: "#555", fontFamily: "sans-serif", lineHeight: "1.5", marginBottom: "8px" }}>{item.desc}</p>
                      <p style={{ fontSize: "12px", color: "#555", fontFamily: "sans-serif", marginBottom: "8px" }}>{item.source}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ background: typeBadgeColors[item.type] || "#555", color: "#fff", fontSize: "10px", fontFamily: "sans-serif", fontWeight: "700", padding: "2px 10px", borderRadius: "2px", letterSpacing: "0.08em" }}>{item.type}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <button onClick={() => navigate("/document")}
                            style={{ background: "none", border: "none", color: "#555", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", textDecoration: "underline" }}>
                            Consulter ↗
                          </button>
                          <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", color: "#aaa" }}>⤴</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
 
              {/* Pagination */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginTop: "2rem" }}>
                <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "6px 10px", cursor: "pointer", fontSize: "13px" }}>‹</button>
                {[1, 2, 3, 4].map(n => (
                  <button key={n} style={{ background: n === 1 ? CRIMSON : "none", color: n === 1 ? "#fff" : "#555", border: "1px solid " + (n === 1 ? CRIMSON : "#ddd"), borderRadius: "4px", padding: "6px 12px", cursor: "pointer", fontSize: "13px", fontFamily: "sans-serif" }}>{n}</button>
                ))}
                <span style={{ fontSize: "13px", color: "#888" }}>...</span>
                <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "6px 12px", cursor: "pointer", fontSize: "13px", color: "#555" }}>25</button>
                <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "6px 10px", cursor: "pointer", fontSize: "13px" }}>›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}