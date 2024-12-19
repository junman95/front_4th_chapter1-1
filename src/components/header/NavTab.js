const NavTab = ({ path, label }) => {
  return `
    <li>
      <a href=${`/${path}`} id="${path}" data-path="${path}" class="text-gray-600 font-bold" onclick=>${label}</a>
    </li>
  `;
};

export default NavTab;
