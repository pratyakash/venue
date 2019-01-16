import React from 'react';
import {scroller} from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth:true
        });
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        
        >
        
        <List component="nav">
            <ListItem button onClick={()=> console.log('ahda')}>
                Event Starts In
            </ListItem>   

            <ListItem button onClick={()=> console.log('ahda')}>
                Venue Info
            </ListItem>  

            <ListItem button onClick={()=> this.scrollToElement('highlights')}>
                HighLights
            </ListItem>  

            <ListItem button onClick={()=> console.log('ahda')}>
                Pricing
            </ListItem>   

            <ListItem button onClick={()=> console.log('ahda')}>
                Location
            </ListItem>        
        </List>
        </Drawer>
    );
};

export default SideDrawer;