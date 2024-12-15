const NavBar = () => {
  return `
<nav id='root-nav' class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li>
            <button data-path="main" class="text-blue-600 font-bold" onclick=>홈</button>
          </li>
          <li>
            <button data-path="profile" class="text-gray-600 font-bold" onclick=>프로필</button>
          </li>
          <li>
            <button data-path="login" class="text-gray-600 font-bold" onclick=>로그인</button>
          </li>
        </ul>
      </nav>
      `;
};

export default NavBar;
