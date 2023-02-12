import { useParams , useNavigate } from "react-router-dom"
import axios from "axios"
import { useState , useEffect } from "react"
import SwiperCore, { EffectCoverflow, EffectFade, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./person.css"

export const Person = () =>{
    const [person,SetPerson] = useState()
    const [data,SetData]=useState()
    const {idPerson} = useParams();
    const key ="19ec599d0544cd03b6bd426993e8336b"
    SwiperCore.use([EffectCoverflow, Pagination]);
    const navigate = useNavigate()
    useEffect(()=>{

        if(idPerson !== undefined) {
            
            axios.get(`https://api.themoviedb.org/3/movie/${idPerson}/credits?api_key=${key}&language=en-US`).then(
                (res)=>{
                    const cast = res.data.cast
                    return SetPerson(cast)
                }
            )
            axios.get(`
            https://api.themoviedb.org/3/movie/${idPerson}?api_key=${key}&language=en-US`).then((res)=>{
                const results = res.data
                return SetData(results)
            }
            );
        }
  },[idPerson])
  

    console.log(data)
    return(
        <div className="allCardPerson">
            { data !== undefined ?<div className="return">
                <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}  alt="" />
                <div className="returnFilm" onClick={() => {navigate(-1)}}>

            <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg> Back To Film</p></div>
            <h1>{data.title}</h1>
            </div> : ""}
            <div className="cardInfoPersone">
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        modules={{Navigation,EffectFade}}
        speed={800}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        
        }}
        pagination={true}
       
        className="mySwiper"
      >
            {  person !== undefined ? person.map(res => <div>

                    {res.order && res.profile_path !== null ?<SwiperSlide>
                        <NavLink className="navlink" to={`/Person/${res.id}`}>
                        <div className="castsInfo">
                    <img src={`https://image.tmdb.org/t/p/original/${res.profile_path}`} alt="" />
                    <h4>{res.name}</h4>
                    <p>{res.character}</p>
                    </div> 

                        </NavLink>

                    </SwiperSlide>
                    : ""

                }
               
                </div> 

              )  :""}
                </Swiper>
            </div>

        </div>
    )
}