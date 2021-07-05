import React from "react"
import{FaCheck} from "react-icons/fa"


const Description=({heading,para})=>{

    return(
        <div className="description-container">
            <div className="title">
                <p> <FaCheck/>{heading}</p>

            </div>
            <div className="para">
                <p>
                    {para} 
                </p>

            </div>

        </div>
    )
}

export default Description;
