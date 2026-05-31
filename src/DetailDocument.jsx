import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
 
const CRIMSON = "#7B1D35";
 
const docsConnexes = [
  { type: "SPORT", typeColor: "#2d6a4a", img: "/images/tour-de-france.jpeg", title: "Le Tour de France", date: "7 juillet 1936", desc: "Le 7 juillet 1936 au Vésinet, quatre-vingt-dix coureurs prennent le départ de la trentième édition du Tour de France." },
  { type: "POLITIQUE", typeColor: CRIMSON, img: "/images/rhenanie.jpg", title: "Remilitarisation de la Rhénanie", date: "7 mars 1936", desc: "Adolf Hitler ordonne l'entrée des troupes allemandes dans la Rhénanie, une zone qui devait rester démilitarisée selon le traité de Versailles." },
  { type: "ÉCONOMIE", typeColor: "#b85c00", img: "/images/reformes-eco.jpg", title: "Réformes économiques du Front populaire", date: "7 juin 1936", desc: "Sous le gouvernement de Léon Blum en France, plusieurs réformes économiques." },
  { type: "CINÉMA", typeColor: "#555", img: "/images/film.jpg", title: "Film Les Temps modernes", date: "24 février 1936", desc: "Les temps modernes sourit sur une séquence mythique, celle de l'usine." },
];
 
