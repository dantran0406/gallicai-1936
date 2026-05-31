import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
 
const CRIMSON = "#7B1D35";
 
// ── FRANCE data ───────────────────────────────────────────────────────────────
const regionsFrance = [
  {
    id: "nord", label: "Nord", count: 128, px: 51, py: 8,
    docs: [
      { title: "Grève des mineurs du Nord", date: "5 juin 1936", type: "Article de presse" },
      { title: "Meeting CGT à Lille", date: "12 juin 1936", type: "Photographie" },
      { title: "Usines textiles occupées", date: "18 juin 1936", type: "Photographie" },
    ]
  },
  {
    id: "paris", label: "Région parisienne", count: 342, px: 47, py: 32,
    docs: [
      { title: "Occupation usine Renault Boulogne-Billancourt", date: "11 juin 1936", type: "Photographie" },
      { title: "Manifestation place de la République", date: "14 juillet 1936", type: "Photographie" },
      { title: "Grève SNCF Paris", date: "8 juin 1936", type: "Article de presse" },
    ]
  },
  {
    id: "est", label: "Est", count: 95, px: 73, py: 28,
    docs: [
      { title: "Grève des métallurgistes de Strasbourg", date: "9 juin 1936", type: "Article de presse" },
      { title: "Usines Peugeot occupées", date: "3 juin 1936", type: "Photographie" },
    ]
  },
  {
    id: "lyon", label: "Lyon et région", count: 87, px: 60, py: 56,
    docs: [
      { title: "Grève générale à Lyon", date: "7 juin 1936", type: "Article de presse" },
      { title: "Manifestation place Bellecour", date: "15 juin 1936", type: "Photographie" },
    ]
  },
  {
    id: "marseille", label: "Marseille et Provence", count: 76, px: 65, py: 76,
    docs: [
      { title: "Grève du port de Marseille", date: "10 juin 1936", type: "Article de presse" },
      { title: "Rassemblement Front Populaire", date: "1 mai 1936", type: "Photographie" },
    ]
  },
  {
    id: "sudouest", label: "Sud-Ouest", count: 54, px: 30, py: 72,
    docs: [
      { title: "Grève des vignerons bordelais", date: "14 juin 1936", type: "Article de presse" },
      { title: "Meeting socialiste à Toulouse", date: "20 juin 1936", type: "Photographie" },
    ]
  },
  {
    id: "ouest", label: "Ouest", count: 64, px: 15, py: 43,
    docs: [
      { title: "Chantiers navals de Saint-Nazaire", date: "2 juin 1936", type: "Photographie" },
      { title: "Grève agricole en Bretagne", date: "22 juin 1936", type: "Article de presse" },
    ]
  },
];
 
const lieuxFrance = [
  { label: "Région parisienne", count: 342, id: "paris" },
  { label: "Nord", count: 128, id: "nord" },
  { label: "Est", count: 95, id: "est" },
  { label: "Lyon et région", count: 87, id: "lyon" },
  { label: "Marseille et Provence", count: 76, id: "marseille" },
  { label: "Sud-Ouest", count: 64, id: "sudouest" },
  { label: "Ouest", count: 54, id: "ouest" },
];
 
