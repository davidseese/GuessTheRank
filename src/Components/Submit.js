import React from "react";
import { useNavigate } from "react-router-dom";
import UserImg from '../Images/fa-solid_user-alt.svg'
import LineImg from '../Images/Line 1.svg'
import LinkImg from '../Images/bx_link.svg'
import ascendant from '../Images/ascendantiii.png'
import bronze from '../Images/bronzeiii.png'
import silver from '../Images/silveriii.png'
import diamond from '../Images/diamondiii.png'
import gold from '../Images/goldiii.png'
import immo from '../Images/immortaliii.png'
import iron from '../Images/ironiii.png'
import plat from '../Images/platinumiii.png'
import radiant from '../Images/radiantiii.svg'
import harmii from "../Images/Dom-09697-modified.png"
import rax from "../Images/d0149438-17c1-427b-951a-6b083022e2cd-profile_image-300x300 (3)-modified.png"
import { useState} from "react";
import app from "../Firebase";
const { getFirestore, addDoc, collection} = require('@firebase/firestore');

const db = getFirestore(app);
const clipRef = collection(db,"clips");
const backupRef = collection(db,"backup");



export default function Submit() {
    const navigator = useNavigate();
    const [link, setNewLink] = useState("");
    const [tracker, setNewTracker] = useState("");
    const [linkError,setLinkError] = useState(false);
    const [trackerError,setTrackerError] = useState(false);
    const [rankError,setRankError] = useState(false);
    const [rankChoosed, setRankChoosed] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [rank,setRank] = useState(null);
    const [rankNumError,setRankNumError] = useState(false);
    const [rankNum, setRankNum] = useState(null);


    function handleRank(rank){
        document.getElementById("iron").style.backgroundColor = "transparent";
        document.getElementById("bronze").style.backgroundColor = "transparent";
        document.getElementById("silver").style.backgroundColor = "transparent";
        document.getElementById("gold").style.backgroundColor = "transparent";
        document.getElementById("plat").style.backgroundColor = "transparent";
        document.getElementById("diamond").style.backgroundColor = "transparent";
        document.getElementById("ascendant").style.backgroundColor = "transparent";
        document.getElementById("immo").style.backgroundColor = "transparent";
        document.getElementById("radiant").style.backgroundColor = "transparent";
        document.getElementById(rank).style.background = "rgba(189, 57, 68, 0.51)";
        switch (rank) {
            case "iron":
                setRank(0)
                setRankChoosed(true)
                break;
            case "bronze":
                setRank(3)
                setRankChoosed(true)

                break;
            case "silver":
                setRank(6)
                setRankChoosed(true)

                break;
            case "gold":
                setRank(9)
                setRankChoosed(true)

                break;
            case "plat":
                setRank(12)
                setRankChoosed(true)

                break;
            case "diamond":
                setRank(15)
                setRankChoosed(true)

                break;
            case "ascendant":
                setRank(18)
                setRankChoosed(true)

                break;
            case "immo":
                setRank(21)
                setRankChoosed(true)

                break;
            case "radiant":
                setRank(24)
                setRankChoosed(false)
                break;
            default:
                break;
        }
    }
    function handleNum(num){
        document.getElementById("one").style.backgroundColor = "transparent";
        document.getElementById("two").style.backgroundColor = "transparent";
        document.getElementById("three").style.backgroundColor = "transparent";
        document.getElementById(num).style.background = "rgba(189, 57, 68, 0.51)";
        switch (num) {
            case "one":
                setRankNum(0)
                break;
            case "two":
                setRankNum(1)
                break;
            case "three":
                setRankNum(2)
                break;
            default:
                break;
        }
    }
    const handleSubmit = async () => {
        if(tracker === ""){
            setTrackerError(true);
        }else if(!tracker.includes("tracker.gg")){
            setTrackerError(true);
        }else{
            setTrackerError(false);  
        }
        if(link === ""){
            setLinkError(true);
        }else if (!link.includes("youtube.com")){
            setLinkError(true);
        }else{
            setLinkError(false);
        }
        if(rank === null){
            setRankError(true)
        }else{
            setRankError(false)
        }
        if(rankNum === null && rank !== 24){
            setRankNumError(true)
        }else{
            setRankNumError(false)
        }
        if(!linkError && !trackerError && !rankError && !rankNumError && submit){
            document.querySelector("#submit-btnn").disabled = true;
            let tempRank = rank+rankNum
            var tempLink = link
            if(link.includes("watch?")){
                tempLink = link.replace("watch?v=","embed/")
            }
            if(tempLink.includes("&")){
                tempLink = tempLink.substring(0,tempLink.indexOf("&"))
            }
            
            let name = tracker.substring(tracker.indexOf("riot/")+5,tracker.indexOf("%23"))
            name = decodeURI(name)
            try {
                // for (let index = 0; index < 50; index++) {
                //     addDoc(clipRef,{"link":tempLink,tracker,"rank":tempRank,name});
                // }
                addDoc(clipRef,{"link":tempLink,tracker,"rank":tempRank,name});
                addDoc(backupRef,{"link":tempLink,tracker,"rank":tempRank,name});
            } catch (error) {
                console.log(error);
            }
            navigator("/submitted")
        }
        setSubmit(true);
    }
    return (
        <div class="submit-divi">
        <div className="submit-con">
            <div className="submit-div">
                <h3 className="submit-heading">Clip Einreichen</h3>
                <div className="input-div">
                    <div className="link-div">
                        <img alt="Link" className="link-img" src={LinkImg}></img>
                        <img  alt="Link" className="line-img2" src={LineImg}></img>
                        <input onChange={(event) => { setNewLink(event.target.value) }} className="link-input" type="text" placeholder="Bsp.: https://youtube..." ></input>
                    </div>
                    {linkError?<label className="error">Kein Youtube Link!</label>:""}
                    <div className="tracker-div">
                        <img alt="User" className="user-img" src={UserImg}></img>
                        <img alt="User" className="line-img1" src={LineImg}></img>
                        <input onChange={(event) => { setNewTracker(event.target.value) }} className="link-input" type="text" placeholder="Bsp.: https://tracker..."></input>
                    </div>
                    {trackerError?<label className="error">Kein tracker.gg/valorant Link!</label>:""}
                    <div className="select-rank">
                        <div className="first-ranks">
                            <img alt="Iron" onClick={()=>{handleRank("iron")}} id="iron" className="select-rank-img" src={iron}></img>
                            <img alt="Bronze" onClick={()=>{handleRank("bronze")}} id="bronze" className="select-rank-img" src={bronze}></img>
                            <img  alt="Silver" onClick={()=>{handleRank("silver")}} id="silver" className="select-rank-img" src={silver}></img>
                            <img alt="Gold" onClick={()=>{handleRank("gold")}} id="gold" className="select-rank-img" src={gold}></img></div>
                        <div className="second-ranks">
                            <img alt="Platinum" onClick={()=>{handleRank("plat")}} id="plat" className="select-rank-img" src={plat}></img>
                            <img  alt="Diamond" onClick={()=>{handleRank("diamond")}} id="diamond" className="select-rank-img" src={diamond}></img>
                            <img alt="Ascendant" onClick={()=>{handleRank("ascendant")}} id="ascendant" className="select-rank-img" src={ascendant}></img>
                            <img alt="Immortal" onClick={()=>{handleRank("immo")}} id="immo" className="select-rank-img" src={immo}></img>
                            <img alt="Radiant" onClick={()=>{handleRank("radiant")}} id="radiant" className="select-rank-img" src={radiant}></img>
                        </div>
                    </div>
                    {rankError?<label className="error">Kein Rang ausgewählt!</label>:""}
                    {rankChoosed?
                    <div className="rank-num-div">
                        <div  onClick={()=>{handleNum("one")}} className="num-div1">
                            <h1 id="one" className="nums">I</h1>
                        </div>
                        <div  onClick={()=>{handleNum("two")}} className="num-div2">
                            <h1 id="two" className="nums">II</h1>
                        </div>
                        <div  onClick={()=>{handleNum("three")}} className="num-div3">
                            <h1 id="three" className="nums">III</h1>
                        </div>
                    </div>
                    :""}   
                    {rankNumError?<label className="error">Keine Rang Division ausgewählt!</label>:""}
                    <div className="requierements-div">
                        <p className="requirements-para">Anforderungen:<br />
                            1. 8-60 Sekunden Länge<br />
                            2. 1080p Mindestqualität<br />
                            3. keine Musik im Hintergrund<br />
                            </p>
                            <p className="thanks-para">Danke!</p>
                    </div>
                </div>
                <button onClick={handleSubmit} id="submit-btnn" className="submit-btn" type="submit">
                    Einreichen
                    {/* <Link to="/submitted" style={{ textDecoration: 'none' }}> */}
                    {/* <div className="submit-btn-div">
                        <img className="submit-img" src={SubmitImg}></img>
                        <img className="submit-line" src={Line2Img}></img>
                        <h5 className="submit-text">Submit</h5>
                    </div> */}
                    {/* </Link> */}
                </button>
            </div>
        </div>
        <div className="logos-div">
            <a href="https://www.twitch.tv/harmii" target="_blank">
                <img alt="Harmii Logo"  className="harmii-logo" src={harmii}></img>
            </a>
            <a href="https://www.twitch.tv/rax1337" target="_blank">
                <img alt="Rax Logo" className="rax-logo" src={rax}></img>
            </a>
        </div>
        </div>


    )
}