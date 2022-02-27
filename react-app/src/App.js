import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import StylesProvider from '@material-ui/styles/StylesProvider';

class App extends Component {
	// Currently, our makeshift frontend query is only for one city and one filter.
	// Frontend's query is based off req.params
	// Work on implementing a frontend query that can be used for multiple cities and filters.
	City = []; Filter = [];

	callSubmitButtonSingle = () => {
		fetch('/react/' + this.City + '/' + this.Filter)
			.then(response => response.text())
			.then(data => {
				document.querySelector('#resultsH1').innerHTML = data;
				document.querySelector('#resultsH2').innerHTML = "";
			})
			.catch(err => console.log(err));
	}

	// never got this to work, but I'm leaving it here for future reference.
	// City and Filter can only have one value at a time.
	callSubmitButtonMultiple = () => {
		// sad message :(
		document.querySelector('#resultsH1').innerHTML = "Sorry, this feature is not yet implemented.";
		document.querySelector('#resultsH2').innerHTML = 'Please only select one city and filter at a time';
	}


	// if you're looking at this, i'm sorry.
	// using react before actually learning it looks like... this.
	// next trimester is going to be a lot of fun.
	selectButton1 = () => {
		if (document.getElementById("button1").className === "matButton1Selected") {
			document.getElementById("button1").className = "matButton1";
			this.City = this.City.filter(city => city !== "dallas_tx");
			console.log(this.City);
		} else { 
			document.getElementById("button1").className = "matButton1Selected";
			this.City.push("dallas_tx");
			console.log(this.City);
		}
	}
	selectButton2 = () => {
		if (document.getElementById("button2").className === "matButton2Selected") {
			document.getElementById("button2").className = "matButton2";
			this.City = this.City.filter(city => city !== "tulsa_ok");
			console.log(this.City);
		} else {
			document.getElementById("button2").className = "matButton2Selected";
			this.City.push("tulsa_ok");
			console.log(this.City);
		}
	}
	selectButton3 = () => {
		if (document.getElementById("button3").className === "matButton3Selected") {
			document.getElementById("button3").className = "matButton3";
			this.City = this.City.filter(city => city !== "valdez_ak");
			console.log(this.City);
		} else {
			document.getElementById("button3").className = "matButton3Selected";
			this.City.push("valdez_ak");
			console.log(this.City);
		}
	}
	selectButton4 = () => {
		if (document.getElementById("button4").className === "matButton4Selected") {
			document.getElementById("button4").className = "matButton4";
			this.City = this.City.filter(city => city !== "palm_springs_ca");
			console.log(this.City);
		} else {
			document.getElementById("button4").className = "matButton4Selected";
			this.City.push("palm_springs_ca");
			console.log(this.City);
		}
	}
	selectButton5 = () => {
		if (document.getElementById("button5").className === "matButton5Selected") {
			document.getElementById("button5").className = "matButton5";
			this.Filter = this.Filter.filter(filter => filter !== "nature");
			console.log(this.Filter);
		} else {
			document.getElementById("button5").className = "matButton5Selected";
			this.Filter.push("nature");
			console.log(this.Filter);
		}
	}
	selectButton6 = () => {
		if (document.getElementById("button6").className === "matButton6Selected") {
			document.getElementById("button6").className = "matButton6";
			this.Filter = this.Filter.filter(filter => filter !== "parks");
			console.log(this.Filter);
		} else {
			document.getElementById("button6").className = "matButton6Selected";
			this.Filter.push("parks");
			console.log(this.Filter);
		}
	}
	selectButton7 = () => {
		if (document.getElementById("button7").className === "matButton7Selected") {
			document.getElementById("button7").className = "matButton7";
			this.Filter = this.Filter.filter(filter => filter !== "museums");
			console.log(this.Filter);
		} else {
			document.getElementById("button7").className = "matButton7Selected";
			this.Filter.push("museums");
			console.log(this.Filter);
		}
	}
	selectButton8 = () => {
		if (document.getElementById("button8").className === "matButton8Selected") {
			document.getElementById("button8").className = "matButton8";
			this.Filter = this.Filter.filter(filter => filter !== "landmarks");
			console.log(this.Filter);
		} else {
			document.getElementById("button8").className = "matButton8Selected";
			this.Filter.push("landmarks");
			console.log(this.Filter);
		}
	}
	selectButton9 = () => {
		if (document.getElementById("button9").className === "matButton9Selected") {
			document.getElementById("button9").className = "matButton9";
			this.Filter = this.Filter.filter(filter => filter !== "transportation");
			console.log(this.Filter);
		} else {
			document.getElementById("button9").className = "matButton9Selected";
			this.Filter.push("transportation");
			console.log(this.Filter);
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
							<Button variant="text" className="matButtonSubmit" id="SubmitButton" onClick={() => {
								// check for all user input possibilities
								if (this.City.length === 1 && this.Filter.length === 1) this.callSubmitButtonSingle();
								if (this.City.length > 1 || this.Filter.length > 1) this.callSubmitButtonMultiple();
								if (this.City.length === 0) alert('Please select a City.');
								if (this.Filter.length === 0) alert('Please select a Filter.');
								if (this.City.length === 0 && this.Filter.length === 0) alert('Please select a City and a Filter');
							}}>Submit</Button>
						</div>
						{/* empty h1 and h2 to populate with dynamnic data, sry webpack*/}
						<div class="resultsRow" id="result"><h1 id="resultsH1"></h1><h2 id="resultsH2"></h2></div>
					</header>
				</div >
			</StylesProvider>
		);
	}
}

export default App;