// ── EUROPE data ───────────────────────────────────────────────────────────────
const regionsEurope = [
  {
    id: "france", label: "France", count: 842, px: 37, py: 62,
    docs: [
      { title: "Front Populaire — Victoire électorale", date: "3 mai 1936", type: "Article de presse" },
      { title: "Accords de Matignon", date: "8 juin 1936", type: "Document officiel" },
    ]
  },
  {
    id: "espagne", label: "Espagne", count: 312, px: 28, py: 77,
    docs: [
      { title: "Guerre civile espagnole — début", date: "17 juillet 1936", type: "Article de presse" },
      { title: "Bombardement de Madrid", date: "8 nov 1936", type: "Photographie" },
    ]
  },
  {
    id: "allemagne", label: "Allemagne", count: 278, px: 52, py: 48,
    docs: [
      { title: "Jeux Olympiques de Berlin", date: "1 août 1936", type: "Photographie" },
      { title: "Remilitarisation de la Rhénanie", date: "7 mars 1936", type: "Article de presse" },
    ]
  },
  {
    id: "uk", label: "Royaume-Uni", count: 156, px: 32, py: 38,
    docs: [
      { title: "Abdication d'Édouard VIII", date: "11 déc 1936", type: "Article de presse" },
      { title: "Grève générale — répercussions", date: "15 juin 1936", type: "Article de presse" },
    ]
  },
  {
    id: "italie", label: "Italie", count: 134, px: 54, py: 68,
    docs: [
      { title: "Mussolini et l'Axe Rome-Berlin", date: "25 oct 1936", type: "Document officiel" },
      { title: "Guerre d'Éthiopie — fin", date: "9 mai 1936", type: "Article de presse" },
    ]
  },
  {
    id: "urss", label: "URSS", count: 98, px: 78, py: 35,
    docs: [
      { title: "Constitution soviétique de 1936", date: "5 déc 1936", type: "Document officiel" },
      { title: "Procès de Moscou", date: "19 août 1936", type: "Article de presse" },
    ]
  },
];
 
const lieuxEurope = [
  { label: "France", count: 842, id: "france" },
  { label: "Espagne", count: 312, id: "espagne" },
  { label: "Allemagne", count: 278, id: "allemagne" },
  { label: "Royaume-Uni", count: 156, id: "uk" },
  { label: "Italie", count: 134, id: "italie" },
  { label: "URSS", count: 98, id: "urss" },
];
 
// ── MONDE data ─────────────────────────────────────────────────────────────────
const regionsMonde = [
  {
    id: "europe", label: "Europe", count: 1820, px: 47, py: 33,
    docs: [
      { title: "Front Populaire en France", date: "mai 1936", type: "Article de presse" },
      { title: "Guerre civile en Espagne", date: "juil 1936", type: "Photographie" },
    ]
  },
  {
    id: "amerique_nord", label: "Amérique du Nord", count: 342, px: 16, py: 32,
    docs: [
      { title: "Roosevelt — New Deal suite", date: "janv 1936", type: "Article de presse" },
      { title: "Élections américaines", date: "nov 1936", type: "Article de presse" },
    ]
  },
  {
    id: "amerique_sud", label: "Amérique du Sud", count: 128, px: 24, py: 68,
    docs: [
      { title: "Mouvements ouvriers au Brésil", date: "juin 1936", type: "Article de presse" },
    ]
  },
  {
    id: "afrique", label: "Afrique", count: 215, px: 48, py: 60,
    docs: [
      { title: "Colonisation et résistances", date: "1936", type: "Document officiel" },
      { title: "Éthiopie sous occupation italienne", date: "mai 1936", type: "Photographie" },
    ]
  },
  {
    id: "asie", label: "Asie", count: 187, px: 73, py: 38,
    docs: [
      { title: "Guerre sino-japonaise — début", date: "juil 1936", type: "Article de presse" },
      { title: "Chine — Longue Marche", date: "oct 1936", type: "Photographie" },
    ]
  },
];
 
const lieuxMonde = [
  { label: "Europe", count: 1820, id: "europe" },
  { label: "Amérique du Nord", count: 342, id: "amerique_nord" },
  { label: "Afrique", count: 215, id: "afrique" },
  { label: "Asie", count: 187, id: "asie" },
  { label: "Amérique du Sud", count: 128, id: "amerique_sud" },
];
 
