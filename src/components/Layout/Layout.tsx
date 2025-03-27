import Header from "./Header";
import SideBar from "./Sidebar";
type ComponentProps = {
  children: React.ReactNode;
};
const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
     <SideBar />
      <div className="flex flex-col flex-grow">
       
          <Header />
         
        <main className="flex flex-grow p-4 bg-gray-100 h-100">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
