import React from "react";
import "./Info.css"
export default function Info() {
    return(
        <div className="info-container">
        <h1 className="name">Mike Mendes</h1>
        <h5 className="worktitle">Frontend Developer</h5>
        <a href="https://github.com/4mikemendes">
        <button id="gith-btn"><i class="fa fa-github"></i> GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/4mikemendes/" >
        <button id="linkd-btn"><i class="fa fa-linkedin-square"></i> Linkedin</button>
        </a>
        </div>
    )
}
// #0289CE linked in button color