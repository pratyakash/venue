import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10473.397283380431!2d-119.53886842390784!3d36.55412076727642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094e48e9907c05f%3A0xba47321744d58938!2sSun+Valley+Farms!5e0!3m2!1sen!2sin!4v1547643278515" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;