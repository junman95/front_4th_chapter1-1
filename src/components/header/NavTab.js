const NavTab = ({ path, label }) => {
  return `
    <li>
      <button id="${path}" data-path="${path}" class="text-gray-600 font-bold" onclick=>${label}</button>
    </li>
  `;
};

export default NavTab;
