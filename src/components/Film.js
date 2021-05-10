import React from 'react';

const Film = ({film, children}) => {

    return(
        <>
            <h4>{film}</h4>
            <p>{children}</p>
        </>
    )

}

export default Film;