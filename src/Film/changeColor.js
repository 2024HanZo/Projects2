import React from "react"
import { useState } from "react"
import { Film } from "./film"


export const Change = () =>{
    const [change,setChange] = useState({check:false})
    return(
        <div>
        <Film colored={change} />
        </div>
    )
}