import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState , useEffect } from "react"
import axios from "axios"
import "./BioPerson.css"
export const Bio =() =>{
    const [data,SetData] = useState()
    const key ="19ec599d0544cd03b6bd426993e8336b"
    const {idBio} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if (idBio !== undefined) {
            axios.get(`https://api.themoviedb.org/3/person/${idBio}?api_key=${key}&language=en-US`).then(
                res => {
                    const result = res.data
                    return SetData(result)
                }
            )
        }

    },[])

    console.log(data)
    return(
        <div className="PageBio">
        <div>
        <button className="exitPerson" onClick={() => {navigate(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-circle-fill" viewBox="0 0 18 16" >
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg></button>
        </div>

     
            {data !== undefined ? <div>
             
                

                
                <div className="CardBio">
                <div className="imageDet">
                <h1 className="TitleName" >{data.name}({data.birthday !== null ? data.birthday.toString().slice(0,4) : "null"}{data.deathday !== null ? `-${data.deathday}` : ""})</h1>
                <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} alt="" />
                </div>

                <div className="Desc">
                <h2>Biography : </h2>
                {data.biography !== "" ? <p>
                {data.biography} 
                </p>:  <p className="Notfound">Not Found any Biography For that Person</p>}
                  
                </div>
               
                </div>
             

               
            </div>
           
             :""}
        </div>
    )
}