import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}