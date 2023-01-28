import React from "react"
import { useSelector , useDispatch } from "react-redux"
import { useState , useEffect } from "react"
import { changeColor } from "../Film/filmSlice"
import { seriesData , seriestatus , Error2 } from "./SerieSlice"
import { fetchSeries } from "./SerieSlice"
export const Series = () => {
    const [color,setColor] = useState({check:false})
    const res = useSelector(seriesData)
    const err = useSelector(Error2)
    const status = useSelector(seriestatus)
    const change = useSelector(changeColor)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
          dispatch(fetchSeries());
        }
      }, [status, dispatch]);

      console.log(res)
    return(
      //card ta3 do
        <div className="all">

{res.lenght !== 0 ? <div className={change}>
          <div className="allCard">
              {res.map((data) => <ul className="card">
            <div className="imageCard"><img className="image" src={`https://image.tmdb.org/t/p/original/${data.poster_path
              }`} alt="test" /></div>
            <div className="cardInfo">
            <div className="moviesTitle">{data.name}</div>
            <div >{data.vote_average}</div>
            </div>
          </ul>     
          )}
            </div>
          </div> : ""

}
        </div>



       
    )
}
