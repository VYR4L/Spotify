import React from "react";
import Player from "../src/components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../src/assets/database/songs";
import { artistArray } from "../src/assets/database/artists";

const Song = () => {
    const { id } = useParams()

   
    const {image, name, duration, artist, audio} = songsArray.filter(
            (currentsongObj) => currentsongObj.id === Number(id))[0]

    const artistObj = artistArray.filter(
        (currentArtistObj) => currentArtistObj.name === artist)[0]

    const songsArrayFromArtist =  songsArray.filter(
            (currentSongObj) => currentSongObj.artist === artist)

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomIdFromArtist = songsArrayFromArtist[randomIndex].id
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2].id

    return(
    <div className="song">
        <div className="song__container">
            <div className="song__image-container">
                <img src={image}
                alt={`Imagem da musica ${name}`} />
            </div>
        </div>
        <div className="song__bar">
            <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
                <img 
                width={75}
                height={75}
                src={image}
                alt={`imagem do artista ${artist}`} />
            </Link>
            <Player duration={duration}
            randomIdFromArtist={randomIdFromArtist}
            random2IdFromArtist={randomId2FromArtist}/>
            <div>
                <p className="song__name">{name}</p>
                <p>{artist}</p>
            </div>

        </div>
    </div>
    )
}

export default Song