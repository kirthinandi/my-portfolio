import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function NavBar() {

    function handleClick() {
            window.open("https://docs.google.com/document/d/1glPeQ5M93Uh1alb4b_r7H37VQGeyDqalmRDvBJ97gf4/edit?usp=sharing", "_blank");
    }

    return (
        <>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/contact">Contact </Link>
                <button onClick={handleClick}>Resume</button>
            </nav>
        </>
    )
}