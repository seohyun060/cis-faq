import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alexandria from './pages/Alexandria';
import Kiwi from './pages/Kiwi';
import CadAI from './pages/CadAI';
import FAQ from './pages/FAQ';
import Feature from './pages/FAQ/Feature';
import Purchase from './pages/FAQ/Purchase';
import Compatibility from './pages/FAQ/Compatibility';
// import Map from './pages/Map';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alexandria" element={<Alexandria />} />
            {/* <Route path="/map" element={<Map />} /> */}
            <Route path="/kiwi" element={<Kiwi />} />
            <Route path="/cadai" element={<CadAI />} />
            <Route path="/faq">
                <Route path="" element={<FAQ />} />
                <Route path="feature" element={<Feature />} />
                <Route path="purchase" element={<Purchase />} />
                <Route path="compatibility" element={<Compatibility />} />
            </Route>
        </Routes>
    );
}

export default App;
