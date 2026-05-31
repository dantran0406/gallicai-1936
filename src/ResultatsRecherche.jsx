import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
 
const CRIMSON = "#7B1D35";
 
const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Juil","Aoû","Sep","Oct","Nov","Déc"];
const barHeights = [20, 15, 18, 35, 60, 90, 75, 40, 25, 30, 20, 15];
 
// ── Données pour "Evènements politiques de juin 1936" ──────────────────────
const docsPolitiques = [
  {
    id: 1, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/front-populaire.jpg",
    title: "Le gouvernement de Front Populaire à l'oeuvre",
    date: "10 juin 1936", source: "Populaire", dot: "red",
  },
  {
    id: 2, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/greve-generale.jpg",
    title: "270 000 grevistes reprennent le travail dans le Nord",
    date: "11 juin 1936", source: "L'humanité", dot: "red",
  },
  {
    id: 3, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/guerre-espagne.jpg",
    title: "Des luttes, des accords, des victoires",
    date: "11 Juin 1936", source: "L'humanité", dot: "red",
  },
  {
    id: 4, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/greve-generale.jpg",
    title: "Victoire dans la métalurgie et le batiment",
    date: "13 juin 1936", source: "L'humanité", dot: "red",
  },
  {
    id: 5, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/guerre-espagne.jpg",
    title: "L'angleterre et la levée des sanctions",
    date: "20 juin 1936", source: "La Croix", dot: "green",
  },
  {
    id: 6, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/front-populaire.jpg",
    title: "La grève et les incidents à travers la France",
    date: "28 juin 1936", source: "L'Ouest-éclair", dot: "green",
  },
];
 
// ── Données pour "Les évènements marquants de 1936" ────────────────────────
const docsMarquants = [
  {
    id: 1, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/reaction.jpeg",
    title: "Réactions à la signature des accords de Matignon",
    date: "8 juin 1936", source: "", dot: "red",
    isDetail: true,
  },
  {
    id: 2, type: "PRESSE", typeColor: CRIMSON,
    img: "/images/le-figaro.png",
    title: "Le Figaro l'heure de vérité",
    date: "11 mai 1936", source: "", dot: "blue",
  },
  {
    id: 3, type: "IMAGE", typeColor: "#1a3a5c",
    img: "/images/jo-berlin.jpg",
    title: "Jeux olympiques de Berlin",
    date: "1 août 1936", source: "", dot: "purple",
  },
  {
    id: 4, type: "IMAGE", typeColor: "#1a3a5c",
    img: "/images/tour-de-france.jpeg",
    title: "Le Tour de France",
    date: "7 juillet 1936", source: "", dot: "green",
  },
  {
    id: 5, type: "IMAGE", typeColor: "#1a3a5c",
    img: "/images/assassinat.jpg",
    title: "Assassinat de José Calvo Sotelo",
    date: "13 juillet 1936", source: "", dot: "red",
  },
  {
    id: 6, type: "BROCHURE", typeColor: "#2d6a2d",
    img: "/images/40h.jpeg",
    title: "Semaine de 40 heures",
    date: "12 juin 1936", source: "", dot: "green",
  },
];
 
const thematiques = [
  { label: "Politique", count: 1248 },
  { label: "Mouvement Sociaux", count: 3892, checked: true },
  { label: "Culture", count: 942 },
  { label: "International", count: 2105 },
  { label: "Économie", count: 567 },
  { label: "Sports", count: 124 },
  { label: "Arts", count: 153 },
];
 
const dotColors = { red: "#e53935", green: "#43a047", blue: "#1e88e5", purple: "#8e24aa" };
 
