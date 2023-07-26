import './App.css'
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Barra } from './components/Barra/Barra';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

function App() {

  return (

    <div>
      <NavBar/>
     {/*  <ItemListContainer greeting={"En construccion"}/>
      <Barra/> 
      < ItemCount /> */}
      < Home />
      < Detail />
    </div>
  )
}

export default App