import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductOverView from "./components/productOverView/ProductOverView";
import ProductPage from "./components/productPage/ProductPage";


const Controller=()=>{

    return(
        <Router>
            <Switch>  


                <Route exact path="/"  render={()=><ProductPage/>} />
                <Route exact path="/productOverView" render={()=><ProductOverView/>}/>


            </Switch>
        </Router>
    )

}
export default Controller;