var F=Object.defineProperty;var P=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>P(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();class i{static getUser(){return JSON.parse(localStorage.getItem("user"))}}a(i,"setUser",t=>{const o={...JSON.parse(localStorage.getItem("user")),...t};return localStorage.setItem("user",JSON.stringify({...o})),o}),a(i,"clearUser",()=>(localStorage.removeItem("user"),null)),a(i,"validateUserLogin",t=>t.username);const U=()=>`<footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>`,d=class d{constructor(t){a(this,"_setState",t=>{this.state={...this.state,...t}});a(this,"_getState",()=>this.state);if(d.instance)return d.instance;d.instance=this,this.state=t}};a(d,"instance",null);let g=d;class $ extends g{constructor(){const s=window.location.pathname;super({feature:s});a(this,"getFeature",()=>this._getState().feature);a(this,"setFeature",s=>{s.includes("/")&&(s=this._pathToFeature(s)),this._setState({feature:s})});a(this,"_pathToFeature",s=>({"/":"main","/profile":"profile","/login":"login","/logout":"logout"})[s])}}a($,"instance",null);const h=new $,x={active:"text-blue-600",inactive:"text-gray-600"},M=({path:e,label:t,active:s=!1})=>`
    <li>
      <a href=${`/${e}`} id="${e}" data-path="${e}" 
      class="font-bold ${s?x.active:x.inactive}">${t}</a>
    </li>
  `;class _ extends g{constructor(){super({user:i.getUser()});a(this,"getUser",()=>this._getState().user);a(this,"setUser",s=>{s&&(this._setState({user:s}),i.setUser(s))});a(this,"clearUser",()=>{this._setState({user:null}),i.clearUser()})}}const c=new _,m={main:{path:"main",label:"홈"},profile:{path:"profile",label:"프로필"},login:{path:"login",label:"로그인"},logout:{path:"logout",label:"로그아웃"}},j=[m.main,m.login],I=[m.main,m.profile,m.logout],N=()=>{const t=c.getUser()?I:j,s=h.getFeature();return`
<nav id='root-nav' class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${t.map(o=>M({...o,active:s===o.path})).join("")} 
          
        </ul>
      </nav>
      `},H=function(){function e(){return`<div>
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
  ${N()}
  </div>`}return e()};function f(e){console.log(e)}const B=()=>{document.querySelector("form").addEventListener("submit",e=>{e.preventDefault();const s={username:new FormData(e.target).get("username"),email:"",bio:""};if(!i.validateUserLogin(s)){alert("이메일과 비밀번호를 입력해주세요.");return}c.setUser(s),h.setFeature("main"),l.navigate(p.main.path)})},T=()=>{var e;(e=document.querySelector("nav"))==null||e.addEventListener("click",t=>{t.target.dataset.path==="logout"&&(c.clearUser(),f(p.login.path),l.navigate(p.login.path))})},E=()=>{document.querySelector("nav#root-nav")&&document.querySelector("nav#root-nav").addEventListener("click",t=>{if(!t.target.dataset.path)return;const s=t.target.dataset.path;h.setFeature(s),t.preventDefault(),l.navigate(p[s].path)})},D=()=>{E(),T()},w=()=>{const e=i.getUser();return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${H()}
      

      <main class="p-4">
        ${e?`<div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea
                class="w-full p-2 border rounded"
                placeholder="무슨 생각을 하고 계신가요?"
              ></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                게시
              </button>
            </div>`:""}

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://via.placeholder.com/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
      ${U()}
    </div>
  </div>
`},O=(e,t)=>{t?e.querySelector(t).innerHTML=w():e.innerHTML=w(),D()},y=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,A=(e,t)=>{t?e.querySelector(t).innerHTML=y():e.innerHTML=y()},S=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input required id="username" name='username' type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input name='password' type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,R=()=>{B()},q=(e,t)=>{t?e.querySelector(t).innerHTML=S():e.innerHTML=S(),R()},k=()=>{document.getElementById("profile-form").addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.target),s={username:t.get("username"),email:t.get("email"),bio:t.get("bio")};c.setUser(s)})},L=()=>{const e=c.getUser();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${H()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id='profile-form'>
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${e.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded">
                  ${e.bio}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${U()}
      </div>
    </div>
`},J=()=>{E(),T(),k()},C=(e,t)=>{t?e.querySelector(t).innerHTML=L():e.innerHTML=L(),J()},p={main:{path:"/",page:O},profile:{path:"/profile",guards:[()=>{if(!c.getUser())return"/login"}],page:C},login:{path:"/login",guards:[()=>{if(c.getUser())return"/"}],page:q},logout:{path:"/logout",page:()=>null},404:{path:"/404",page:A}},u=class u{constructor(t=!1){a(this,"addRoute",(t,s)=>{this.routes[t]=s});a(this,"toggleHash",t=>{this.isHash=t,this.isHash?window.addEventListener("hashchange",this._handleRouteState):window.removeEventListener("hashchange",this._handleRouteState)});a(this,"navigate",t=>{this.isHash===!0&&(window.location.hash=t),history.pushState({},"",t),this.route(t)});a(this,"route",t=>{console.log(t,"path",this.isHash);const s=this.routes[t];s?(f(`Routing to ${t}`),s()):(f(`Cannot route to ${t}`),this.routes["/404"]())});a(this,"_handlePopState",()=>{this.route(window.location.pathname)});a(this,"_handleRouteState",()=>{const t=this.isHash?window.location.hash.replace("#",""):window.location.pathname;this.route(t)});a(this,"replaceBodyHtml",(t,...s)=>{let o=!1;if(s)for(const n of s){console.log(s,"guards");const r=n();if(console.log(r,"redirectPath"),r){this.navigate(r),o=!0;return}}!o&&t(document.body,"#root")});if(u.instance)return u.instance;this.isHash=t,u.instance=this,this.routes={},window.addEventListener("popstate",this._handlePopState)}};a(u,"instance",null);let v=u;const l=new v(!1);for(const e in p){const t=p[e];l.addRoute(t.path,()=>{t.guards?l.replaceBodyHtml(t.page,...t.guards):l.replaceBodyHtml(t.page)})}const W=()=>{c.setUser(i.getUser()),h.setFeature(window.location.pathname)};W();window.addEventListener("load",()=>{window.location.hash?l.route(window.location.hash.replace("#","")):l.route(window.location.pathname),window.location.hash&&l.toggleHash(!0)});
