import React, {useEffect, useState} from 'react';
import {IAlbum} from "../../interfaces/IAlbumInterface";
import {albumService} from "../../services/albumService";
import {Album} from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState<IAlbum[]>([]);

    useEffect(() => {
        albumService.getAll().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};