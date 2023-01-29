import { useParams } from "react-router-dom"
import axios from "axios"
import { useState , useEffect } from "react"

export const Person = () =>{
    const [person,SetPerson] = useState()
    const {idPerson} = useParams();
    const key ="19ec599d0544cd03b6bd426993e8336b"
    useEffect(()=>{

        if(idPerson !== undefined) {
            
            axios.get(`https://api.themoviedb.org/3/movie/${idPerson}/credits?api_key=${key}&language=en-US`).then(
                (res)=>{
                    const cast = res.data.cast
                    return SetPerson(cast)
                }
            )
        }
  },[idPerson])
  

    console.log(person)
    return(
        <div>
            {  person !== undefined ? person.map(res => <div>
                    {res.order && res.profile_path !== null ?
                    <div className="casts">
                    <img src={`https://image.tmdb.org/t/p/original/${res.profile_path}`} alt="" />
                    <h4>{res.name}</h4>
                    <p>{res.character}</p>
                    </div> 
                    : ""

                }
                </div> 

              )  :""}
        </div>
    )
}