import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={ s.logo }>
                <img
                    src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="logo"/>
                <h1>Social Network</h1>
            </div>
        </header>
    )
}

export default Header;