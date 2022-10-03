import React from "react";
import { Link} from "react-router-dom";

import playImg from'../Images/fa-solid_play.svg'
import submitImg from'../Images/mingcute_upload-2-fill.svg'
import settingsImg from'../Images/mingcute_settings-3-fill.svg'
import harmii from "../Images/Dom-09697-modified.png"
import rax from "../Images/d0149438-17c1-427b-951a-6b083022e2cd-profile_image-300x300 (3)-modified.png"

export default function Home(){
     
    return(
        <div>
            <div className="bg">
            <h1 className="heading">Guess The Rank</h1>
            {/* <img className="home-heading-pattern" src={pattern1}></img> */}
            <main>
                <div className="invisible-div">

                </div>
                <div className="container-buttons">
                    
                    <button className="button-play" >
                        <Link  className="links" to="/play" style={{ textDecoration: 'none' }}>
                        <div className="button-div">
                            <img alt="Play Image" className="playImg" src={playImg}></img>
                            <h5 className="btn-txt">Spielen</h5>
                        </div>
                       </Link> 
                    </button>
                    <button className="button-submit">
                        <Link  className="links"  to="/submit" style={{ textDecoration: 'none' }}>
                        <div className="button-div">
                            <img alt="Submit Image" className="submit-img" src={submitImg}></img>
                            <h5 className="btn-txt">Einreichen</h5>
                        </div>
                        </Link>
                    </button>
                    <button className="button-settings">
                        <Link className="links" to="/settings" style={{ textDecoration: 'none' }}>
                        <div className="button-div">
                            <img alt="Settings Image" className="submit-img" src={settingsImg}></img>
                            <h5 className="btn-txt">Einstellungen</h5>
                        </div>
                        </Link>
                    </button>
                
                </div>
                <div className="info-div">
                    <h4 className="info-heading">Wie funktioniert es?</h4>
                    <p className="info-para1">Dir werden Clips von Valorant Spielern gezeigt, anhand dessen Du den Rang des Spielers erraten musst.</p>
                    <p  className="info-para2">Wenn Du den Rang richtig erraten hast, erhältst Du DREI Punkte. Liegst Du um einen Rang daneben, erhältst Du nur ZWEI Punkte. Bei zwei Rängen nur EINEN Trostpunkt.</p>
                    <p className="info-para3">Viel Glück!</p>
                </div>
                
            </main>
            {/* <footer>
                <small>impresum</small>
            </footer> */}
            </div>
            <div className="logos-div">
                <a href="https://www.twitch.tv/harmii" target="_blank">
                    <img alt="Harmii Logo" className="harmii-logo" src={harmii}></img>
                </a>
                <a href="https://www.twitch.tv/rax1337" target="_blank">
                    <img alt="Rax Logo" className="rax-logo" src={rax}></img>
                </a>
            </div>
        </div>
    )
}