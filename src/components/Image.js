import React from "react";
import Mike from '../Mike.png';
import './Image.css';

export default function Image() {
    return (
        <div className="image-container">
            <img src={Mike} className="photo" alt="Mike Mendes" />
            <h1>hello</h1>
        </div>
    )
}