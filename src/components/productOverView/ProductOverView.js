import React from "react"
import Header from "../common/header/Header";
import Description from "../common/description/Description";
import {BsFillInfoCircleFill} from "react-icons/bs"


const ProductOverView=()=>{
    return(
        <div>
            <Header/>
            <div className="main-container">
                <div className="description">
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    <Description/>
                    

                </div>
                <div className="price-container">
                    <p className="best-price">Base Price <span>----------------------------------------------------------</span>$1,500</p>
                    <p className="installation">(installation not include)</p>
                    <p className="equip-cost">Equipment Cost  <BsFillInfoCircleFill/> <span>-----------------------------------------------------</span> <span className="ec">$1500</span> </p>
                    <p className="saving-btn">Your Est. Annual Savings is <span>$160</span><BsFillInfoCircleFill/> </p>


                </div>




            </div>

        </div>
    )
}

export default ProductOverView;