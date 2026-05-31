import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CRIMSON = "#7B1D35";
const CHAT_PINK = "#F3EBE9"; // Rose pâle des bulles de chat

export default function ChatAI() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", fontFamily: "sans-serif", color: "#1a1a1a" }}>
      <Navbar />

      {/* Header de la démo */}
      <div style={{ padding: "3rem 1rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: "700", margin: "0 0 10px" }}>
          Explorez les archives de 1936 avec l'IA
        </h1>
      </div>

      {/* Zone de Chat */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "1rem 1rem 10rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        
        {/* Message Utilisateur */}
        <div style={{ alignSelf: "flex-end", background: CHAT_PINK, padding: "12px 18px", borderRadius: "16px 16px 2px 16px", maxWidth: "80%", fontSize: "14px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          Quelles sont les réactions de la presse aux accords de Matignon en juin 1936 ?
        </div>

        {/* Réponse de l'IA - Analyse */}
        <div style={{ background: "#FFFFFF", border: "1px solid #EAE0DE", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px", color: CRIMSON, fontWeight: "bold", fontSize: "11px" }}>
            <span style={{ background: CRIMSON, color: "#fff", padding: "2px 5px", borderRadius: "3px" }}>◆</span> ANALYSE GALLICAI
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333", margin: "0 0 15px" }}>
            J'ai analysé 287 documents issus de la presse de juin 1936. Les réactions sont polarisées selon la ligne éditoriale des journaux :
          </p>
          
          {/* Choix de filtres (Boutons démo) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["VOIR LA PRESSE OUVRIÈRE (L'HUMANITÉ...)", "VOIR LA PRESSE CONSERVATRICE (LE FIGARO...)", "VOIR LA PRESSE SYNDICALE"].map((text, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 15px", border: "1px solid #EEE6E4", borderRadius: "6px", fontSize: "12px", fontWeight: "600", cursor: "pointer", background: "#fff" }}>
                <span>{text}</span>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "1px solid #ccc" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bloc de résultats (Indexation) */}
        <div style={{ background: "#FFFFFF", border: "1px solid #EAE0DE", borderRadius: "8px", padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px", color: CRIMSON, fontWeight: "bold", fontSize: "11px" }}>
            <span style={{ background: CRIMSON, color: "#fff", padding: "2px 5px", borderRadius: "3px" }}>◆</span> RÉSULTATS IDENTIFIÉS
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: CRIMSON, fontWeight: "bold", marginBottom: "5px" }}>
              <span>Analyse sémantique en cours...</span>
              <span>100%</span>
            </div>
            <div style={{ height: "4px", background: "#EAE0DE", borderRadius: "2px" }}>
              <div style={{ width: "100%", height: "100%", background: CRIMSON }} />
            </div>
          </div>

          {/* Liste des documents trouvés */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { title: "Réaction à la signature des accords de Matignon", source: "L'Humanité" },
              { title: "Le patronat signe les accords", source: "Le Figaro" },
              { title: "Une victoire pour la classe ouvrière", source: "Le Populaire" }
            ].map((doc, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", background: "#FCFAFA", border: "1px solid #EFE8E6", borderRadius: "6px" }}>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600" }}>{doc.title}</div>
                  <div style={{ fontSize: "11px", color: "#888" }}>Source : {doc.source}</div>
                </div>
                {/* On ne rend cliquable que le premier pour la démo vers votre page DetailDocument */}
                <button 
                  onClick={() => idx === 0 ? navigate("/document") : null}
                  style={{ background: "none", border: `1px solid ${CRIMSON}`, color: CRIMSON, fontSize: "11px", padding: "4px 10px", borderRadius: "4px", fontWeight: "bold", cursor: idx === 0 ? "pointer" : "default" }}
                >
                  Analyser ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de saisie fixe (Demo) */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#FFFFFF", borderTop: "1px solid #EAE0DE", padding: "1.2rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", border: `1.5px solid ${CRIMSON}`, borderRadius: "25px", padding: "5px 8px", background: "#fff" }}>
          <input 
            type="text" 
            disabled
            placeholder="Posez une question sur les accords de Matignon..." 
            style={{ flex: 1, border: "none", padding: "8px 15px", outline: "none", background: "none", fontSize: "14px" }}
          />
          <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "0 20px", borderRadius: "20px", fontSize: "13px", fontWeight: "bold" }}>
            Demander
          </button>
        </div>
      </div>
    </div>
  );
}