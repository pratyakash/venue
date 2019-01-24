import React from 'react';
import Carosel from './carosel';
import TimeUntil from './TimeUntil';

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

            {/* <TimeUntil/> */}

        </div>
    );
};

export default Featured;