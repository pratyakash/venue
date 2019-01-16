import React from 'react';
import Zoom from 'react-reveal/Zoom';
import calender_icon from '../../resources/images/icons/calendar.png';
import location_icon from '../../resources/images/icons/location.png';
;
const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background:`url(${calender_icon})`}}></div>
                                    <div className="vn_title">Event Date & Time</div>
                                    <div className="vn_desc">12 Dec 2019 @05.00 P.M.</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{background:`url(${location_icon})`}}></div>
                                    <div className="vn_title">Event Location</div>
                                    <div className="vn_desc">Park Street California</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;