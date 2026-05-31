import { useState } from "react";
import Navbar from "./Navbar";

const CRIMSON = "#7B1D35";
const CRIMSON_LIGHT = "#f5e8eb";

// ─── Shared components ────────────────────────────────────────────────────────



function Hero({ showBack = false }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "180px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/images/accueil.jpeg" alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
        <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", background: "rgba(245, 239, 239, 0.45)" }} />
      </div>
      {showBack && (
        <div style={{ position: "absolute", left: "2rem", top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#fff", fontSize: "24px", cursor: "pointer" }}>‹</div>
      )}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "700", color: "#000", margin: "0 0 0.4rem", letterSpacing: "-1px" }}>GallicAI — 1936</h1>
        <p style={{ color: "#000", fontSize: "1.2rem", fontFamily: "Georgia,sans-serif", fontWeight: "300", letterSpacing: "0.04em", margin: 0 }}>
          L'assistant de recherche intelligent dans les collections de la bnf et de ses partenaires
        </p>
      </div>
    </div>
  );
}

function UserBanner({ onPublish }) {
  return (
    <div style={{ maxWidth: "1100px", margin: "1.5rem auto 0", padding: "0 2rem" }}>
    <div style={{ background: CRIMSON, color: "#fff", padding: "0.9rem 2rem", display: "flex", alignItems: "center", gap: "1rem", borderRadius: "8px" }}>
      <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px", color: CRIMSON, flexShrink: 0 }}>L</div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: "700", fontSize: "16px", fontFamily: "sans-serif" }}>Léa</p>
        <p style={{ margin: 0, fontSize: "13px", opacity: 0.85, fontFamily: "sans-serif" }}>Étudiante En Licence 2 Sciences Politiques</p>
      </div>
      <button onClick={onPublish} style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.6)", padding: "7px 16px", borderRadius: "20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
        Publier ma sélection ↑
      </button>
    </div>
    </div>
  );
}

// ─── Page 1 : Collections ─────────────────────────────────────────────────────

const projets = [
  { name: "Mémoire - Grèves de Juin 1936", collections: 3, active: true },
  { name: "Recherche - Culture Populaire 1936", collections: 1, active: false },
];

const collectionsData = [
  {
    title: "Sources primaires", count: 3, color: "#3a7abf",
    docs: [
      { name: "Commentaire sur l'affaire blum", date: "15 fév 1936" },
      { name: "Deux millions d'ouvriers en grève", date: "5 juin 1936" },
      { name: "Usine renault occupée billancourt", date: "15 juin 1936" },
    ]
  },
  {
    title: "Article de presses", count: 2, color: "#2d7a4a",
    docs: [
      { name: "Réaction à la signature des accords de Matignon", date: "08 juin 1936" },
      { name: "130 établissements de métalurgie sont en grève", date: "3 juin 1936" },
    ]
  },
  {
    title: "Analyses secondaires", count: 1, color: "#8b3a9e",
    docs: [
      { name: "L'Humanité : journal socialiste quotidien", date: "17 juillet 1936" },
    ]
  },
  { title: null, count: 0, color: null, docs: [] },
];

