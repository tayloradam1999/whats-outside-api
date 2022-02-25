import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import StylesProvider from '@material-ui/styles/StylesProvider';

let cities = [];
let filters = [];

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message)
    return body;
  };

  // if you're looking at this, i'm sorry.
  // using react before actually learning it looks like... this.
  selectButton1 = () => {
    if (document.getElementById("button1").className === "matButton1Selected") {
      document.getElementById("button1").className = "matButton1";
      cities = cities.filter(city => city !== "dallas_tx");
    } else {
      document.getElementById("button1").className = "matButton1Selected";
      cities.push("dallas_tx");
    }
  }
  selectButton2 = () => {
    if (document.getElementById("button2").className === "matButton2Selected") {
      document.getElementById("button2").className = "matButton2";
      cities = cities.filter(city => city !== "tulsa_ok");
    } else {
      document.getElementById("button2").className = "matButton2Selected";
      cities.push("tulsa_ok");
    }
  }
  selectButton3 = () => {
    if (document.getElementById("button3").className === "matButton3Selected") {
      document.getElementById("button3").className = "matButton3";
      cities = cities.filter(city => city !== "valdez_ak");
    } else {
      document.getElementById("button3").className = "matButton3Selected";
      cities.push("valdez_ak");
    }
  }
  selectButton4 = () => {
    if (document.getElementById("button4").className === "matButton4Selected") {
      document.getElementById("button4").className = "matButton4";
      cities = cities.filter(city => city !== "palm_springs_ca");
    } else {
      document.getElementById("button4").className = "matButton4Selected";
      cities.push("palm_springs_ca");
    }
  }
  selectButton5 = () => {
    if (document.getElementById("button5").className === "matButton5Selected") {
      document.getElementById("button5").className = "matButton5";
      filters = filters.filter(filter => filter !== "nature");
      console.log(filters);
    } else {
      document.getElementById("button5").className = "matButton5Selected";
      filters.push("nature");
      console.log(filters);
    }
  }
  selectButton6 = () => {
    if (document.getElementById("button6").className === "matButton6Selected") {
      document.getElementById("button6").className = "matButton6";
      filters = filters.filter(filter => filter !== "parks");
      console.log(filters);
    } else {
      document.getElementById("button6").className = "matButton6Selected";
      filters.push("parks");
      console.log(filters);
    }
  }
  selectButton7 = () => {
    if (document.getElementById("button7").className === "matButton7Selected") {
      document.getElementById("button7").className = "matButton7";
      filters = filters.filter(filter => filter !== "museums");
      console.log(filters);
    } else {
      document.getElementById("button7").className = "matButton7Selected";
      filters.push("museums");
      console.log(filters);
    }
  }
  selectButton8 = () => {
    if (document.getElementById("button8").className === "matButton8Selected") {
      document.getElementById("button8").className = "matButton8";
      filters = filters.filter(filter => filter !== "landmarks");
    } else {
      document.getElementById("button8").className = "matButton8Selected";
      filters.push("landmarks");
    }
  }
  selectButton9 = () => {
    if (document.getElementById("button9").className === "matButton9Selected") {
      document.getElementById("button9").className = "matButton9";
      filters = filters.filter(filter => filter !== "transportation");
    } else {
      document.getElementById("button9").className = "matButton9Selected";
      filters.push("transportation");
    }
  }

  render() {
    return (
      <StylesProvider injectFirst>
        <div className="App">
          <header className="App-header">
            <p className="App-intro">{this.state.data}</p>
            <h1 class="text1">Welcome To...</h1>
            <div class="Button" onclick>
              <Button variant="text" className="getStarted" onClick={() => {
                window.scrollBy(0, 1035);
              }}>
                Get Started</Button>
            </div>
            <p class="text3"><LinkedInIcon className="linkedInIcon" />Made By: Adam Taylor</p>
            <h1 class="text2">What's Outside?</h1>
          </header>
          <header className="App-body">
            <div class="extend1"><h1 class="bodytext1">Choose From the Following Cities</h1></div>
            <div class="buttonRow1">
              <div class="button1">
                <Button variant="text" className="matButton1" id="button1" onClick={this.selectButton1}>DALLAS_TX</Button>
              </div>
              <div class="button2">
                <Button variant="text" className="matButton2" id="button2" onClick={this.selectButton2}>TULSA_OK</Button>
              </div>
              <div class="button3">
                <Button variant="text" className="matButton3" id="button3" onClick={this.selectButton3}>VALDEZ_AK</Button>
              </div>
              <div class="button4">
                <Button variant="text" className="matButton4" id="button4" onClick={this.selectButton4}>PALM_SPRINGS_CA</Button>
              </div>
            </div>
            <div class="extend2"><h1 class="bodytext2">Select Your Filters</h1></div>
            <div class="buttonRow2">
              <div class="button5">
                <Button variant="text" className="matButton5" id="button5" onClick={this.selectButton5}>Nature</Button>
              </div>
              <div class="button6">
                <Button variant="text" className="matButton6" id="button6" onClick={this.selectButton6}>Parks</Button>
              </div>
              <div class="button7">
                <Button variant="text" className="matButton7" id="button7" onClick={this.selectButton7}>Museums</Button>
              </div>
              <div class="button8">
                <Button variant="text" className="matButton8" id="button8" onClick={this.selectButton8}>Landmarks</Button>
              </div>
              <div class="button9">
                <Button variant="text" className="matButton9" id="button9" onClick={this.selectButton9}>Transportation</Button>
              </div>
            </div>
            <div class="extend3">
              <h1 class="bodytext3">Send Your Queries!</h1>
            </div>
            <div class="submitRow">
              <p>Results Per Page?</p>
              <Button variant="text" className="matButtonSubmit">Submit</Button>
            </div>
          </header>
        </div >
      </StylesProvider>
    );
  }
}

export default App;