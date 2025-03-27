const SideBar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-44 min-h-screen p-4">
       
      <ul className="text-left">
        <li className="mb-4">
          <a href="#" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:underline">
            Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:underline">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
