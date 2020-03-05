import React from "react";
import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //변경 가능성 있는것
      date: new Date(),
      data: "",
      isToggleOn: true
    };
  }
  //api 적용
  callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json.title
        });
      });
  };
  tick = () => {
    //새롭게 데이터 변경하려면 setState() 사용
    this.setState({
      date: new Date()
    });
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    //api 호출
    this.callApi();
  }
  //binding 처리
  handleClick = () => {
    console.log("이벤트 처리");
    this.setState({
      //true 값이였다면 false로 바꺼줌
      isToggleOn: !this.state.isToggleOn
    });
  };
  render() {
    return (
      <div>
        <p>현재 시각은 {this.state.date.toLocaleTimeString()}</p>
        <p>{this.state.data ? this.state.data : "Loading..."}</p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello Andrew</h1>
      <Clock />
    </div>
  );
}
