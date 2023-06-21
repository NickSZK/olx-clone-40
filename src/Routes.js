import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { AdPage } from "./pages/AdPage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import { RouteHandler } from "./components/RouteHandler";
import { AddAd } from "./pages/AddAd/AddAd";
import { Ads } from "./pages/Ads/Ads";

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path='/' 
            element={ <Home /> }
         />

         <Route path='/about' 
            element={ <About /> } 
         />

         <Route path='/signin' 
            element={ <Signin /> } 
         />

         <Route path='/signup' 
            element={ <Signup /> }
         />

         <Route path='/ad/:id' 
            element={ <AdPage /> } 
         />

         <Route path='/post-an-ad' 
            element={ 
               <RouteHandler private children={ <AddAd /> } /> 
            } 
         />

         <Route path='/ads' 
            element={
               <RouteHandler children={ <Ads /> } /> 
            } 
         />

         <Route path='*' 
            element={ <NotFound /> } 
         />
      </Routes>
   )
}