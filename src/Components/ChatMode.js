import React, {useEffect, useState} from "react";
import '../Css/Play.css'
import ascendant from '../Images/ascendantiii.png'
import bronze from '../Images/bronzeiii.png'
import silver from '../Images/silveriii.png'
import diamond from '../Images/diamondiii.png'
import gold from '../Images/goldiii.png'
import immo from '../Images/immortaliii.png'
import iron from '../Images/ironiii.png'
import plat from '../Images/platinumiii.png'
import radiant from '../Images/radiantiii.svg'
import smile1 from '../Images/smile1.svg'
import smile2 from '../Images/smile2.svg'
import iron1 from '../Images/Iron_1_Rank.png'
import iron2 from '../Images/Iron_2_Rank.png'
import iron3 from '../Images/Iron_3_Rank.png'
import bronze1 from '../Images/Bronze_1_Rank.png'
import bronze2 from '../Images/Bronze_2_Rank.png'
import bronze3 from '../Images/Bronze_3_Rank.png'
import silver1 from '../Images/Silver_1_Rank.png'
import silver2 from '../Images/Silver_2_Rank.png'
import silver3 from '../Images/Silver_3_Rank.png'
import gold1 from '../Images/Gold_1_Rank.png'
import gold2 from '../Images/Gold_2_Rank.png'
import gold3 from '../Images/Gold_3_Rank.png'
import plat1 from '../Images/Platinum_1_Rank.png'
import plat2 from '../Images/Platinum_2_Rank.png'
import plat3 from '../Images/Platinum_3_Rank.png'
import dia1 from '../Images/Diamond_1_Rank.png'
import dia2 from '../Images/Diamond_2_Rank.png'
import dia3 from '../Images/Diamond_3_Rank.png'
import asc1 from '../Images/Ascendant_1_Rank.png'
import asc2 from '../Images/Ascendant_2_Rank.png'
import asc3 from '../Images/Ascendant_3_Rank.png'
import immo1 from '../Images/Immortal_1_Rank.png'
import immo2 from '../Images/Immortal_2_Rank.png'
import immo3 from '../Images/Immortal_3_Rank.png'
import radiantPng from '../Images/Radiant_Rank.png'
import back from '../Images/back.svg'

import smile3 from '../Images/smile3.svg'
import app from "../Firebase";

const { collection,getFirestore,getDocs,deleteDoc, doc } = require('@firebase/firestore');


