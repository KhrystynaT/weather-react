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
            href="https://www.linkedin.com/in/t-khrystyna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khrystyna T.
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KhrystynaT/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-website-react.netlify.app/"
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
