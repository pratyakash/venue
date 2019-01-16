import React, { Component } from 'react';
import MyButtons from '../Utils/MyButtons';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Lorem amet anim id nulla veniam nisi anim aute.',
            'Lorem amet anim id nulla veniam nisi anim aute.',
            'Lorem amet anim id nulla veniam nisi anim aute.'
        ],
        linkto:['#','#','#'],
        delay:[500,0,500]
    }

    showBoxes=()=>(
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                 <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButtons
                                text="Purchase"
                                bck="#ffa800"
                                color="#fffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;