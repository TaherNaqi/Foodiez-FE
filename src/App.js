import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Recipe from "./Components/Recipe";
import UserProfile from "./Components/UserProfile";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      {/*creating website path for main pages and detailed page*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
//<Route path="/Recipe/:slug" element={<Ingrediant/>}/>
//<Route path="/Recipe/Ingrediant" element={<Ingrediant/>}/>
//<Route path="/userProfile" element={<Ingrediant/>}/>