const clipsUsed = []
const clipsId = []
const db = getFirestore(app);
const clipRef = collection(db,"backup");
var guessedRank = 0
var division = 0
export default function ChatMode(){
    var rounds = 20
    if(localStorage.getItem("settings")){
        rounds = localStorage.getItem("settings")
    }
    var [round,setRound] = useState(1);
    var [score,setScore] = useState(0);
    const [link,setLink] = useState();
    const [tracker,setTracker] = useState();
    const [rank,setRank] = useState();
    const [name,setName] = useState();
    const [popup, setPopup] = useState(false);
    const [pointsAdd,setPointsAdd] = useState();
    const [guessedImg,setGuessedImg] = useState();
    const [smile,setSmile] = useState();
    const [finished,setFinished] = useState(false);
    const [notEnough, setNotEnough] = useState(false);
    const [rankGuessVal, setRankGuessVal] = useState(true);
    // const [guessedRank, setGuessedRank] = useState(0);
    useEffect( async ()=>{
            const loadData =async() =>{
            try {
                const clipArray = [];
                const clips = await getDocs(clipRef);
                clips.forEach(clip =>{
                clipArray.push(clip);
                });
                for (let index = 0; index < rounds; index++) {
                clipsUsed.push(clipArray[index].data())
                clipsId.push(clipArray[index].id)
                }

        } catch (error) {
            console.log(error);
        }
        }
        loadData();
        await delay(500)
        if(clipsUsed.length <rounds){
            setNotEnough(true)
        }else{
            let temp = clipsUsed.pop()
            await delay(100)
            setLink(temp.link)
            setTracker(temp.tracker)
            setName(temp.name)
            setRank(temp.rank)
            await deleteDoc(doc(db,"clips",clipsId.pop()));
        }
        
    },[])

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const togglePopup=async () =>{
        setPopup(false)
        if(popup===true){
            let temp = clipsUsed.pop()
            await delay(100)
            setLink(temp.link)
            setTracker(temp.tracker)
            setName(temp.name)
            setRank(temp.rank)
            await deleteDoc(doc(db,"clips",clipsId.pop()));

            setRound(prevRound => round+=1)
        }

    }
    

    const guessedClicked = (guess,e) =>{
        e.preventDefault();

        switch (guess) {
            case 0:
                // setGuessedRank(0)
                guessedRank = 0
                setRankGuessVal(false)
                break;
            case 3:
                // setGuessedRank(3)
                guessedRank = 3
                setRankGuessVal(false)
                break;
            case 6:
                // setGuessedRank(6)
                guessedRank = 6
                setRankGuessVal(false)
                break;
            case 9:
                // setGuessedRank(9)
                guessedRank = 9
                setRankGuessVal(false)
                break;
            case 12:
                // setGuessedRank(12)
                guessedRank = 12
                setRankGuessVal(false)
                break;
            case 15:
                // setGuessedRank(15)
                guessedRank = 15
                setRankGuessVal(false)
                break;
            case 18:
                // setGuessedRank(18)
                guessedRank = 18
                setRankGuessVal(false)
                break;
            case 21:
                // setGuessedRank(21)
                guessedRank = 21
                setRankGuessVal(false)
                break;
            case 24:
                // setGuessedRank(24)
                guessedRank = 24

                // guessedRank = 24
                handleRanks()
                break;
            default:
                break;

        } 
    }
    const handleNewRank = (e) =>{
            e.preventDefault();
            guessedRank = 0
            // setGuessedRank(0)
            setRankGuessVal(true)

    }
    function handleNum(num){
            switch (num) {
                case "one":
                    // setGuessedRank(guessedRank+0)
                    division = 0
                    break;
                case "two":
                    // setGuessedRank(0)
                    division = 1

                    break;
                case "three":
                    // setGuessedRank(guessedRank+2)
                    division = 2
                    break;
                default:
                    break;
            }
            handleRanks()

    }
   const handleRanks = () =>{
        let tempGuessedRank = guessedRank+division
        switch (rank) {
            case 0:
                setGuessedImg(iron1)
                break;
            case 1:
                setGuessedImg(iron2)
                break;
            case 2:
                setGuessedImg(iron3)
                break;
            case 3:
                setGuessedImg(bronze1)
                break;
            case 4:
                setGuessedImg(bronze2)
                break;
            case 5:
                setGuessedImg(bronze3)
                break;
            case 6:
                setGuessedImg(silver1)
                break;
            case 7:
                setGuessedImg(silver2)
                break;
            case 8:
                setGuessedImg(silver3)
                break;
            case 9:
                setGuessedImg(gold1)
                break;
            case 10:
                setGuessedImg(gold2)
                break;
            case 11:
                setGuessedImg(gold3)
                break;
            case 12:
                setGuessedImg(plat1)
                break;
            case 13:
                setGuessedImg(plat2)
                break;
            case 14:
                setGuessedImg(plat3)
                break;
            case 15:
                setGuessedImg(dia1)
                break;
            case 16:
                setGuessedImg(dia2)
                break;
            
            case 17:
                setGuessedImg(dia3)
                break;
            case 18:
                setGuessedImg(asc1)
                break;
            case 19:
                setGuessedImg(asc2)
                break;
            case 20:
                setGuessedImg(asc3)
                break;
            case 21:
                setGuessedImg(immo1)
                break;
            case 22:
                setGuessedImg(immo2)
                break;
            case 23:
                setGuessedImg(immo3)
                break;
            case 24:
                setGuessedImg(radiantPng)
                break;
            default:
                break;
        }
        if(tempGuessedRank === rank){
            setPointsAdd("+3 Punkte")
            setScore(preScore => score+=3)
        }else if(tempGuessedRank > rank-2 && tempGuessedRank <rank+2){
            setPointsAdd("+2 Punkt")
            setScore(preScore => score+=2)
        }else if(tempGuessedRank > rank-3 && tempGuessedRank <rank+3){
            setPointsAdd("+1 Punkt")
            setScore(preScore => score+=1)
        }
        else{
            setPointsAdd("+0 Punkte")
        }
        if(round==rounds){
            if(score>60*(rounds*2)/100){
                setSmile(smile1)
            }else if(score>30*(rounds*2)/100){
                setSmile(smile2)
            }else{
                setSmile(smile3)
            }
            setFinished(true);
        }
        setRankGuessVal(true);
        setPopup(true);
   }

    return(
        <div className="play-container">
            <div className="normal-container">
            {/* <button className="report-btn"> Report</button> */}
            <div className="play-div">
                <div className="count-round-div">
                    <h3 className="score">PUNKTE: {score}</h3>
                    <h3 className="round">{round}/{rounds}</h3>
                </div>
                <div className="player-div">
                    <iframe title="Clip" className="vid" src={link}  allow="fullscreen"></iframe>
                </div>
                
                
                <div id="test-hide" className="ranks-div">
                    {rankGuessVal?<div className="rank-guess-val">
                        <img alt="Iron" onClick={(e)=>{ if(!popup){guessedClicked(0,e)}}}  id="rankImgA" className="iron" src={iron}></img>
                        <img alt="Bronze" onClick={(e)=>{ if(!popup){guessedClicked(3,e)}}} id="rankImgA" className="bronze" src={bronze}></img>
                        <img alt="Silver" onClick={(e)=>{ if(!popup){guessedClicked(6,e)}}} id="rankImgA" className="silver" src={silver}></img>
                        <img alt="Gold" onClick={(e)=>{ if(!popup){guessedClicked(9,e)}}} id="rankImgA" className="gold" src={gold}></img>
                        <img alt="Platinum" onClick={(e)=>{ if(!popup){guessedClicked(12,e)}}} id="rankImgA" className="plat" src={plat}></img>
                        <img alt="Diamond" onClick={(e)=>{ if(!popup){guessedClicked(15,e)}}} id="rankImgA" className="dia" src={diamond}></img>
                        <img alt="Ascendant" onClick={(e)=>{ if(!popup){guessedClicked(18,e)}}} id="rankImgA" className="ascendant" src={ascendant}></img>
                        <img alt="Immortal" onClick={(e)=>{ if(!popup){guessedClicked(21,e)}}} id="rankImgA" className="immo" src={immo}></img>
                        <img alt="Radiant" onClick={(e)=>{ if(!popup){guessedClicked(24,e)}}} id="rankImgA"  src={radiant}></img>
                        </div>
                    :""}
                    {!rankGuessVal?
                        <div className="guess-rank-num-div">
                            <div  onClick={()=>{handleNum("one")}} className="rank-num-div1">
                                <h1 id="one" className="rank-nums">I</h1>
                            </div>
                            <div  onClick={()=>{handleNum("two")}} className="rank-num-div2">
                                <h1 id="two" className="rank-nums">II</h1>
                            </div>
                            <div  onClick={()=>{handleNum("three")}} className="rank-num-div3">
                                <h1 id="three" className="rank-nums">III</h1>
                            </div>
                            <img onClick={ (e)=>handleNewRank(e)} className="img-rank-back" src={back}></img>
                        </div>
                    :""}
                    </div>
                
                </div> 
            </div>
            
            {popup &&(
                <div className='guessed-div'>
                <div className='rank-name-div'>
                    <img alt="Guessed Rank" className="popup-img" src={guessedImg}></img>
                    <h3 className="name">{name}</h3>
                </div>
                <h2 className="points">{pointsAdd}</h2>
                <div className='button-diva'>
                    <button className='tracker-btn'>
                        <a className="link-a" href={tracker} target="_blank">Tracker</a>
                    </button>
                    <button onClick={togglePopup} id="next-btn" className='next-btn' >Weiter</button>
                </div>
            </div>
            )}
            {finished &&(
                <div className="finished-div">
                <img alt="Smiley" className="smiley" src={smile}></img>
                <h3 className="final-score">{score} Punkte erreicht</h3>
                <a className="finish-close" onClick={() => {window.location.href="/"}}>
                            Zurück
                        </a>
            </div>
            )}
            {notEnough &&(
                <div className="not-en">
                    <img alt="Smiley" className="not-smile" src={smile3}></img>
                    <h3 className="not-en-txt">Nicht genug Clips:(</h3>
                    <h3 className="not-en-txt2">{clipsUsed.length} Clips übrig!</h3>
                    <a className="finish-close" onClick={() => {window.location.href="/"}}>
                            Zurück
                        </a>
                </div>
                
            )}
        </div>
        
    )
}