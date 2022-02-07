import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Recipe from "./Components/Recipe";
import UserProfile from "./Components/UserProfile";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyNavbar />
      {/*creating website path for main pages and detailed page*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
//<Route path="/Recipe/:slug" element={<Ingrediant/>}/>
//<Route path="/Recipe/Ingrediant" element={<Ingrediant/>}/>
//<Route path="/userProfile" element={<Ingrediant/>}/>
