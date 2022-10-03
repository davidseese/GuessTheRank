import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Css/settings.css"
import minus from "../Images/minus.svg"
import plus from "../Images/plus.svg"
import harmii from "../Images/Dom-09697-modified.png"
import userImg from "../Images/user.svg"
import usersImg from "../Images/users.svg"
import twitchLogo from "../Images/twitch-logo.png"
import rax from "../Images/d0149438-17c1-427b-951a-6b083022e2cd-profile_image-300x300 (3)-modified.png"
export default function Settings(){
    let [rounds,setRounds] = useState(20);
    let [gameMode, setGameMode] = useState();
    const handleMinus = () =>{
        if(rounds>2){
            setRounds(prevRounds => rounds-=1)
        }
    }
    const handlePlus = () =>{
        setRounds(prevRounds => rounds+=1)
    }
    const handleSave = () =>{
        localStorage.setItem("settings",rounds)
        localStorage.setItem("mode",gameMode)
    }
    const handleGameMode = (mode) =>{
        document.getElementById("normal-mode").style.backgroundColor = "rgba(11, 18, 26, .61)";
        document.getElementById("1v1-mode").style.backgroundColor = "rgba(11, 18, 26, .61)";
        document.getElementById("twitch-mode").style.backgroundColor = "rgba(11, 18, 26, .61)";
        document.getElementById(mode).style.background = "rgba(189, 57, 68, 0.51)";
        
        switch (mode) {
            case "normal-mode": 
                setGameMode("normal-mode")   
                break;
            case "1v1-mode": 
                setGameMode("1v1-mode")   
                break;
            case "twitch-mode": 
                setGameMode("twitch-mode")   
                break;
            default:
                break;
        }
    }
    return(
        <div className="set-con">
            <div className="set-div">
            <h3  className="submit-h">Einstellungen</h3>
            <div className="set-round">
                <label className="round-label">Runden:</label>
                <div className="rounds-change">
                    <div onClick={handleMinus} className="minus-img-con">
                    <img  className="minus-img" src={minus}></img>
                    </div>
                    <h3 className="rounds-txt">{rounds}</h3>
                    <div onClick={handlePlus} className="plus-img-con">
                        <img  className="plus-img"  src={plus}></img>
                    </div>
                </div>
            </div>
            <label className="round-label">Modus:</label>
            <div className="playmode-div">
                <div id="normal-mode" onClick={()=>{handleGameMode("normal-mode")}} className="user-img-div">
                <img id="user-img" src={userImg}></img>
                </div>
                <div id="1v1-mode" onClick={()=>{handleGameMode("1v1-mode")}} className="user-img-div">
                <img id="users-img" src={usersImg}></img>
                </div>
                <div id="twitch-mode"  className="user-img-div">
                <img id="twitch-logo" src={twitchLogo}></img>
                </div>
            </div>           
            <Link onClick={handleSave} className="save-btn" to={"/"}>Speichern</Link>
            </div>
            <div className="logos-div">
                <a href="https://www.twitch.tv/harmii" target="_blank">
                    <img className="harmii-logo" src={harmii}></img>
                </a>
                <a href="https://www.twitch.tv/rax1337" target="_blank">
                    <img className="rax-logo" src={rax}></img>
                </a>
            </div>
        </div>
    )
    
}
{/* <div className="not-en">
<img className="not-smile" src={smile3}></img>
<h3 className="not-en-txt">Not enough clips:(</h3>
<h3 className="not-en-txt2">{clipsUsed.length} clips left!</h3>
<Link className="finish-close" to={"/"}>Close</Link>
</div> */}
{/* <a style={{ backgroundColor:"transparent" }} onClick={() => {window.location.href="/"}}>
                            Close
                        </a> */}