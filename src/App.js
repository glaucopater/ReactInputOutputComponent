import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
 

class App extends Component {
    
  state = {
          username : 'IanMoone'
    }    

    usernameChangeHandler = (event)=> {
          this.setState({ username:  event.target.value }) 
    }
    
    
  render() {
      
    const style={ 
        border: '1px solid #ddd' , 
        boxShadow: '2px 3px 2px #eee',
        textAlign: 'center', 
        padding: '5px'
    }
      
    return (
      <div className="App" style={style}>        
        <UserInput username={this.state.username} changed={this.usernameChangeHandler}/> 
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
     
    );
  }
}

export default App;
