import { html } from "../utils/html";
import Component from "./Component";

class Header extends Component {
  template() {
    return html`<h1>logo</h1>
      <ul>
        <li>
          <a data-path="/" href="#/">Home</a>
        </li>
        <li>
          <a data-path="/todo" href="#/todo">Todo</a>
        </li>
      </ul>`;
  }
}

export default Header;