function DocCard({ doc, onClick }) {
  return (
    <div onClick={() => doc.isDetail && onClick && onClick(doc)}
      style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", overflow: "hidden", cursor: doc.isDetail ? "pointer" : "default", transition: "box-shadow 0.2s" }}
      onMouseEnter={e => { if (doc.isDetail) e.currentTarget.style.boxShadow = "0 4px 16px rgba(123,29,53,0.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ position: "relative" }}>
        <img src={doc.img} alt={doc.title}
          style={{ width: "100%", height: "160px", objectFit: "cover", filter: "grayscale(0.3) sepia(0.15)", display: "block" }}
          onError={e => { e.target.style.background = "#c8b09a"; e.target.src = ""; }}
        />
        <span style={{ position: "absolute", bottom: "8px", left: "8px", background: doc.typeColor, color: "#fff", fontSize: "10px", fontFamily: "sans-serif", fontWeight: "700", padding: "2px 8px", borderRadius: "2px", letterSpacing: "0.08em" }}>{doc.type}</span>
      </div>
      <div style={{ padding: "12px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "6px" }}>
          <a href="#" style={{ fontFamily: "Georgia, serif", fontSize: "13px", fontWeight: "700", color: "#1a1a1a", textDecoration: "underline", lineHeight: "1.4" }}>{doc.title}</a>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: dotColors[doc.dot] || "#888", flexShrink: 0, marginTop: "4px" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif", marginBottom: "4px" }}>{doc.date}</p>
        {doc.source && <p style={{ fontSize: "12px", color: "#555", fontFamily: "sans-serif", marginBottom: "10px" }}>{doc.source}</p>}
        <div style={{ borderTop: "1px solid #f0ebe6", paddingTop: "10px", marginTop: "6px" }}>
          <a href="#" style={{ fontSize: "12px", color: "#555", fontFamily: "sans-serif", textDecoration: "none" }}>Consulter ↗</a>
        </div>
      </div>
    </div>
  );
}
 
export default function ResultatsRecherche() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.state?.query || "";
 
  const isPolitique = query.toLowerCase().includes("politique");
  const docs = isPolitique ? docsPolitiques : docsMarquants;
  const titre = isPolitique ? "Événements politiques de juin 1936" : "Les événements marquants de 1936";
  const nbDocs = isPolitique ? "3,633 Documents" : "1,248 Documents";
 
  const [checkedThemes, setCheckedThemes] = useState(
    isPolitique ? ["Mouvement Sociaux"] : ["Politique", "Mouvements Sociaux", "Sports"]
  );
  const [checkedType, setCheckedType] = useState(isPolitique ? ["Presse"] : ["Tous"]);
  const [searchVal, setSearchVal] = useState(query);
 
  const toggleTheme = (label) => {
    setCheckedThemes(prev => prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]);
  };
 
  const handleDocClick = (doc) => {
    navigate("/document", { state: { doc } });
  };
 
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f7f5f2", minHeight: "100vh" }}>
      <Navbar />
 
      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "260px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem 2rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/accueil.jpeg" alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
          <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(251,248,248,0.45)" }} />
        </div>
        <div style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#000", fontSize: "28px", cursor: "pointer", fontWeight: "300" }}
          onClick={() => navigate(-1)}>‹</div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: "700", color: "#000", margin: "0 0 0.5rem", letterSpacing: "-1px" }}>GallicAI — 1936</h1>
          <p style={{ color: "#000", fontSize: "1.2rem", fontFamily: "Georgia, serif", fontWeight: "300", letterSpacing: "0.04em", marginBottom: "1.5rem" }}>
            L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
          </p>
          <div style={{ display: "flex", alignItems: "center", maxWidth: "640px", margin: "0 auto", background: "rgba(255,255,255,0.97)", borderRadius: "30px", border: "2px solid " + CRIMSON, padding: "5px 5px 5px 12px" }}>
            <span style={{ padding: "0 8px", color: "#888", fontSize: "16px" }}>🔍</span>
            <input type="text" value={searchVal} onChange={e => setSearchVal(e.target.value)}
              placeholder="Événements politiques de juin 1936"
              style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", fontFamily: "sans-serif", padding: "10px 0", background: "transparent", color: "#1a1a1a" }} />
            <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "8px 20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500", borderRadius: "20px 0px 20px 20px", flexShrink: 0 }}>
              Demander à l'IA
            </button>
          </div>
        </div>
      </div>
 
      {/* CONTENT */}
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 2rem", gap: "2rem" }}>
 
        {/* SIDEBAR */}
        <div style={{ width: "190px", flexShrink: 0 }}>
          <h3 style={{ fontFamily: "sans-serif", fontSize: "14px", fontWeight: "700", color: CRIMSON, marginBottom: "0.8rem" }}>Explorateur thématique</h3>
          {thematiques.map(t => (
            <div key={t.label} onClick={() => toggleTheme(t.label)}
              style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", cursor: "pointer" }}>
              <div style={{ width: "14px", height: "14px", border: "2px solid " + (checkedThemes.includes(t.label) ? CRIMSON : "#bbb"), borderRadius: "3px", background: checkedThemes.includes(t.label) ? CRIMSON : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {checkedThemes.includes(t.label) && <span style={{ color: "#fff", fontSize: "10px", lineHeight: 1 }}>✓</span>}
              </div>
              <span style={{ fontSize: "13px", fontFamily: "sans-serif", flex: 1, fontWeight: checkedThemes.includes(t.label) ? "700" : "400" }}>{t.label}</span>
              <span style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>{t.count.toLocaleString()}</span>
            </div>
          ))}
 
          <h3 style={{ fontFamily: "sans-serif", fontSize: "14px", fontWeight: "700", marginBottom: "0.8rem", marginTop: "1.5rem" }}>Types de documents ▲</h3>
          {["Tous", "Presse", "Brochures", "Monographies", "Images", "Documents officiels"].map(t => (
            <div key={t} onClick={() => setCheckedType([t])}
              style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", cursor: "pointer" }}>
              <div style={{ width: "14px", height: "14px", border: "2px solid " + (checkedType.includes(t) ? CRIMSON : "#bbb"), borderRadius: "3px", background: checkedType.includes(t) ? CRIMSON : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {checkedType.includes(t) && <span style={{ color: "#fff", fontSize: "10px" }}>✓</span>}
              </div>
              <span style={{ fontSize: "13px", fontFamily: "sans-serif" }}>{t}</span>
            </div>
          ))}
 
          <h3 style={{ fontFamily: "sans-serif", fontSize: "14px", fontWeight: "700", marginBottom: "0.8rem", marginTop: "1.5rem" }}>Pluralité d'opinions</h3>
          {[
            { label: "Presse de gauche", color: "#e53935" },
            { label: "Presse de droite", color: "#555" },
            { label: "Presse centriste", color: "#43a047" },
            { label: "Sources officielles", color: "#1e88e5" },
          ].map(op => (
            <div key={op.label} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: op.color, flexShrink: 0 }} />
              <span style={{ fontSize: "13px", fontFamily: "sans-serif" }}>{op.label}</span>
            </div>
          ))}
        </div>
 
        {/* MAIN */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: "700", color: CRIMSON, margin: 0 }}>{titre}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "5px 12px", fontSize: "13px", fontFamily: "sans-serif", background: "#fff" }}>Pertinence</div>
              <span style={{ fontSize: "16px", color: CRIMSON }}>▼</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
            <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>Résultats de recherche</span>
            <span style={{ background: "#f0ebe6", border: "1px solid #ddd", borderRadius: "4px", padding: "2px 10px", fontSize: "12px", fontFamily: "sans-serif" }}>{nbDocs}</span>
          </div>
 
          {/* Timeline bar chart */}
          <div style={{ background: "#1a1a1a", borderRadius: "6px", padding: "1rem 1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "flex-end", gap: "0", justifyContent: "space-between" }}>
            {months.map((m, i) => (
              <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                <div style={{ width: "70%", background: i === 5 ? CRIMSON : "rgba(255,255,255,0.25)", height: barHeights[i] + "px", borderRadius: "2px 2px 0 0", marginBottom: "6px" }} />
                <span style={{ fontSize: "9px", color: "#aaa", fontFamily: "sans-serif", letterSpacing: "0.04em" }}>{m}</span>
              </div>
            ))}
          </div>
 
          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
            {docs.map(doc => (
              <DocCard key={doc.id} doc={doc} onClick={handleDocClick} />
            ))}
          </div>
 
          {/* Load more */}
          <div style={{ textAlign: "center" }}>
            <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "12px 36px", borderRadius: "30px", fontSize: "14px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
              Afficher plus de résultats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}