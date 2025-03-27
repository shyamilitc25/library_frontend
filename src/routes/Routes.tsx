import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes