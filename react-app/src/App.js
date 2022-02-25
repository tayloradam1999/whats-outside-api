import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import StylesProvider from '@material-ui/styles/StylesProvider';

class App extends Component {
	cities = []; filters = [];
	// since our API cannot import React, we need to use the window.fetch() function to make a call to our API
	// sadly, i was never able to get [filters] to be an array of strings when passed as req.body,
	// so as of now, only one city and one filter can be selected at a time using 'City' and 'Filter'.
	City = ""; Filter = "";

	callSubmitButton = async () => {
		const response = await fetch(`/cities/:${this.City}/:${this.Filter}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message)
		return body;
  	}

	// if you're looking at this, i'm sorry.
	// using react before actually learning it looks like... this.
	// next trimester is going to be a lot of fun.
	selectButton1 = () => {
		if (document.getElementById("button1").className === "matButton1Selected") {
			document.getElementById("button1").className = "matButton1";
			// remove string
			this.City = ""
			document.getElementById("button1").className = "matButton1Selected";
			this.City = "dallas_tx";
		}
	}
	selectButton2 = () => {
		if (document.getElementById("button2").className === "matButton2Selected") {
			document.getElementById("button2").className = "matButton2";
			this.City = ""
		} else {
			document.getElementById("button2").className = "matButton2Selected";
			this.City = "tulsa_ok";
		}
	}
	selectButton3 = () => {
		if (document.getElementById("button3").className === "matButton3Selected") {
			document.getElementById("button3").className = "matButton3";
			this.City = ""
		} else {
			document.getElementById("button3").className = "matButton3Selected";
			this.City = "valdez_ak";
		}
	}
	selectButton4 = () => {
		if (document.getElementById("button4").className === "matButton4Selected") {
			document.getElementById("button4").className = "matButton4";
			this.City = ""
		} else {
			document.getElementById("button4").className = "matButton4Selected";
			this.City = "palm_springs_ca";
		}
	}
	selectButton5 = () => {
		if (document.getElementById("button5").className === "matButton5Selected") {
			document.getElementById("button5").className = "matButton5";
			this.Filter = "";
		} else {
			document.getElementById("button5").className = "matButton5Selected";
			this.Filter = "nature";
		}
	}
	selectButton6 = () => {
		if (document.getElementById("button6").className === "matButton6Selected") {
			document.getElementById("button6").className = "matButton6";
			this.Filter = "";
		} else {
			document.getElementById("button6").className = "matButton6Selected";
			this.Filter = "parks";
		}
	}
	selectButton7 = () => {
		if (document.getElementById("button7").className === "matButton7Selected") {
			document.getElementById("button7").className = "matButton7";
			this.Filter = "";
		} else {
			document.getElementById("button7").className = "matButton7Selected";
			this.Filter = "museums";
		}
	}
	selectButton8 = () => {
		if (document.getElementById("button8").className === "matButton8Selected") {
			document.getElementById("button8").className = "matButton8";
			this.Filter = "";
		} else {
			document.getElementById("button8").className = "matButton8Selected";
			this.Filter = "landmarks";
		}
	}
	selectButton9 = () => {
		if (document.getElementById("button9").className === "matButton9Selected") {
			document.getElementById("button9").className = "matButton9";
			this.Filter = "";
		} else {
			document.getElementById("button9").className = "matButton9Selected";
			this.Filter = "transportation";
		}
	}

	render() {
		return (
			<StylesProvider injectFirst>
				<div className="App">
					<header className="App-header">
						<h1 className="text1">Welcome To...</h1>
						<div className="Button">
							<Button variant="text" className="getStarted" onClick={() => {
								window.scrollBy(0, 1035);
							}}>
								Get Started</Button>
						</div>
						<p className="text3"><LinkedInIcon className="linkedInIcon" />Made By: Adam Taylor</p>
						<h1 className="text2">What's Outside?</h1>
					</header>
					<header className="App-body">
						<div class="extend1"><h1 className="bodytext1">Choose From the Following Cities</h1></div>
						<div class="buttonRow1">
							<div class="button1">
								{/* again, i'm sorry.
								i know the button rows should be components.*/}
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
						<div class="extend2"><h1 className="bodytext2">Select Your Filters</h1></div>
						<div class="buttonRow2">
							<div class="button5">
								<Button variant="text" className="matButton5" id="button5" onClick={this.selectButton5}>NATURE</Button>
							</div>
							<div class="button6">
								<Button variant="text" className="matButton6" id="button6" onClick={this.selectButton6}>PARKS</Button>
							</div>
							<div class="button7">
								<Button variant="text" className="matButton7" id="button7" onClick={this.selectButton7}>MUSEUMS</Button>
							</div>
							<div class="button8">
								<Button variant="text" className="matButton8" id="button8" onClick={this.selectButton8}>LANDMARKS</Button>
							</div>
							<div class="button9">
								<Button variant="text" className="matButton9" id="button9" onClick={this.selectButton9}>TRANSPORTATION</Button>
							</div>
						</div>
						<div class="extend3">
							<h1 class="bodytext3">Send Your Queries!</h1>
						</div>
						<div class="submitRow">
							<p>Results Per Page?</p>
							<Button variant="text" className="matButtonSubmit" id="SubmitButton" onClick={this.callSubmitButton}>Submit</Button>
						</div>
					</header>
				</div >
			</StylesProvider>
		);
	}
}

export default App;