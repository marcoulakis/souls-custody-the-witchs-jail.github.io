import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/sd/normal/poppy.png";


export default class Choices_dor extends React.Component{
    render(){
        return(
            <div id="all_game_choice" className="all_game">3
                <div className="soul-poppy-1-container">
                    <img className="soul-poppy-1" src={poppy} />
                </div>
            </div>        
        );
    }
}