// ── MapPin component ──────────────────────────────────────────────────────────
function MapPin({ region, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: region.px + "%",
        top: region.py + "%",
        transform: "translate(-50%, -100%)",
        cursor: "pointer",
        zIndex: active ? 10 : 5,
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg
          width={active ? 30 : 20}
          height={active ? 40 : 28}
          viewBox="0 0 30 40"
          style={{ transition: "all 0.2s ease", filter: active ? "drop-shadow(0 3px 6px rgba(123,29,53,0.5))" : "drop-shadow(0 1px 3px rgba(0,0,0,0.25))" }}
        >
          <path d="M15 0C9.48 0 5 4.48 5 10c0 7.5 10 20 10 20S25 17.5 25 10C25 4.48 20.52 0 15 0z"
            fill={CRIMSON} opacity={active ? 1 : 0.72} />
          <circle cx="15" cy="10" r="4.5" fill="#fff" />
        </svg>
        <div style={{
          background: "#fff",
          border: "1px solid #e0dbd5",
          borderRadius: "6px",
          padding: "4px 8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          whiteSpace: "nowrap",
          marginTop: "2px",
          textAlign: "center",
          minWidth: "90px",
        }}>
          <p style={{ margin: 0, fontSize: active ? "11px" : "10px", fontWeight: "700", color: "#1a1a1a", fontFamily: "sans-serif", lineHeight: "1.3" }}>{region.label}</p>
          <p style={{ margin: 0, fontSize: "9px", color: "#888", fontFamily: "sans-serif" }}>{region.count} documents</p>
        </div>
      </div>
    </div>
  );
}
 
