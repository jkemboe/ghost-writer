import React from 'react';
import './App.css';

class Main extends React.Component {
  constructor(props){
    super()
    this.state = {
      data:[],
      select: ['Black','Red','White','Blue'],
      color: 'ghost-message-black',
      divBox: new Array(21).fill('div-box'),
      colorClass: ['red-box','blue-box','yellow-box','white-box','green-box']
    }
  }

 updateMessage = (e) => {
    let inputText = e.key
    this.setState(state => ({data: state.data.concat(inputText)}))
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

  switchColors = (e) => {
        this.setState(state => ({colorClass: state.colorClass.reverse()}))
  }
  

  render(){
    return (
      <div>
        <MainHeader divBox={this.state.divBox} classColor={this.state.colorClass}/>
        <GhostMessage 
        updateMessage={this.updateMessage} 
        select={this.state.select} 
        changeBgColor={this.changeBgColor} 
        classColor={this.state.color} 
        switchColors={this.switchColors}/>
        <DisplayGhostMessage displayMsg={this.state} classColor={this.state.color} />
        <FlipCard/>
      </div>
    )
  }
}

const MainHeader = ({divBox, classColor}) => {
  return (
    <div className="App"> 
    <div className="container">
      {divBox.map((val,key) => {
        if(key % 6 === 0) {
          return <div key={key} className={classColor[0]}>{key}</div>
        } else if(key % 5 === 0){
          return <div key={key} className={classColor[1]}>{key}</div>
        } else if(key % 4 === 1){
          return <div key={key} className={classColor[2]}>{key}</div>
        } else if(key % 2 === 0) {
          return <div key={key} className={classColor[3]}>{key}</div>
        } else {
          return <div key={key} className={classColor[4]}>{key}</div>
        }
      })}
    </div>
          {/* <header className="App-header">
          <h1>Ghost Writer</h1>
      </header> */}
    </div>
  );
}

const GhostMessage = ({updateMessage,select,changeBgColor, classColor, switchColors}) => {
  return (
    <div className={classColor}>
        <h2>Write Ghost Message:</h2>
        <div>
          <input onKeyPress={updateMessage} onInput={switchColors}></input>
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

const FlipCard = () => {
    return (
  <div className="card">
    <h1>ADDITIONS</h1>
  </div>
  )
}

export default Main;
