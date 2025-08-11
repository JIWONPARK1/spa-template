import Component from "./components/Component";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Router from "./router";

class App extends Component {
  mount() {
    const header = document.querySelector("header");
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");

    new Header(header);
    new Router(main);
    new Footer(footer);
  }

  template() {
    return `
    <div>
      <header>
      </header>
      <main id="main">
      </main>
      <footer>
      </footer>
    </div>`;
  }
}

export default App;