// ── Main component ────────────────────────────────────────────────────────────
export default function CarteFrance() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [searchVal, setSearchVal] = useState("France");
  const [mapMode, setMapMode] = useState("france"); // france | europe | monde
 
  const getMapData = () => {
    if (mapMode === "europe") return { regions: regionsEurope, lieux: lieuxEurope, img: "/images/carte-de-europe.jpg", titre: "Carte d'Europe - Archives de 1936" };
    if (mapMode === "monde") return { regions: regionsMonde, lieux: lieuxMonde, img: "/images/carte-du-monde.jpg", titre: "Carte du Monde - Archives de 1936" };
    return { regions: regionsFrance, lieux: lieuxFrance, img: "/images/carte-de-france.jpg", titre: "Carte de France - Archives de 1936" };
  };
 
  const { regions, lieux, img, titre } = getMapData();
  const selectedRegion = regions.find(r => r.id === selected);
 
  const handleSearch = () => {
    const val = searchVal.trim().toLowerCase();
    if (val.includes("europe") || val.includes("européen")) {
      setMapMode("europe");
      setSelected(null);
      setSearchVal("Europe");
    } else if (val.includes("monde") || val.includes("world") || val.includes("international")) {
      setMapMode("monde");
      setSelected(null);
      setSearchVal("Monde");
    } else {
      setMapMode("france");
      setSelected(null);
      setSearchVal("France");
    }
  };
 
  return (
    <div style={{ background: "#f7f5f2", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <Navbar />
 
      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "220px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
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
 
      {/* CONTENT */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", fontWeight: "700", color: CRIMSON, textAlign: "center", marginBottom: "0.4rem" }}>Explorer par lieu</h2>
        <p style={{ fontSize: "14px", color: "#666", fontFamily: "sans-serif", textAlign: "center", marginBottom: "1.5rem" }}>Découvrez les documents de 1936 par leur localisation géographique</p>
 
        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", maxWidth: "540px", margin: "0 auto 1rem", background: "#fff", borderRadius: "30px", border: "2px solid " + CRIMSON, padding: "5px 5px 5px 14px" }}>
          <span style={{ color: "#aaa", fontSize: "16px", marginRight: "6px" }}>🔍</span>
          <input
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearch()}
            placeholder="France, Europe, Monde..."
            style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", fontFamily: "sans-serif", background: "transparent", color: "#1a1a1a" }}
          />
          <button onClick={handleSearch} style={{ background: CRIMSON, color: "#fff", border: "none", padding: "8px 20px", borderRadius: "20px 0 20px 20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>
            Demander à l'IA
          </button>
        </div>
 
        {/* Quick mode buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "2rem" }}>
          {[
            { label: "🇫🇷 France", mode: "france" },
            { label: "🌍 Europe", mode: "europe" },
            { label: "🌐 Monde", mode: "monde" },
          ].map(btn => (
            <button key={btn.mode} onClick={() => { setMapMode(btn.mode); setSelected(null); setSearchVal(btn.label.split(" ")[1]); }}
              style={{ background: mapMode === btn.mode ? CRIMSON : "#fff", color: mapMode === btn.mode ? "#fff" : "#555", border: "1px solid " + (mapMode === btn.mode ? CRIMSON : "#ddd"), padding: "7px 18px", borderRadius: "20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: mapMode === btn.mode ? "600" : "400" }}>
              {btn.label}
            </button>
          ))}
        </div>
 
        {/* Map + Panel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem", alignItems: "start" }}>
 
          {/* MAP */}
          <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "12px", padding: "1.2rem" }}>
            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "15px", marginBottom: "1rem" }}>{titre}</h3>
            <div style={{ position: "relative", width: "100%" }}>
              <img
                key={img}
                src={img}
                alt={titre}
                style={{ width: "100%", height: "auto", display: "block", opacity: 0.88 }}
              />
              {regions.map(r => (
                <MapPin
                  key={r.id}
                  region={r}
                  active={selected === r.id}
                  onClick={() => setSelected(selected === r.id ? null : r.id)}
                />
              ))}
            </div>
          </div>
 
          {/* RIGHT PANEL */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
 
            {/* Selected region info OR placeholder */}
            <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "12px", padding: "1.2rem", minHeight: "200px" }}>
              {!selectedRegion ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "180px", gap: "1rem" }}>
                  <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#e0d8d3" />
                    <circle cx="12" cy="9" r="2.5" fill="#c8b8b0" />
                  </svg>
                  <p style={{ fontSize: "13px", color: "#aaa", fontFamily: "sans-serif", textAlign: "center", lineHeight: "1.6", maxWidth: "200px" }}>
                    Sélectionnez une région sur la carte pour voir les documents disponibles
                  </p>
                </div>
              ) : (
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "6px", marginBottom: "1rem", borderBottom: "1px solid #f0ebe6", paddingBottom: "0.8rem" }}>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "15px", margin: 0 }}>{selectedRegion.label}</h3>
                    <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>{selectedRegion.count} documents disponibles</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "1rem" }}>
                    {selectedRegion.docs.map((doc, i) => (
                      <div key={i} style={{ background: "#f9f7f5", border: "1px solid #ede8e3", borderRadius: "6px", padding: "10px 12px" }}>
                        <p style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px", margin: "0 0 4px", color: "#1a1a1a", lineHeight: "1.3" }}>{doc.title}</p>
                        <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", margin: 0 }}>{doc.date} • {doc.type}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate("/resultats", { state: { query: selectedRegion.label } })}
                    style={{ background: CRIMSON, color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600", width: "100%" }}>
                    Voir tous les documents
                  </button>
                </div>
              )}
            </div>
 
            {/* Lieux populaires */}
            <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "12px", padding: "1.2rem" }}>
              <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "1rem", color: "#1a1a1a" }}>Lieux populaires</h3>
              {lieux.map((l, i) => (
                <div key={i}
                  onClick={() => setSelected(selected === l.id ? null : l.id)}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 6px", borderBottom: i < lieux.length - 1 ? "1px solid #f0ebe6" : "none", cursor: "pointer", borderRadius: "4px", background: selected === l.id ? "#fef5f7" : "transparent" }}>
                  <span style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: selected === l.id ? "700" : "500", color: selected === l.id ? CRIMSON : "#1a1a1a" }}>{l.label}</span>
                  <span style={{ fontSize: "13px", fontFamily: "sans-serif", color: "#555", fontWeight: "600" }}>{l.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}