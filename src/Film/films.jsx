import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchLink } from "./filmSlice";
import { useDispatch , useSelector } from "react-redux";
import { filmData, filmstatus , Error , changeColor } from "./filmSlice";
import { remove , changeColorDark , changeColorWhite } from "./filmSlice";




export const Films = () => {
    const change = useSelector(changeColor)
    const dispatch = useDispatch()
    return(
        <div>
           
            <nav className={change}>
                <ul className="navbarfilms">
                    <li> <NavLink to="popular"><button  data-text="Awesome" className="btn"  onClick={() =>{dispatch(fetchLink("popular"))} }><span class="actual-text">&nbsp;Popular&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Popular&nbsp;</span></button></NavLink></li>
                    
                    <li><NavLink to="top-rated"><button  data-text="Awesome" className="btn"  onClick={() =>{dispatch(fetchLink("top_rated"))} }><span class="actual-text">&nbsp;TopRated&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;TopRated&nbsp;</span></button></NavLink></li>
                    
                    <li><NavLink to="up-coming"><button  data-text="Awesome" className="btn" onClick={() =>{dispatch(fetchLink("upcoming"))} }><span class="actual-text">&nbsp;UpComing&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;UpComing&nbsp;</span></button></NavLink></li>
                </ul>

            </nav>
            <Outlet/>
        </div>
    )
}