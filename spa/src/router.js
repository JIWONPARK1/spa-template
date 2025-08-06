import Component from "./components/Component";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";

const routes = [
  {
    path: "/",
    view: HomePage,
  },
  {
    path: "/todo",
    view: TodoListPage,
  },
];

class Router extends Component {
  mount() {
    const match = routes.find((route) => route.path === location.pathname);
    const Page = match ? match.view : NotFound;
    new Page(this.$target);
  }
}

export default Router;
