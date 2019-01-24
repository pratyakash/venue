import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import calender_icon from '../../resources/images/icons/calendar.png';
import location_icon from '../../resources/images/icons/location.png';

class VenueInfo extends Component {

    state={
        title:['Event Date & Time','Event Location'],
        desc:['12 Dec 2019 @05.00 P.M.','Park Street California'],
        duration:[500,500],
        delay:[0,500],
        icon:[calender_icon,location_icon],
        bck:['#ff4800','#ffa800']
    }

    showInfo=()=>(
        this.state.title.map((box,i)=>(
        <Zoom duration={this.state.duration[i]} delay={this.state.delay[i]} key={i}>
            <div className="vn_item">
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className="vn_icon_square" style={{background:`${this.state.bck[i]}`}}></div>
                        <div className="vn_icon" style={{background:`url(${this.state.icon[i]})`}}></div>
                        <div className="vn_title">{this.state.title[i]}</div>
                        <div className="vn_desc">{this.state.desc[i]}</div>
                    </div>
                </div>
            </div>
        </Zoom>
        ))
    )

    render() {
        return (
            <div>
               <div className="bck_black">
                        <div className="vn_wrapper">
                            {this.showInfo()}
                        </div>
                </div>     
            </div>
        );
    }
}

export default VenueInfo;