export default function DetailDocument() {
  const navigate = useNavigate();
  const [showFullResume, setShowFullResume] = useState(false);
 
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f7f5f2", minHeight: "100vh" }}>
      <Navbar />
 
      {/* HERO compact */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/accueil.jpeg" alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(251,248,248,0.45)" }} />
        </div>
        <div style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#000", fontSize: "28px", cursor: "pointer" }}
          onClick={() => navigate(-1)}>‹</div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: "700", color: "#000", margin: "0 0 0.4rem", letterSpacing: "-1px" }}>GallicAI — 1936</h1>
          <p style={{ color: "#000", fontSize: "1rem", fontFamily: "Georgia, serif", margin: 0 }}>
            L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
          </p>
        </div>
      </div>
 
      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "2rem auto", padding: "0 2rem" }}>
 
        {/* Top section: newspaper image + article info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem", alignItems: "start" }}>
          {/* Newspaper scan */}
          <div style={{ position: "relative" }}>
            <img src="/images/reaction.jpeg" alt="L'Humanité"
              style={{ width: "100%", borderRadius: "4px", filter: "grayscale(0.2) sepia(0.1)", display: "block" }}
              onError={e => { e.target.style.background = "#c8b09a"; }}
            />
            <button style={{ position: "absolute", bottom: "12px", right: "12px", background: CRIMSON, color: "#fff", border: "none", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              💾 Enregistrer
            </button>
          </div>
 
          {/* Article info */}
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "0.5rem", lineHeight: "1.3" }}>
              Réaction à la signature des accords de Matignon
            </h2>
            <p style={{ fontSize: "14px", color: "#888", fontFamily: "sans-serif", marginBottom: "4px" }}>8 juin 1936</p>
            <p style={{ fontSize: "14px", color: "#555", fontFamily: "sans-serif", marginBottom: "1.2rem" }}>Par : L'Humanité</p>
 
            {/* Résumé IA */}
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", color: CRIMSON, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "6px" }}>
                Résumé IA <span style={{ color: "#f59e0b" }}>◆</span>
              </p>
              <p style={{ fontSize: "14px", color: "#333", fontFamily: "sans-serif", lineHeight: "1.7", marginBottom: "0.5rem" }}>
                L'Humanité du 8 juin 1936 couvre la signature des accords Matignon comme une victoire historique du mouvement ouvrier. Le journal adopte un cadrage triomphal : la Une barre l'intégralité de la page avec le titre "La victoire est acquise !", et l'accord est présenté comme la concrétisation des revendications portées depuis des années par la classe ...
              </p>
              {!showFullResume && (
                <button onClick={() => setShowFullResume(true)}
                  style={{ background: "none", border: "none", color: CRIMSON, fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                  Lire le résumé complet ∨
                </button>
              )}
            </div>
          </div>
        </div>
 
        {/* Extrait + Contexte */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem", background: "#fff" }}>
            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "0.8rem" }}>Extrait du document (Gallica)</h3>
            <p style={{ fontSize: "13px", color: "#444", fontFamily: "Georgia, serif", lineHeight: "1.8", fontStyle: "italic", marginBottom: "1rem" }}>
              "L'unité pour le pain a vaincu ! Les grèves en cours donnent tous les jours de ce pas de victoire. Il faut que toute la classe ouvrière voie clair sur leur caractère réel et objectif. Ce qu'on reproche au gouvernement socialiste ? L'interrogation désormais classique. Il y a, à l'origine des grèves, nul mystère mystérieux, et les réactions d'une classe qui se défend et dont les délégués examinent la situation avec un esprit de sacrifice admirable..."
            </p>
            <a href="https://gallica.bnf.fr/ark:/12148/bpt6k406738p#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: CRIMSON, color: "#fff", border: "none", padding: "8px 18px", borderRadius: "20px", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
            >
              Lire le document complet sur Gallica ↗
            </a>
          </div>
          <div style={{ border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem", background: "#fff" }}>
            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "0.8rem" }}>Contexte éditorial</h3>
            <p style={{ fontSize: "13px", color: "#444", fontFamily: "sans-serif", lineHeight: "1.8" }}>
              Organe central du Parti communiste français, L'Humanité est en 1936 le principal quotidien de la gauche ouvrière. Fondé par Jean Jaurès en 1904, il tire à environ 300 000 exemplaires pendant le Front populaire. Face aux grèves de juin 1936, la rédaction adopte un ton de victoire collective : chaque accord signé est présenté comme une conquête, chaque grève comme un acte de dignité légitime.
            </p>
          </div>
        </div>
 
        {/* Positionnement idéologique */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          {/* Left: slider */}
          <div style={{ border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem", background: "#fff" }}>
            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "0.3rem" }}>Positionnement idéologique ⓘ</h3>
            <p style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif", marginBottom: "1rem" }}>Comment est-ce calculé ?</p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#888", fontFamily: "sans-serif", marginBottom: "4px" }}>
              <span>Gauche</span><span>Centre</span><span>Droite</span>
            </div>
            <div style={{ position: "relative", height: "8px", background: "linear-gradient(to right, #e53935, #eee, #1565c0)", borderRadius: "4px", marginBottom: "8px" }}>
              <div style={{ position: "absolute", left: "12%", top: "50%", transform: "translate(-50%,-50%)", width: "16px", height: "16px", borderRadius: "50%", background: "#1a1a1a", border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
            </div>
            <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", marginBottom: "1rem" }}>Ce document se situe à gauche du spectre éditorial de 1936.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["+ Voir plus à gauche", "Voir au centre", "Voir plus à droite +"].map(btn => (
                <button key={btn} style={{ background: "#f0ebe6", border: "1px solid #ddd", borderRadius: "20px", padding: "5px 10px", fontSize: "11px", fontFamily: "sans-serif", cursor: "pointer", color: "#555" }}>{btn}</button>
              ))}
            </div>
          </div>
 
          {/* Right: scores */}
          <div style={{ border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem", background: "#fff" }}>
            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "1rem" }}>Comment le positionnement est-il calculé? ⓘ</h3>
            {[
              { label: "Ligne éditoriale", score: -92, desc: "L'Humanité, organe central du PCF, opposé frontalement au patronat et au gouvernement conservateur. Lectorat ouvrier et militant, financement syndical et partisan." },
              { label: "Analyse lexicale", score: -86, desc: "Vocabulaire de la victoire et de la conquête sociale, sources exclusivement syndicales et militantes, aucune voix patronale citée en direct, cadrage festif et triomphal des occupations d'usines." },
              { label: "Score composite", score: -90, desc: "(92 × 0,6) + (86 × 0,4) = 55,2 + 34,4 = -89,6 — arrondi à -90 : Gauche militante" },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600" }}>{item.label}</span>
                  <span style={{ fontSize: "13px", fontFamily: "sans-serif", color: CRIMSON, fontWeight: "700" }}>{item.score}</span>
                </div>
                <div style={{ height: "6px", background: "#f0ebe6", borderRadius: "3px", marginBottom: "4px" }}>
                  <div style={{ width: Math.abs(item.score) + "%", height: "100%", background: CRIMSON, borderRadius: "3px" }} />
                </div>
                <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", lineHeight: "1.5", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
            <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "20px", padding: "6px 14px", fontSize: "12px", fontFamily: "sans-serif", cursor: "pointer", color: "#555" }}>
              Conseils pour une lecture critique ↗
            </button>
          </div>
        </div>
 
        {/* Chat bubble */}
        <div style={{ position: "fixed", bottom: "2rem", right: "2rem", width: "52px", height: "52px", borderRadius: "50%", background: CRIMSON, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", cursor: "pointer", boxShadow: "0 4px 16px rgba(123,29,53,0.4)", zIndex: 50 }}>💬</div>
 
        {/* Documents connexes */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "16px", marginBottom: "0.3rem" }}>Documents connexes</h3>
          <p style={{ fontSize: "13px", color: "#888", fontFamily: "sans-serif", marginBottom: "1.2rem" }}>Poursuivez votre exploration par relations sémantiques</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {docsConnexes.map((doc, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ position: "relative" }}>
                  <img src={doc.img} alt={doc.title} style={{ width: "100%", height: "120px", objectFit: "cover", filter: "grayscale(0.2) sepia(0.1)", display: "block" }}
                    onError={e => { e.target.style.background = "#c8b09a"; }} />
                  <span style={{ position: "absolute", bottom: "6px", left: "6px", background: doc.typeColor, color: "#fff", fontSize: "9px", fontFamily: "sans-serif", fontWeight: "700", padding: "2px 6px", borderRadius: "2px" }}>{doc.type}</span>
                </div>
                <div style={{ padding: "10px" }}>
                  <a href="#" style={{ fontFamily: "Georgia, serif", fontSize: "12px", fontWeight: "700", color: "#1a1a1a", textDecoration: "underline", display: "block", marginBottom: "4px", lineHeight: "1.3" }}>{doc.title}</a>
                  <p style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", marginBottom: "4px" }}>{doc.date}</p>
                  <p style={{ fontSize: "11px", color: "#555", fontFamily: "sans-serif", lineHeight: "1.4", marginBottom: "8px" }}>{doc.desc}</p>
                  <a href="#" style={{ fontSize: "11px", color: "#555", fontFamily: "sans-serif", textDecoration: "none" }}>Consulter ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Footer note */}
        <div style={{ textAlign: "center", padding: "1.5rem", borderTop: "1px solid #e0dbd5", color: "#888", fontSize: "12px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
          <p style={{ margin: 0 }}>Ce contenu a été généré par IA à partir des collections de Gallica ; il peut comporter des erreurs ou des biais.</p>
          <p style={{ margin: 0 }}>Signalez-nous tout problème ou réponse inappropriée afin d'améliorer le service.</p>
        </div>
      </div>
    </div>
  );
}