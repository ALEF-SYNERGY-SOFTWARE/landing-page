import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { SiteLayout } from "./layouts/siteLayout";

function App() {
 return (
   <BrowserRouter>
    <Routes>
     <Route element={<SiteLayout />}>
      <Route index element={<Home />}/>
     </Route>
    </Routes>
   </BrowserRouter>
 );
}

export default App;
