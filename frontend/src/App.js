import axios from "axios";
import React from "react";

class App extends React.Component {
  state = { 
    details: [],
  }

  componentDidMount() {
    let data;
    axios.get('http://5.159.100.113/api/')
      .then(res => {
        data=res.data
        this.setState(
          {details: data}
        )
      })
      .catch(err => {
        console.log(err);
      })
  }
  render () {
    debugger
    return (
      <div>
        <header>
          <h1>Данные из Django</h1>
        </header>
        <br></br>
        {this.state.details.map((output, id)=>{
          return <div key={id}>
            <div>
              <h2>{output.title}</h2>
              <p>{output.channel}</p>
            </div>
          </div>
        })}
      </div>
    )
  }
}

export default App;