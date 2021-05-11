import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <Film key={film.id}><a href={film.url}>{film.name}</a></Film>
        );
    });



    return(
        <>
            {filmNodes}
        </>
    )    
}

export default FilmList;