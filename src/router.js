import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

const routes = [
  {
    path: "/",
    view: HomePage,
  },
  {
    path: "/todo",
    view: TodoPage,
  },
];

class Router {
  constructor($target) {
    this.$target = $target;
    this.navigate();
    this.render();
    this.init();
  }

  navigate() {
    const links = document.querySelectorAll("a");
    links.forEach((element) =>
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const pathname = e.target.dataset.path;
        if (pathname) {
          if (location.pathname === pathname) return;
          history.pushState(null, null, pathname);
          this.render();
        }
      })
    );
  }
  init() {
    window.onpopstate = () => {
      this.render();
    };
  }
  render() {
    const match = routes.find((route) => route.path === location.pathname);
    const Page = match ? match.view : NotFound;
    new Page(this.$target);
  }
}

export default Router;
