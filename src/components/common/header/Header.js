import React from "react"
import { useHistory } from "react-router-dom"

const  Header=()=>{
    const history=useHistory()

    const backToProductPage=()=>{
        history.push("/")

    }

    return(
        <div className="header">
            <span onClick={backToProductPage}>Back</span>
        <p>Product OverView</p>
        </div>
    )
}
 export default Header;