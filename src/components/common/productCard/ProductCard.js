import React from "react"
import { useHistory } from "react-router-dom"
import image from '../images/single product card.png'
import {BsFillInfoCircleFill} from "react-icons/bs"

  
const ProductCard=({savings})=>{

    const history=useHistory()

     
    const gotoDetailsPage=()=>{
        history.push("/productOverView")


    }
     

    return(
        <div className="p-card">
            <div className="head">
                <p className="brand">Rheem</p>
                <p className="product-name">Pro Prestige 50 LeakGuard</p>

            </div>
            <div className="product">
                <div className="product-image">
                    <img src={image} alt=""/>

                </div>
                <div className="product-description">
                    <p> <span>⦿ </span> 4x more efficient as a standard model</p>
                    <p> <span>⦿ </span>10-year manufacturer warranty</p>
                    <p> <span>⦿ </span>Build-in-leak prevention system</p>
                    <p> <span>⦿ </span>Control setting with a mobile app</p>

                </div>
            </div>
            <div className="product-price">
                <p className="best-price">Base Price <spann>-----------------------</spann>$1500</p>
                <p className="installation"> (installaton not included)</p>
                <p className="incentives">Available Incentives <BsFillInfoCircleFill/><span>-------------------</span>$0</p>
                <p className="equip-cost">Equipment Cost <BsFillInfoCircleFill/> <span>-----------------</span> <span className="ec">$1500</span> </p>

                {/* <p className="savins">Your Est. Annual savings <span>$160</span></p> */}
                <p className="savins">Your Est. Annual Savings <span>${savings}</span> <BsFillInfoCircleFill/> </p>
                
                <p className="install-button">Get Install Quote</p>

            </div>
            <div className="more-detail">
                <p onClick={gotoDetailsPage}>View More Details</p>

            </div>

        </div>
    )
}    

export default ProductCard;