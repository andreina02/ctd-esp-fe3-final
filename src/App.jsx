
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Context from "./Context/Context";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/dentist/:id" element={<Detail />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/favs" element={<Favs />}/>
          <Route path="*" element={<h1>Page not found - Error 404</h1>}/>
        </Route>
      </Routes>
    </>
    
    
      
  );
}

export default App;
