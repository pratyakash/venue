import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButtons from '../Utils/MyButtons'
class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:30
    }

    percentage=()=>{
        if(this.state.discountStart<this.state.discountEnd){
                this.setState({
                    discountStart:this.state.discountStart+1
                })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade onReveal={()=>this.percentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Tickects Available Till 11 May</h3>
                            <p>Dolore do esse ut eiusmod laboris adipisicing ex sit ullamco deserunt dolor ea mollit. Nisi culpa elit occaecat reprehenderit. Cillum deserunt qui incididunt aliquip sunt duis ex consequat culpa fugiat. Magna adipisicing reprehenderit elit in sit eiusmod. Duis eu tempor occaecat tempor officia cillum ipsum. In aliquip ex ut consequat. Eiusmod pariatur sunt nulla id nostrud aute.</p>

                            <MyButtons
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                href="#"
                            />
                        </div>
                    </Slide> 
                </div>
            </div>
        );
    }
}

export default Discount;