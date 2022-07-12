import React from "react";
import { connect } from "react-redux";
import BarChart from "./components/graphs/bar-chart";
import { getWheather } from "./state/action-creators/wheather-actions";

class App extends React.Component<any, any> {
  constructor(props: any) {
    // passing props into super will allow us to access props using ".this"
    super(props);

    // This wil be the initial state of the "current component only"
    this.state = {
      isDataLoading:false
    }

    // We have to bind every click event in order to access it into the component , or call from direct html
    this.handleClick = this.handleClick.bind(this);
  }

  // Click Event name which we have binded in constructor
  handleClick() {
    console.log(this.props.wheather.wheatherData);
  }

  // An react life cycle method , this will be called once at the start of page load
  async componentDidMount() {
    this.setState({
      isDataLoading:true
    })
    await this.props.getWheatherData("/todos");
    this.setState({
      isDataLoading:false
    })
  }

  // An react life cycle method  , this will be called every time we change state ,
  // so that we can handle data changing very well , we can compare "prevProps" and "Props" 
  // in order to check if something is changed or not
  async componentDidUpdate(prevProps:any) { 
  }

  render() {
    // Render() method excecutes before ComponentDidMount and ComponentDidUpdate
    // here we can destruct the properties like , Props and State

    // Handlling data using is loading method will be fine because  , 
    // in react we have multiple cases where will be getting emply data into the same element
    if(!this.state.isDataLoading) {
      console.log(this.props.wheather.wheatherData , "In Component Data")
    }

    // Return method holds the Html content of the component
    // Does not require head or body tag , can start from direct tags
    return (
      <div className="App">
        <div style={{ width: "50%" }}>
          <BarChart></BarChart>
        </div>
      </div>
    );
  }
}

// Here Im Mapping Action into the components props , so that we can call action via props easily
const mapDispatchToProps = (dispatch: any) => {
  return {
    getWheatherData: (url: string) => dispatch(getWheather(url)),
  };
};

// Here Im mapping State Data into the current component props data
const mapStateToProps = (state: any) => {
  return { wheather: state.wheatherData };
};

// Here Redux connect() helps us to connect both the action into the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
