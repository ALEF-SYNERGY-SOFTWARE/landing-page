import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function SiteLayout() {
 return (
  <div>
   <Header />
   <div>
    <Outlet />
   </div>
   <Footer />
  </div>
 );
}
