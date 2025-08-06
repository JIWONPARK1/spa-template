import Component from "./components/Component";
import HomePage from "./pages/HomePage";
import Router from "./router";

class App extends Component {
  mount() {
    const contents = document.querySelector("main");
    const router = new Router(contents);
  }

  template() {
    return `<div>
      <header>
        <h1>logo</h1>
        <ul>
         <li>
            <a href="#/">Home</a>
         </li>
         <li>
            <a href="#/">Todo</a>
         </li>
        </ul>
      </header>
      <main></main>
    </div>`;
  }
}

export default App;
