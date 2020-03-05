import React, {Component} from 'react';

let maxCharacterAmount = 100


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'person1',
      message: '',
      tweets: []
    };
  }

handleSwitchUser = event => {
  this.setState({ username: event.target.value })
};
handleMessageChange = event => {
  this.setState({ message: event.target.value });
};

sendTweet = event => {
  event.preventDefault()
  if (this.state.message.length <= maxCharacterAmount) {
    let newTweet = {
      message: this.state.message,
      username: this.state.username,
      timestamp: new Date()
    }
    this.setState({
      tweets: this.state.tweets.concat([newTweet]),
      message: ''
    })
  }
}

render(){
  const message = this.state.message,
    currentCharacterCount = message.length,
    overCharacterLimit = maxCharacterAmount - currentCharacterCount,
    isOverLimit = currentCharacterCount > maxCharacterAmount;

  return (
    <div className="App">

        <h1> Tweeter</h1>

        <label for ="entryform"> Entry Form </label>
        <form name ="entryform" id ="entry-form">
        <select value={this.state.username} onChange={this.handleSwitchUser}>
          <option value ="person1">Person 1</option>
          <option value ="person2">Person 2</option>
          <option value ="person3">Person 3</option>
          <option value ="person4">Person 4</option>
          <option value ="person5">Person 5</option>
        </select>
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
      <input type="submit" value="Submit" onClick={this.sendTweet} />
      </form>
      {this.state.tweets.map(tweet =>
        <div key={tweet.timestamp.toString()}>
          <div><strong>{tweet.username}</strong> - {tweet.timestamp.toString()}</div>
          <div>{tweet.message}</div>
        </div>
      )}
      {this.state.tweets.length === 0 ? "No posts yet" : ""}
    </div>
  );
  }
}

export default App;
