import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movie from "./Movie.jsx";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

function Row({title, fetchUrl, rowID}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl]);
    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
                <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative">
                    {movies.map((item, id)=> (
                        <Movie item={item} key={id}/>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
            </div>
        </>
    );
}

export default Row;