function CollectionsTab() {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
      {/* Mes projets */}
      <div style={{ width: "260px", flexShrink: 0, background: "#f9f7f5", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <p style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "15px", margin: 0 }}>Mes projets</p>
          <button style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: CRIMSON, fontWeight: "300" }}>+</button>
        </div>
        {projets.map((p, i) => (
          <div key={i} style={{ marginBottom: "8px" }}>
            <div style={{ background: p.active ? CRIMSON : "transparent", color: p.active ? "#fff" : "#333", padding: "8px 12px", borderRadius: "6px", cursor: "pointer" }}>
              <p style={{ margin: 0, fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
                📄 {p.name}
              </p>
              <p style={{ margin: "2px 0 0 20px", fontSize: "12px", opacity: 0.8, fontFamily: "sans-serif" }}>↳ {p.collections} collections</p>
            </div>
          </div>
        ))}
        <div style={{ border: "1px dashed #bbb", borderRadius: "6px", padding: "10px 12px", cursor: "pointer", textAlign: "center", marginTop: "8px" }}>
          <p style={{ margin: 0, fontSize: "13px", color: "#888", fontFamily: "sans-serif" }}>Créer un nouveau projet +</p>
        </div>
      </div>

      {/* Collections grid */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
        {collectionsData.map((col, i) => (
          col.title ? (
            <div key={i} style={{ border: "1px solid #e0dbd5", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ background: col.color, padding: "0.8rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ margin: 0, fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", color: "#fff" }}>
                  {col.title} <span style={{ opacity: 0.85 }}>({col.count})</span>
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "rgba(255,255,255,0.85)", cursor: "pointer", fontSize: "14px" }}>✏️</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", cursor: "pointer", fontSize: "14px" }}>🗑️</span>
                </div>
              </div>
              <div style={{ padding: "0.8rem", background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {col.docs.map((doc, j) => (
                  <div key={j} style={{ background: "#f9f7f5", border: "1px solid #ede8e3", borderRadius: "6px", padding: "10px" }}>
                    <p style={{ margin: "0 0 4px", fontSize: "12px", fontFamily: "sans-serif", fontWeight: "600", color: "#1a1a1a", lineHeight: "1.3" }}>📄 {doc.name}</p>
                    <p style={{ margin: 0, fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>{doc.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={i} style={{ border: "1px dashed #bbb", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "120px", cursor: "pointer" }}>
              <p style={{ color: CRIMSON, fontFamily: "sans-serif", fontSize: "13px", fontWeight: "500" }}>Créer une nouvelle collection</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

// ─── Page 2 : Brouillons (liste) ──────────────────────────────────────────────

const brouillons = [
  { title: "Introduction - Le contexte 1936", date: "06/05/2026", mots: 487 },
  { title: "Chapitre I -  La victoire du Front Populaire", date: "06/05/2026", mots: 487 },
];

function BrouillonsTab({ onNewBrouillon }) {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
      {/* Mes projets */}
      <div style={{ width: "260px", flexShrink: 0, background: "#f9f7f5", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <p style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "15px", margin: 0 }}>Mes projets</p>
          <button style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: CRIMSON }}>+</button>
        </div>
        {projets.map((p, i) => (
          <div key={i} style={{ marginBottom: "8px" }}>
            <div style={{ background: i === 0 ? CRIMSON : "transparent", color: i === 0 ? "#fff" : "#333", padding: "8px 12px", borderRadius: "6px", cursor: "pointer" }}>
              <p style={{ margin: 0, fontSize: "13px", fontFamily: "sans-serif", fontWeight: "600" }}>📄 {p.name}</p>
              <p style={{ margin: "2px 0 0 20px", fontSize: "12px", opacity: 0.8, fontFamily: "sans-serif" }}>↳ {p.collections} collections</p>
            </div>
          </div>
        ))}
        <div style={{ border: "1px dashed #bbb", borderRadius: "6px", padding: "10px 12px", cursor: "pointer", textAlign: "center", marginTop: "8px" }}>
          <p style={{ margin: 0, fontSize: "13px", color: "#888", fontFamily: "sans-serif" }}>Créer un nouveau projet +</p>
        </div>
      </div>

      {/* Brouillons list */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
          <h2 style={{ fontFamily: "sans-serif", fontSize: "1.5rem", fontWeight: "700", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            ✏️ Brouillons
          </h2>
          <button onClick={onNewBrouillon} style={{ background: CRIMSON, color: "#fff", border: "none", padding: "9px 20px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
            Nouveau brouillon
          </button>
        </div>
        {brouillons.map((b, i) => (
          <div key={i} style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1rem 1.2rem", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: "0 0 4px", fontFamily: "sans-serif", fontWeight: "600", fontSize: "15px", color: "#1a1a1a" }}>{b.title}</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>Modifier le {b.date} &nbsp;•&nbsp; {b.mots} mots</p>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <span style={{ cursor: "pointer", fontSize: "16px", color: "#888" }}>✏️</span>
              <span style={{ cursor: "pointer", fontSize: "16px", color: "#888" }}>🗑️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page 3 : Éditeur de brouillon ────────────────────────────────────────────

function EditeurBrouillon({ onBack }) {
  const [titre, setTitre] = useState("");
  const [corps, setCorps] = useState("Bibliographie :\n");
  const [sources] = useState([]);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 2rem" }}>
      {/* User banner */}
      <div style={{ background: CRIMSON, color: "#fff", padding: "0.9rem 2rem", display: "flex", alignItems: "center", gap: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
        <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px", color: CRIMSON }}>L</div>
        <div>
          <p style={{ margin: 0, fontWeight: "700", fontSize: "16px", fontFamily: "sans-serif" }}>Léa</p>
          <p style={{ margin: 0, fontSize: "13px", opacity: 0.85, fontFamily: "sans-serif" }}>Étudiante En Licence 2 Sciences Politiques</p>
        </div>
        <button style={{ marginLeft: "auto", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.6)", padding: "7px 16px", borderRadius: "20px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>
          Publier ma sélection ↑
        </button>
      </div>

      <h2 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "1.6rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "8px" }}>✏️ Brouillons</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "1.5rem", alignItems: "flex-start" }}>
        {/* Editor */}
        <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", overflow: "hidden" }}>
          {/* Toolbar */}
          <div style={{ padding: "0.8rem 1rem", borderBottom: "1px solid #e0dbd5", display: "flex", gap: "10px", alignItems: "center" }}>
            <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "8px 18px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
              Insérer une source
            </button>
            <button style={{ background: "#fff", color: "#1a1a1a", border: "1px solid #ddd", padding: "8px 18px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>
              Générer une bibliographie
            </button>
            <span style={{ marginLeft: "auto", fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>2 mot(s)</span>
          </div>
          {/* Title */}
          <div style={{ padding: "1rem 1.2rem", borderBottom: "1px solid #f0ebe6" }}>
            <input
              value={titre}
              onChange={e => setTitre(e.target.value)}
              placeholder="Titre du document..."
              style={{ width: "100%", border: "none", outline: "none", fontSize: "16px", fontFamily: "sans-serif", color: "#999", background: "transparent", boxSizing: "border-box" }}
            />
          </div>
          {/* Body */}
          <textarea
            value={corps}
            onChange={e => setCorps(e.target.value)}
            style={{ width: "100%", minHeight: "340px", border: "none", outline: "none", padding: "1rem 1.2rem", fontSize: "14px", fontFamily: "sans-serif", color: "#333", background: "#faf8f6", resize: "vertical", boxSizing: "border-box", lineHeight: "1.7" }}
          />
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Sources */}
          <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "1.2rem" }}>
            <p style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "0.8rem" }}>Sources utilisées ({sources.length})</p>
            {sources.length === 0 && (
              <p style={{ fontSize: "13px", color: "#888", fontFamily: "sans-serif", textAlign: "center", margin: "0.5rem 0 1rem" }}>Aucune source ajoutée</p>
            )}
            <div style={{ border: "1px dashed " + CRIMSON, borderRadius: "6px", padding: "9px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", gap: "6px" }}>
              <span style={{ fontSize: "13px", color: CRIMSON, fontFamily: "sans-serif" }}>Ajouter une source</span>
              <span style={{ color: CRIMSON, fontSize: "16px" }}>+</span>
            </div>
          </div>
          {/* Conseils */}
          <div style={{ background: CRIMSON_LIGHT, border: "1px solid #e8cfd5", borderRadius: "8px", padding: "1.2rem" }}>
            <p style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "14px", marginBottom: "0.6rem", color: "#1a1a1a" }}>Conseils</p>
            <p style={{ fontSize: "13px", color: "#444", fontFamily: "sans-serif", lineHeight: "1.6", margin: 0 }}>
              Utilisez le bouton "Insérer une source" pour citer automatiquement les documents de votre bibliothèque. Les références seront numérotées et vous pourrez générer une bibliographie complète à la fin.
            </p>
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
        <button style={{ flex: 1, background: CRIMSON, color: "#fff", border: "none", padding: "12px", borderRadius: "6px", fontSize: "14px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
          Enregistrer le brouillon
        </button>
        <button onClick={onBack} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "6px", fontSize: "14px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>
          Annuler
        </button>
      </div>
    </div>
  );
}

// ─── Page 4 : Publier ma sélection ────────────────────────────────────────────

function PublierSelection({ onBack }) {
  const [typeWork, setTypeWork] = useState("Travail de recherche");
  const [desc, setDesc] = useState("Analyse de la couverture médiatique des grèves de juin 1936 dans la  presse française, du Populaire au Figaro. Comparaison des cadres  éditoriaux opposés.");
  const [visibilite, setVisibilite] = useState("public");

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 2rem" }}>
      {/* User banner */}
      <div style={{ background: CRIMSON, color: "#fff", padding: "0.9rem 2rem", display: "flex", alignItems: "center", gap: "1rem", borderRadius: "8px", marginBottom: "2rem" }}>
        <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px", color: CRIMSON }}>L</div>
        <div>
          <p style={{ margin: 0, fontWeight: "700", fontSize: "16px", fontFamily: "sans-serif" }}>Léa</p>
          <p style={{ margin: 0, fontSize: "13px", opacity: 0.85, fontFamily: "sans-serif" }}>Étudiante en Licence 2 Sciences Politiques</p>
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e0dbd5", borderRadius: "8px", padding: "2rem" }}>
        <h2 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Publier ma sélection</h2>
        <p style={{ fontSize: "13px", color: "#555", fontFamily: "sans-serif", marginBottom: "1.2rem", lineHeight: "1.6" }}>
          Votre corpus ( ses collections et l'organisation des documents) sera partagé avec la communauté GallicAI. Les autres utilisateurs pourront l'explorer et s'en inspirer.
        </p>

        {/* Info banner */}
        <div style={{ background: "#fff3f3", border: "1px solid #f5c0c0", borderRadius: "4px", padding: "10px 14px", marginBottom: "1.5rem", borderLeft: "3px solid " + CRIMSON }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#555", fontFamily: "sans-serif" }}>
            Le corpus publié reprend la structure de votre projet actif : collections, documents, notes d'auteur sur chaque collection. Vos notes marginales privées restent invisibles.
          </p>
        </div>

        {/* Type de travail */}
        <div style={{ marginBottom: "1.2rem" }}>
          <p style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px", marginBottom: "6px" }}>Type de travail</p>
          <input
            value={typeWork}
            onChange={e => setTypeWork(e.target.value)}
            style={{ width: "100%", border: "1px solid #ddd", borderRadius: "4px", padding: "9px 12px", fontSize: "13px", fontFamily: "sans-serif", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "1.2rem" }}>
          <p style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px", marginBottom: "6px" }}>Description courte (visible publiquement)</p>
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows={3}
            style={{ width: "100%", border: "1px solid #ddd", borderRadius: "4px", padding: "9px 12px", fontSize: "13px", fontFamily: "sans-serif", outline: "none", resize: "vertical", lineHeight: "1.6", boxSizing: "border-box" }}
          />
        </div>

        {/* Visibilité */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px", marginBottom: "10px" }}>Visibilité</p>
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { val: "public", label: "Public", sub: "Visible par tous les utilisateurs de GallicAI" },
              { val: "prive", label: "Privé", sub: "Visible uniquement par vous" },
            ].map(opt => (
              <div key={opt.val} onClick={() => setVisibilite(opt.val)} style={{ border: "1px solid #ddd", borderRadius: "6px", padding: "12px 16px", cursor: "pointer", width: "180px", background: visibilite === opt.val ? "#f9f7f5" : "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid " + (visibilite === opt.val ? CRIMSON : "#bbb"), display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {visibilite === opt.val && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: CRIMSON }} />}
                  </div>
                  <p style={{ margin: 0, fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px" }}>{opt.label}</p>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#777", fontFamily: "sans-serif", paddingLeft: "22px" }}>{opt.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button onClick={onBack} style={{ background: "#1a1a1a", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "500" }}>
            Annuler
          </button>
          <button style={{ background: CRIMSON, color: "#fff", border: "none", padding: "10px 24px", borderRadius: "6px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", fontWeight: "600" }}>
            Publier ma sélection
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MaBibliotheque() {
  const [activeTab, setActiveTab] = useState("collections");
  const [view, setView] = useState("main"); // main | editeur | publier

  if (view === "editeur") {
    return (
      <div style={{ fontFamily: "sans-serif", background: "#f7f5f2", minHeight: "100vh" }}>
        <Navbar />
        <Hero showBack={true} />
        <EditeurBrouillon onBack={() => setView("main")} />
      </div>
    );
  }

  if (view === "publier") {
    return (
      <div style={{ fontFamily: "sans-serif", background: "#f7f5f2", minHeight: "100vh" }}>
        <Navbar />
        <Hero showBack={true} />
        <PublierSelection onBack={() => setView("main")} />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f7f5f2", minHeight: "100vh" }}>
      <Navbar />
      <Hero showBack={activeTab === "brouillons"} />
      <UserBanner onPublish={() => setView("publier")} />

      <div style={{ maxWidth: "1100px", margin: "2rem auto", padding: "0 2rem" }}>
        {/* Title */}
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: "700", fontSize: "2rem", margin: "0 0 0.3rem" }}>Ma Bibliothèque</h1>
        <p style={{ fontSize: "14px", color: "#666", fontFamily: "sans-serif", marginBottom: "1.5rem" }}>
          {activeTab === "collections" ? "Organisez vos documents par projets et collections" : "Rédigez en intégrant les ressources documentaires sélectionnées"}
        </p>

        {/* Search + Display */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", border: "1px solid #e0dbd5", borderRadius: "30px", padding: "8px 16px", background: "#fff", gap: "8px" }}>
            <span style={{ color: "#888" }}>🔍</span>
            <input placeholder="Rechercher dans ma bibliothèque..." style={{ flex: 1, border: "none", outline: "none", fontSize: "14px", fontFamily: "sans-serif", background: "transparent" }} />
            <span style={{ color: "#888", fontSize: "13px", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>⚙️ Filtrer</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontFamily: "sans-serif", color: "#555" }}>Affichage:</span>
            <button style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer", opacity: 0.7 }}>⊞</button>
            <button style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer", opacity: 0.7 }}>☰</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #e0dbd5", marginBottom: "1.5rem" }}>
          {["collections", "brouillons"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: "none", border: "none", padding: "10px 20px", cursor: "pointer", fontFamily: "sans-serif", fontSize: "14px", fontWeight: activeTab === tab ? "700" : "400", color: activeTab === tab ? "#1a1a1a" : "#888", borderBottom: activeTab === tab ? "2px solid " + CRIMSON : "2px solid transparent", marginBottom: "-1px", textTransform: "capitalize" }}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "collections"
          ? <CollectionsTab />
          : <BrouillonsTab onNewBrouillon={() => setView("editeur")} />
        }
      </div>
    </div>
  );
}
