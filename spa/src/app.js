import Router from "./router";

class App {
  constructor($target) {
    $target.innerHTML = this.template();
    const main = document.getElementById("main");
    new Router(main);
  }
  mount() {}

  template() {
    return `<div>
      <header>
        <h1>logo</h1>
        <ul>
         <li>
            <a data-path="/" href="#/">Home</a>
         </li>
         <li>
            <a data-path="/todo" href="#/todo">Todo</a>
         </li>
        </ul>
      </header>
      <main id="main"></main>
    </div>`;
  }
}

export default App;
