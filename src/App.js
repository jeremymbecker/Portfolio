import './App.css';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TributePage from "./Components/Works/Tribute-Page/TributePage";
import Calculator from "./Components/Works/Calculator/Calculator";
import DrumMachine from "./Components/Works/Drum-Machine/DrumMachine";
import ProductLandingPage from "./Components/Works/Product-Landing-Page/ProductLandingPage";
import AV from './Components/Works/Audio-Visualizer/AudioVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/Tribute-Page" element={<TributePage />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Drum-Machine" element={<DrumMachine />} />
        <Route path="/Product-Landing-Page" element={<ProductLandingPage />} />
        <Route path="/AV" element={<AV />} />
      </Routes>
    </Router>
  );
}

export default App;
