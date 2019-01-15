import React from 'react';
import Carosel from './carosel';

const Featured = () => {
    return (
        <div>
            
            <div className={{position: 'relative'}}>
                <Carosel/>
                <div className="artist_name">
                    <div className="wrapper">
                        Ariana Grande
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Featured;