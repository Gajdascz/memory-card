import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header className="app-header" />
      <GameBoard className="app-game-board" />
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
