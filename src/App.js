// import React, { Component } from 'react';
// import './App.css';
// import Header from './Components/Header';
// import Main from './Components/Main';
// import data from './data';

// class App extends Component {
//   constructor(props) {
//     super(props);

    
//     this.state = {
//       people: data,
//       i: 0
//     }
//   }

//   handleClick = (e) => {
//     if (e.target.name === 'next') {
//       this.setState({
//         i: this.state.i + 1
//       })
//     } 
//     else {
//       this.setState({
//         i: this.state.i - 1
//       })
//     }
//   }

//   render() {
//     return (
//       <div className="App" >
//         <Header/>

//         {<Main person={this.state.people[this.state.i]} index={this.state.index}/>}

//         <button name="previous" onClick={this.handleClick}>{`< Previous`}</button>

//         <button>Edit</button>
//         <button>Delete</button>
//         <button>New</button>

//         <button name="next" onClick={this.handleClick}>{`Next >`}</button>

//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react';
import "./App.css";
import data from './data'
import Header from './Components/Header';
import Main from './Components/Main';


class App extends Component{
  constructor(){
    super();

    this.state={
      data: data,
      index: 0
    }
  }

  handleNext = () => {
    if (this.state.index < this.state.data.length -1){
      this.setState({index:this.state.index + 1})
    }
  }

  handlePrevious = () => {
    if (this.state.index > 0){
      this.setState({index:this.state.index - 1})
    }
  }

  render(){
    return(
      <div className='App'>
       <Header/>
       <Main
        data={this.state.data}
        index={this.state.index}
        handleNext={this.handleNext}
        handlePrevious={this.handlePrevious}
        />
      </div>
    )
  }
}

export default App;