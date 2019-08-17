import React from 'react';
import './App.css';

class Main extends React.Component {
  constructor(props){
    super()
    this.state = {
      data:[],
      select: ['Black','Red','White','Blue'],
      color: 'ghost-message-black'
    }
  }

 updateMessage = (e) => {
    let inputText = e.key
    this.setState(state => ({
      data: state.data.concat(inputText)
    }))
  }
changeBgColor = (e) => {
  let chosenColor = e.nativeEvent.target.value 
    if(chosenColor === 'Red'){
      this.setState(() => ({color: 'ghost-message-red'}))
    } else if(chosenColor === 'White'){
      this.setState(() => ({color: 'ghost-message-white'}))
    } else if(chosenColor === 'Blue'){
      this.setState(() => ({color: 'ghost-message-blue'}))
    } else {
      this.setState(() => ({color: 'ghost-message-black'}))
    }
}
  render(){
    return (
      <div>
        <MainHeader/>
        <GhostMessage updateMessage={this.updateMessage} select={this.state.select} changeBgColor={this.changeBgColor} classColor={this.state.color}/>
        <DisplayGhostMessage displayMsg={this.state} classColor={this.state.color}/>
      </div>
    )
  }
}

const MainHeader = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Ghost Writer</h1>
      </header>
    </div>
  );
}

const GhostMessage = ({updateMessage,select,changeBgColor, classColor}) => {
  return (
    <div className={classColor}>
        <h2>Write Ghost Message:</h2>
        <div>
          <input onKeyPress={updateMessage}></input>
        </div>
        <div>
        <span>Choose Background-Color</span><br/>
        <select onChange={changeBgColor}>  
        {select.map((val,key) => <option value={val} key={key}>{val}</option>)}
        </select>
        </div>
    </div>
  )
}



const DisplayGhostMessage = ({displayMsg,classColor}) => {
  return (
      <div className={classColor}>
      {displayMsg.data.map((val,key) => {
        if(val === ' ') return <span key={key} className="space-between">{val}</span>
        if(key % 2 === 0) {
          return <span key={key} className="red">{val}</span>
        } else if(key % 3 === 0) {
          return <span key={key} className="blue">{val}</span>
        } else {
          return <span key={key} className="white">{val}</span>
        }
      })}
       </div>
  )
}

export default Main;
