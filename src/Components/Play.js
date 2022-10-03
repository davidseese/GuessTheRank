import React from "react";
import NormalMode from "./NormalMode";
import OnevOneMode from "./OnevOneMode";
import ChatMode from "./ChatMode";
export default function Play(){
    switch (localStorage.getItem("mode")) {
        case "normal-mode": 
            return(<NormalMode></NormalMode>)
        case "1v1-mode":
            return(<OnevOneMode></OnevOneMode>)
        case "twitch-mode": 
            return(<ChatMode></ChatMode>)
        default:
            return(<NormalMode></NormalMode>)
    }
}