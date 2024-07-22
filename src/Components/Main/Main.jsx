import React from "react";
import './Main.css'
import { assets } from "../../assets/assets/assets";
import { Context } from "../../context/context";
import { useContext } from "react";
const Main =()=>{
    const { onSent,recentPrompt,showResult,loading,resultDate,setInput,input}= useContext(Context)
    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-containor">
                {!showResult?
                <>
                <div className="greet">
                    <p><span>Hello, fareed</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                <div className="card">
                    <p>Brainstorm a list of team bonding activities for our summer work retreat</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Finish my gaming podcast tagline: play, win, and ....</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me plan a game night with 5 friends. I have dice and cards, but no board games. I would be willing to get board games for under $100</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm a tagline for my online store</p>
                    <img src={assets.code_icon} alt="" />
                </div></div></>:
                <div className="result" >
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p></div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>:
                            <p dangerouslySetInnerHTML={{__html:resultDate}}></p>}</div></div>}
                <div className="bottom-containor">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter the promt here"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img  onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
            
                    </div>
                    <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </p>
                </div>
                
            </div>

        </div>
    )
}
export default Main