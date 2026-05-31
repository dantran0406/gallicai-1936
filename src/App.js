import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import MaBibliotheque from './MaBibliotheque';
import ResultatsRecherche from './ResultatsRecherche';
import DetailDocument from './DetailDocument';
import ExplorerResultats from './ExplorerResultats';
import CarteFrance from './CarteFrance';
import FriseChronologique from './FriseChronologique';
import RessourcesPartagees from './RessourcesPartagees';
import ChatAI from './ChatAI'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/bibliotheque" element={<MaBibliotheque />} />
        <Route path="/resultats" element={<ResultatsRecherche />} />
        <Route path="/document" element={<DetailDocument />} />
        <Route path="/explorer" element={<ExplorerResultats />} />
        <Route path="/carte" element={<CarteFrance />} />
        <Route path="/frise" element={<FriseChronologique />} />
        <Route path="/chat-ai" element={<ChatAI />} />
        <Route path="/ressources" element={<RessourcesPartagees />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
 