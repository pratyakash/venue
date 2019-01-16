import React from 'react';
import Button from '@material-ui/core/Button';
import Ticket from '../../resources/images/icons/ticket.png'

const MyButtons = (props) => {
    return (
        <div>
            <Button 
                size="small" 
                href="#" 
                variant="contained" 
                style={{
                    background:'red',
                    color:'white'
            }}>
                <img src={Ticket} className="iconImage" alt="IconButton"/>
                Button
            </Button>
        </div>
    );
};

export default MyButtons;