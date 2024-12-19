import addChildComponents from "@/lib/render/addChildComponents";
import navbar from "./NavBar";

const render = (dom) => {
  document.querySelector(dom).innerHTML = `<div>
  <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <div id="nav-container">
    </div>
    </div>`;
};

const Header = function (dom) {
  render(dom);
  addChildComponents([[navbar, "#nav-container"]]);
};

export default Header;
