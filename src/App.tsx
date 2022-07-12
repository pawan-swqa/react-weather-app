import React from "react";
import { connect } from "react-redux";
import BarChart from "./components/graphs/bar-chart";
import { getWheather } from "./state/action-creators/wheather-actions";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDataLoading:false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.props.wheather.wheatherData);
  }

  async componentDidMount() {
    this.setState({
      isDataLoading:true
    })
    await this.props.getWheatherData("/todos");
    this.setState({
      isDataLoading:false
    })
  }

  async componentDidUpdate(prevProps:any) {
  }

  render() {
    if(!this.state.isDataLoading) {
      console.log(this.props.wheather.wheatherData , "In Component Data")
    }
    return (
      <div className="App">
        <div style={{ width: "50%" }}>
          <BarChart></BarChart>

          <button onClick={() => {
            this.handleClick()
          }}></button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getWheatherData: (url: string) => dispatch(getWheather(url)),
  };
};

const mapStateToProps = (state: any) => {
  return { wheather: state.wheatherData };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
