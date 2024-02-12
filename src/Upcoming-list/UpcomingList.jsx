
import './UpcomingList.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UpcomingList() {
  const [PopularCard, setPopularCard] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(data => data.json())
        .then(data2 => setPopularCard(data2.results))

}, [])
  return (
    <div className='UpcomingList'>
       <div className="PopularCard-main" >
              
           
              {PopularCard.map((value,index) => {
                  return(
                      
                  <div className='PopularCards' key={index}>
                  <Link className='Navlink' to={`/movie/${value ? value.id : ""}`}>

                      
                          <img src={`https://image.tmdb.org/t/p/original${value ? value.poster_path : ""}`} alt="" />
                          <div className='popular-card-datails' >
            
                              <h5 >{value ? value.overview.slice(0,100) : ""}</h5>
                              <h4 >{value ? value.release_date : ""}</h4>
                              <h3 >{`⭐${value ? value.vote_average: ""}`}</h3>

                          </div>
                          



                  </Link>
                  </div>)
              })}


          </div>



    </div>
  )
}

export default UpcomingList
