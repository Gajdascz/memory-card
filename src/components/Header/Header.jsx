import "./Header.css";

const InstructionsButton = () => (
  <button className="header-footer-icon-button">
    <svg className="app-header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <rect x="10" y="18" width="3" height="3" />
      <polygon points="17 5 17 11 16 11 16 12 15 12 15 13 13 13 13 15 10 15 10 12 11 12 11 11 13 11 13 10 14 10 14 6 10 6 10 7 9 7 9 8 7 8 7 5 8 5 8 4 9 4 9 3 15 3 15 4 16 4 16 5 17 5" />
    </svg>
  </button>
);

export default function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header-text">Memory Card</h1>
      <div className="app-header-buttons-container">
        <InstructionsButton />
      </div>
    </header>
  );
}
