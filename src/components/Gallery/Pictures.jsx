import React from 'react';

const Pictures = (props) => {
    return (
        <div className="galleryLeft">
            {props.pictures.map((picture, index) => {
                return (
                    <div key={index} className={props.chosen === index ? "chosen" : null} >
                        <img src={picture} alt='smth' onClick={() => props.onImageClick(index)} />
                    </div>
                )
            })}
        </div>  
    );
}

export default Pictures;