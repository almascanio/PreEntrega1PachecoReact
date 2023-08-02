import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import './App.css'
import {NavBar} from "./components/NavBar/NavBar";
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Category } from "./pages/Category";

 const routes = createBrowserRouter(createRoutesFromElements(
  <Route element={ <NavBar/>}>
    < Route path="/" element={<Home/>}/>
    < Route path="/item/:id" element={< Detail/>}/>
    < Route path="/category/:id" element={ < Category/> }/>
  </Route>
));

function App() {

  return (

    <div>
    {/*   <NavBar/>
      <Home/>
      < Detail/> */}
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App