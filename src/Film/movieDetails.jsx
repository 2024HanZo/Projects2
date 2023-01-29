import axios from "axios";
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import "./moviesDetails.css"
import { Film } from "./film"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const MovieDetails =() =>{
    const [change,SetChange]=useState(false)
    const [data,SetData]=useState()
    const [person,SetPerson]=useState()
    const [video,SetVideo]= useState()
    const {id} = useParams()
    const key ="19ec599d0544cd03b6bd426993e8336b"
    const navigate = useNavigate()

    useEffect(() => {

            axios.get(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`).then((res)=>{
                const results = res.data
                return SetData(results)
            }
            );

    


    },[])
    useEffect(()=>{
        if(data !== undefined){
            const idVideo = data.id
            axios.get(`https://api.themoviedb.org/3/movie/${idVideo}/videos?api_key=${key}&language=en-US`).then(
                (result)=>{
                    const videoRes = result.data.results
                    return SetVideo(videoRes)}
            )
        }
        if(data !== undefined) {
            let idCredit = data.id
            axios.get(`https://api.themoviedb.org/3/movie/${idCredit}/credits?api_key=${key}&language=en-US`).then(
                (res)=>{
                    const cast = res.data.cast
                    return SetPerson(cast)
                }
            )
        }
  },[data])


    console.log(person)

    // const genres = data.genres;

    // console.log(genres)

    return(
        <div className="alldetails">
            {data !== undefined ? <div  className="cardmoviesDetails" > <img className="imgbackground" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}  />
            <button className="exit" onClick={() => {navigate(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-circle-fill" viewBox="0 0 18 16" >
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg></button>
            <div className="container">
                <div className="moviesimage"><img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} /></div>

                <div>
                <h1>{data.title}({data.release_date})</h1>
                {data.overview === "" ? <div>
                <label htmlFor="desc">Overview :</label>
                <div className="description">
                    <p id="desc">Overview is not found</p>
                </div>
                </div> :
                <div>
                <label htmlFor="desc">Overview :</label>
                <div className="description">
                    <p id="desc">{data.overview}</p>
                </div>
                </div>
                
                }
                <div className="genre">
                    <h4 className="styleNameGenre">Genre:</h4>
                    {data.genres.map((test) =>
                        <a>{test.name}</a>
                    )}
                    
                </div>
                <div className="borderForTrailer">
                    {data.vote_average >= 8 ? <div className="logo8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="yellow" class="bi bi-star-fill" viewBox="0 0 17 9">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                        <p className="voteText">{data.vote_average.toString().slice(0,3)}</p>

                    </div> : data.vote_average < 8 && data.vote_average >= 3 ? <div className="logo8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="yellow" class="bi bi-star-half" viewBox="0 0 17 9">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
                        <p className="voteText">{data.vote_average.toString().slice(0,3)}</p>

                    </div>
        :<div className="logo8">
        <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="40" fill="yellow" class="bi bi-star" viewBox="0 0 17 9">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
        <p className="voteText">{data.vote_average.toString().slice(0,3)}</p>

    </div>            }
                    <button className="btnTrailer" onClick={() => { SetChange(true)} }><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 18 12">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg><span>Watch</span> 
 
</button>

                      {data.adult === true ?<div> <button className="adult" >+18</button> </div> : ""} 
                </div>
                {video !== undefined && change === true? <div >  {video.map((videores) => <div> {videores.official === true && videores.type ==="Trailer" ? <div className="trailer"> <div className="close" onClick={() => {SetChange(false)}}><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></div> <iframe width="100%" height="100%"  src={`https://www.youtube.com/embed/${videores.key}`} allowfullscreen >
                        </iframe></div>  :""}</div> ) } 
                        
                </div> 
                :""
                }


                </div>


            </div>
            <h2 className="textPerson">Movie Cast</h2>
            <div className="castCards">

                {  person !== undefined ? person.map(res => <div>
                    {res.order < 9 && res.profile_path !== null ?
                    <div className="casts">
                    <img src={`https://image.tmdb.org/t/p/original/${res.profile_path}`} alt="" />
                    <h4>{res.name}</h4>
                    <p>{res.character}</p>
                    </div> 
                    : ""

                }
                </div> 

              )  :""}
              
              
              {  data !== undefined ? <div>
                <NavLink className="navlink" to={`/${data.id}`}>
                <button className="btnMore">
               <p>More</p>
                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
          
            </button>
            </NavLink>
                </div> 

               :""}


           

            </div>
            </div>

            
            :""}
         
        </div>
    )
}