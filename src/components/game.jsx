import React from "react";
import "./styles/styles.css";

class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            num1: 1,
            num2: 1,
            response: "",
            score: 1,
            incorrect: false
        };
    }
    render(){
        if (this.state.score == 3) {
            return this.renderWinnerScreen();
        }else
            return this.renderProblem();
    }
    renderWinnerScreen(){
        return <div id='Winner'>Has ganado!</div>
    }
    renderProblem(){
        return (
            <div class='container'>
                <div class='content'>
                    <div className = {this.state.incorrect ? "incorrect":""} id="problem">{this.state.num1}+{this.state.num2}</div>
                    <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
                    <div><h2>Score:{this.state.score}</h2></div>
                    <div><h1>Jugador: </h1></div>
                </div>
            </div>
        )
    }
    inputKeyPress =(event)=>{
        if(event.key == "Enter"){
            const answer = parseInt(this.state.response)

            if (answer === (this.state.num1 + this.state.num2)) {
                this.setState(state=>({
                    score: state.score+1,
                    response: "",
                    num1: Math.ceil(Math.random()*10),
                    num2: Math.ceil(Math.random()*10),
                    incorrect: false
                }))
               
            }else{
                this.setState(state=>({
                    score: state.score-1,
                    response: "",
                    incorrect: true
                }))
            }
            
        }
    }
    updateResponse = (event)=>{
        this.setState({
            response : event.target.value
        })
        console.log(this.state.response);
    }
}
export default Game;