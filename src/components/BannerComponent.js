import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './request';
import '../shared/styles/banner.css'

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
        return request;
        }
        fetchData();
    }, []);
    // console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}>
            <div className="banner-contents">
                    <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner-btns">
                        <button className="banner-btn">Play</button>
                        <button className="banner-btn">My List</button>
                    </div>
                    <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
