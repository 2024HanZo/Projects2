import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { filmData, filmstatus , Error , changeColor } from "./filmSlice";
import { fetchLink } from "./filmSlice";
import { remove , changeColorDark , changeColorWhite } from "./filmSlice";

import "./dropdown.css";


export const Film = () =>{
    const res = useSelector(filmData)
    const err = useSelector(Error)
    const status = useSelector(filmstatus)
    const Change = useSelector(changeColor)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {

          dispatch(fetchLink());
        }
      }, [status, dispatch]);
    useEffect(() => {
        dispatch(remove)

    },[res,dispatch])


    return(
        <div className="all">
          {res.lenght !== 0 ? <div className={Change}>
          <div className="allCard">
              {res.map((data) => <ul className="card">
            <div className="imageCard"><img className="image" src={`https://image.tmdb.org/t/p/original/${data.poster_path
              }`} alt="test" /></div>
            <div className="cardInfo">
            <div className="moviesTitle">{data.title}</div>
            <div >{data.vote_average}</div>
            </div>
          </ul>     
          )}
            </div>
          </div> : ""

}
         {/* {res.lenght !== 0 ? <div className={color}>

          <button onClick={change()}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-brightness-low-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
          </svg></button>
       
            <div className="allCard">
              {res.map((data) => <ul className="card">
            <div className="imageCard"><img className="image" src={`https://image.tmdb.org/t/p/original/${data.poster_path
              }`} alt="test" /></div>
            <div className="cardInfo">
            <div className="moviesTitle">{data.title}</div>
            <div >{data.vote_average}</div>
            </div>
          </ul>     
          )}
            </div>
          </div>
          
          
          //card ta3 dlam
          :res.lenght !== 0 ? 
          <div className="moon">

          <button onClick={change()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-moon" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
        </svg>
          </button> 
            <div className="allCard">
              
                {res.map((data) => <div className="cardMoon">
                <ul className="cardMoon2">
            <div className="imageCard"><img className="image" src={`https://image.tmdb.org/t/p/original/${data.poster_path
              }`} alt="test" /></div>
            <div className="cardInfo">
            <div className="moviesTitle">{data.title}</div>
            <div >{data.vote_average}</div>
            </div>
          </ul>  
          </div>   
          )}</div>

          
          </div>
          
          
          :""
         } 
          */}

        </div>



       
    )
}