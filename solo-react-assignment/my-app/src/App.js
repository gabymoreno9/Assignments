import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { message: ''};
  }

handleMessageChange = event => {
  this.setState({ message: event.target.value });
};

render(){
  const message = this.state.message,
    maxCharacterAmount = 100,
    currentCharacterCount = message.length,
    overCharacterLimit = maxCharacterAmount - currentCharacterCount,
    isOverLimit = currentCharacterCount > maxCharacterAmount;

  return (
    <div className="App">

        <h1> Tweeter</h1>

        <label for ="entryform"> Entry Form </label>
        <form name ="entryform" id ="entry-form">
        <select id = "usernames">
          <option value ="person1">Person 1</option>
          <option value ="person2">Person 2</option>
          <option value ="person3">Person 3</option>
          <option value ="person4">Person 4</option>
          <option value ="person5">Person 5</option>

        </select>{''}
        <br/>

        <textarea value={message} onChange={this.handleMessageChange}></textarea>
        <br/>
        <span>
            Current Character Count:{" "}
            <span className={isOverLimit ? "bad" : "good"}>
              {overCharacterLimit}
            </span>
            <br/>
            {isOverLimit
              ? <span className="bad">Over Limit</span>
              : <span className="good">Good</span>}
          </span>
          <br/>
      <input type="submit" value = "Submit"></input>
      </form>
    </div>
  );
  }
}

export default App;
