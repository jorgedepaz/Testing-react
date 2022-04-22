import React from "react";
import "./styles/styles.css";

class welcome extends React.Component{
    constructor(){
        super();
        this.state = {
            username: ''
        };
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        console.log('Form was submitted');
    };
    handleClick = (e) =>{
        console.log('Button was click');
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}> 
            <div className='container'>
                <div className='content'>
                    <div id="welcome"> <h1>Bienvenido</h1> </div>
                    <div> <h3>Ingrese su nombre</h3> </div>
                    <input onKeyPress={this.inputKeyPress} onChange={this.updateUsername} value={this.state.username}/>
                    <button onClick={this.handleClick} className='btn btn-primary'>Save username</button>
                </div>
            </div>
        </form>
        )

        
    }
    inputKeyPress =(event)=>{
        if(event.key === "Enter"){
            const username = parseInt(this.state.username)
            console.log("Enter");
        }
    }
    updateUsername = (event)=>{
        this.setState({
            username : event.target.value
        })
    }
}

export default welcome;