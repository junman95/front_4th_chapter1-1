import Component from "@/lib/core/Component";
import NavBar from "./NavBar";
import { delegateNavButtonEvents } from "@/lib/nav/navEvent";
import { onLogoutSubmit } from "@/lib/auth/submit";
import userStore from "@/stores/UserStore";
class Header extends Component {
  setEvent() {
    this.addEvent("click", "nav#root-nav", (e) => {
      delegateNavButtonEvents(e);
      onLogoutSubmit(e);
    });
  }
  template() {
    return `<div>
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <div id="nav-container">
      </div>
  </div>`;
  }

  mounted() {
    new NavBar(this.targetDOM.querySelector("#nav-container"), userStore);
  }
}

export default Header;
