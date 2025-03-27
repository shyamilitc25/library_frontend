const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white vh-100 h-20 flex  items-center px-6">
      {/* <div className=" mx-auto  flex justify-between items-center"> */}
        <h1 className="text-2xl font-bold">Library Management</h1>
        <nav className="ml-auto">
          <ul className="flex space-x-4 ">
            <li>
              <a href="#" className="hover:underline text-white">
                Logout
              </a>
            </li>
           
            
          </ul>
        </nav>
      {/* </div> */}
    </header>
  );
};
export default Header;
