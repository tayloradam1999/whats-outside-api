import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text1">Welcome To...</h1>
        <div class="Button">
          <Button variant="text" className="getStarted">Get Started</Button>
        </div>
        <p class="text3"><LinkedInIcon className="linkedInIcon"/>Made By: Adam Taylor</p>
        <h1 class="text2">What's Outside?</h1>
      </header>

    </div >
  );
}

export default App;
