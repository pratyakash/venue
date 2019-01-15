import React from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil = () => {


    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts In
                </div>

                <div className="countdown_bottom">
                    <div className="countdown_items">
                        <div className="countdown_time">
                            23
                    </div>
                        <div className="countdown_tag">
                            Days
                    </div>
                    </div>
                    <div className="countdown_items">
                        <div className="countdown_time">
                            23
                    </div>
                        <div className="countdown_tag">
                            Hours
                    </div>
                    </div>
                    <div className="countdown_items">
                        <div className="countdown_time">
                            23
                    </div>
                        <div className="countdown_tag">
                            MIN
                    </div>
                    </div>
                    <div className="countdown_items">
                        <div className="countdown_time">
                            23
                    </div>
                        <div className="countdown_tag">
                            SEC
                    </div>
                    </div>
                </div>
            </div>
        </Slide>
        
    );
};

export default TimeUntil;