import React from 'react';

const DisplayedPicture = (props) => {
    return (
        <div className="galleryRight">
            <img src={props.chosen} alt='smth' />
        </div>
    );
}

export default DisplayedPicture;