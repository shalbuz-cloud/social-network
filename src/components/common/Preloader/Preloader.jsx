import preloader from "@/assets/icons/preloader.svg";
import React from "react";

const Preloader = () => {
    return (
        <div>
            <img src={ preloader } alt="preloader" style={ {width: "100px"} } />
        </div>
    )
}

export default Preloader;