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
var guessedRankP1 = 0
var guessedRankP2 = 0
var division1 = 0
var division2 = 0
export default function OnevOneMode(){
    var rounds = 20
    if(localStorage.getItem("settings")){
        rounds = localStorage.getItem("settings")
    }
    var [round,setRound] = useState(1);
    var [scoreP1,setScoreP1] = useState(0);
    var [scoreP2,setScoreP2] = useState(0);
    const [link,setLink] = useState();
    const [tracker,setTracker] = useState();
    const [rank,setRank] = useState();
    const [name,setName] = useState();
    const [popup, setPopup] = useState(false);
    const [pointsAdd1,setPointsAdd1] = useState("2 Points!");
    const [pointsAdd2,setPointsAdd2] = useState("2 Points!");
    const [guessedImg,setGuessedImg] = useState();
    const [smile,setSmile] = useState();
    const [finished,setFinished] = useState(false);
    const [notEnough, setNotEnough] = useState(false);
    const [rankGuessVal, setRankGuessVal] = useState(true);
    const [playerTurn, setPlayerTurn] = useState(false);
    const [player1Img, setPlayer1Img] = useState();
    const [player2Img, setPlayer2Img] = useState();
    const [winner, setWinner] = useState();
    const [p1points,setP1Points] = useState();
    const [p2points,setP2Points] = useState();
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
            // setNotEnough(true)
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
        if(!playerTurn){
            switch (guess) {
                case 0:
                    // setGuessedRank(0)
                    guessedRankP1 = 0
                    setRankGuessVal(false)
                    break;
                case 3:
                    // setGuessedRank(3)
                    guessedRankP1 = 3
                    setRankGuessVal(false)
                    break;
                case 6:
                    // setGuessedRank(6)
                    guessedRankP1 = 6
                    setRankGuessVal(false)
                    break;
                case 9:
                    // setGuessedRank(9)
                    guessedRankP1 = 9
                    setRankGuessVal(false)
                    break;
                case 12:
                    // setGuessedRank(12)
                    guessedRankP1 = 12
                    setRankGuessVal(false)
                    break;
                case 15:
                    // setGuessedRank(15)
                    guessedRankP1 = 15
                    setRankGuessVal(false)
                    break;
                case 18:
                    // setGuessedRank(18)
                    guessedRankP1 = 18
                    setRankGuessVal(false)
                    break;
                case 21:
                    // setGuessedRank(21)
                    guessedRankP1 = 21
                    setRankGuessVal(false)
                    break;
                case 24:
                    // setGuessedRank(24)
                    guessedRankP1 = 24
                    setPlayerTurn(true)
                    setRankGuessVal(true);
                    // guessedRank = 24
                    break;
                default:
                    break;
    
            }
        }else{
            switch (guess) {
                case 0:
                    // setGuessedRank(0)
                    guessedRankP2 = 0
                    setRankGuessVal(false)
                    break;
                case 3:
                    // setGuessedRank(3)
                    guessedRankP2 = 3
                    setRankGuessVal(false)
                    break;
                case 6:
                    // setGuessedRank(6)
                    guessedRankP2 = 6
                    setRankGuessVal(false)
                    break;
                case 9:
                    // setGuessedRank(9)
                    guessedRankP2 = 9
                    setRankGuessVal(false)
                    break;
                case 12:
                    // setGuessedRank(12)
                    guessedRankP2 = 12
                    setRankGuessVal(false)
                    break;
                case 15:
                    // setGuessedRank(15)
                    guessedRankP2 = 15
                    setRankGuessVal(false)
                    break;
                case 18:
                    // setGuessedRank(18)
                    guessedRankP2 = 18
                    setRankGuessVal(false)
                    break;
                case 21:
                    // setGuessedRank(21)
                    guessedRankP2 = 21
                    setRankGuessVal(false)
                    break;
                case 24:
                    // setGuessedRank(24)
                    guessedRankP2 = 24
                    setPlayerTurn(true)
                    setRankGuessVal(true);
                    handleRanks()
                    break;
                default:
                    break;
    
            }
            // handleRanks();
        }
    }
    const handleNewRank = (e) =>{
            e.preventDefault();
            guessedRankP1 = 0
            guessedRankP2 = 0
            // setGuessedRank(0)
            setRankGuessVal(true)

    }
    function handleNum(num){
        if(!playerTurn){
            switch (num) {
                case "one":
                    // setGuessedRank(guessedRank+0)
                    division1 = 0
                    break;
                case "two":
                    // setGuessedRank(0)
                    division1 = 1

                    break;
                case "three":
                    // setGuessedRank(guessedRank+2)
                    division1 = 2
                    break;
                default:
                    break;
                
            }
            setPlayerTurn(true)
            setRankGuessVal(true);
        }
            else{
                switch (num) {
                    case "one":
                        // setGuessedRank(guessedRank+0)
                        division2 = 0
                        break;
                    case "two":
                        // setGuessedRank(0)
                        division2 = 1
    
                        break;
                    case "three":
                        // setGuessedRank(guessedRank+2)
                        division2 = 2
                        break;
                    default:
                        break;
                } 
                handleRanks()
            }
            

    }
    const guessImg = (pguess) =>{
        switch (pguess) {
            case 0:
                setPlayer1Img()
                break;
            default:
                break;
        }
    }
   const handleRanks = () =>{
        let tempGuessedRank1 = guessedRankP1+division1
        let tempGuessedRank2 = guessedRankP2+division2
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
        switch (tempGuessedRank1) {
            case 0:
                setPlayer1Img(iron1)
                break;
            case 1:
                setPlayer1Img(iron2)
                break;
            case 2:
                setPlayer1Img(iron3)
                break;
            case 3:
                setPlayer1Img(bronze1)
                break;
            case 4:
                setPlayer1Img(bronze2)
                break;
            case 5:
                setPlayer1Img(bronze3)
                break;
            case 6:
                setPlayer1Img(silver1)
                break;
            case 7:
                setPlayer1Img(silver2)
                break;
            case 8:
                setPlayer1Img(silver3)
                break;
            case 9:
                setPlayer1Img(gold1)
                break;
            case 10:
                setPlayer1Img(gold2)
                break;
            case 11:
                setPlayer1Img(gold3)
                break;
            case 12:
                setPlayer1Img(plat1)
                break;
            case 13:
                setPlayer1Img(plat2)
                break;
            case 14:
                setPlayer1Img(plat3)
                break;
            case 15:
                setPlayer1Img(dia1)
                break;
            case 16:
                setPlayer1Img(dia2)
                break;
            
            case 17:
                setPlayer1Img(dia3)
                break;
            case 18:
                setPlayer1Img(asc1)
                break;
            case 19:
                setPlayer1Img(asc2)
                break;
            case 20:
                setPlayer1Img(asc3)
                break;
            case 21:
                setPlayer1Img(immo1)
                break;
            case 22:
                setPlayer1Img(immo2)
                break;
            case 23:
                setPlayer1Img(immo3)
                break;
            case 24:
                setPlayer1Img(radiantPng)
                break;
            default:
                break;
        }
        switch (tempGuessedRank2) {
            case 0:
                setPlayer2Img(iron1)
                break;
            case 1:
                setPlayer2Img(iron2)
                break;
            case 2:
                setPlayer2Img(iron3)
                break;
            case 3:
                setPlayer2Img(bronze1)
                break;
            case 4:
                setPlayer2Img(bronze2)
                break;
            case 5:
                setPlayer2Img(bronze3)
                break;
            case 6:
                setPlayer2Img(silver1)
                break;
            case 7:
                setPlayer2Img(silver2)
                break;
            case 8:
                setPlayer2Img(silver3)
                break;
            case 9:
                setPlayer2Img(gold1)
                break;
            case 10:
                setPlayer2Img(gold2)
                break;
            case 11:
                setPlayer2Img(gold3)
                break;
            case 12:
                setPlayer2Img(plat1)
                break;
            case 13:
                setPlayer2Img(plat2)
                break;
            case 14:
                setPlayer2Img(plat3)
                break;
            case 15:
                setPlayer2Img(dia1)
                break;
            case 16:
                setPlayer2Img(dia2)
                break;
            
            case 17:
                setPlayer2Img(dia3)
                break;
            case 18:
                setPlayer2Img(asc1)
                break;
            case 19:
                setPlayer2Img(asc2)
                break;
            case 20:
                setPlayer2Img(asc3)
                break;
            case 21:
                setPlayer2Img(immo1)
                break;
            case 22:
                setPlayer2Img(immo2)
                break;
            case 23:
                setPlayer2Img(immo3)
                break;
            case 24:
                setPlayer2Img(radiantPng)
                break;
            default:
                break;
        }
        if(tempGuessedRank1 === rank){
            setPointsAdd1("+3 Punkte")
            setScoreP1(preScore => scoreP1+=3)
            setP1Points("+3")
        }else if(tempGuessedRank1 > rank-2 && tempGuessedRank1 <rank+2){
            setPointsAdd1("+2 Punkte")
            setScoreP1(preScore => scoreP1+=2)
            setP1Points("+2")

        }else if(tempGuessedRank1 > rank-3 && tempGuessedRank1 <rank+3){
            setPointsAdd1("+1 Punkt")
            setScoreP1(preScore => scoreP1+=1)
            setP1Points("+1")
        }
        else{
            setPointsAdd1("+0 Punkte")
            setP1Points("+0")

        }
        if(tempGuessedRank2 === rank){
            setPointsAdd2("+3 Punkte")
            setP2Points("+3")

            setScoreP2(preScore => scoreP2+=3)
        }else if(tempGuessedRank2 > rank-2 && tempGuessedRank2 <rank+2){
            setPointsAdd2("+2 Punkte")
            setP2Points("+2")

            setScoreP2(preScore => scoreP2+=2)
        }else if(tempGuessedRank2 > rank-3 && tempGuessedRank2 <rank+3){
            setPointsAdd2("+1 Punkt")
            setP2Points("+1")

            setScoreP2(preScore => scoreP2+=1)
        }
        else{
            setPointsAdd2("+0 Punkte")
            setP2Points("+0")

        }
        if(round==rounds){
            if(scoreP1>scoreP2){
                setWinner("Spieler 1 gewinnt!")
            }
            else{
                setWinner("Spieler 2 gewinnt!")
            }
            if(scoreP1>60*(rounds*2)/100){
                setSmile(smile1)
            }else if(scoreP1>30*(rounds*2)/100){
                setSmile(smile2)
            }else{
                setSmile(smile3)
            }
            setFinished(true);
        }
        setPlayerTurn(false)

        setRankGuessVal(true);
        setPopup(true);
   }

    return(
        <div className="play-container">
            <div className="normal-container">
            {/* <button className="report-btn"> Report</button> */}
            <div className="play-div">
                <div className="count-round-div">
                    <h3 className="score">Spieler 1: {scoreP1}</h3>
                    
                    <h3 className="round">{round}/{rounds}</h3>
                    <h3 className="score">Spieler 2: {scoreP2}</h3>
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
                {/* <h2 className="points">{pointsAdd1}</h2> */}
                <div className="player-guess-div">
                    <div className="player1-guess-div">
                        <h3 className="player1-guess">Spieler 1</h3>
                        <img className="player1-guess-img" src={player1Img}></img>
                        <h3 className="points">{p1points}</h3>

                    </div>
                    <div className="player2-guess-div">
                        <h3 className="player2-guess"> Spieler 2</h3>
                        <img className="player2-guess-img" src={player2Img}></img>
                        <h3 className="points">{p2points}</h3>
                    </div>
                </div>
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
                <img alt="Smiley" className="smiley" src={smile1}></img>
                <h3 className="final-score">{winner} Spieler 2 gewinnt!</h3>
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