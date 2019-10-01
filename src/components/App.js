import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import PerfilTheme from '../pages/PerfilTheme'
import WinTheme from '../pages/WinTheme'

function App(){
    return(
        <BrowserRouter>
               <Switch>
               <Route exact path="/" component={PerfilTheme} ></Route>
                <Route exact path="/perfil" component={PerfilTheme} ></Route>
                <Route exact path="/win" component={WinTheme} ></Route>
                
               </Switch>
        </BrowserRouter>
    )
}
export default App;