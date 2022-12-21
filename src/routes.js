import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
  return (    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
    </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;