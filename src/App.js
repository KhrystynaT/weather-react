import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/khrystyna.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khrystyna Tyvoniuk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KhrystynaTyvoniuk/react-practice.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://animated-alfajores-c26225.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
