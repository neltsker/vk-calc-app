import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";
import Page04 from "./components/Page04";
import {compose} from "redux";
import {connect} from "react-redux";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";
import Page08 from "./components/Page08";
import Page09 from "./components/Page09";
import {isKnowSizeAC, setLayoutAC, setSizeAAC, setSizeBAC, setSizeCAC} from "./store/OrderReducer";
import connectVK from '@vkontakte/vk-connect';




class App extends Component {

    componentDidMount() {

        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    if (e.detail.data.sex === 1) {
                        this.setState({male: false});
                    }
                    break;
                default:
                    console.log(e);
            }
        });

        connectVK.send('VKWebAppUpdateConfig', {});


    };

  render() {

    return (
        <div className='container'>
            <Route exact  path='/'> <Page01 changeInput={this.props.setLayout} layout={this.props.state.orderInfo.layout} /> </Route>
            <Route path='/page02'> <Page02 setSize={this.props.setSize} isKnowSizeAC={this.props.isKnowSizeAC} kitchenSizes={this.props.state.orderInfo.kitchenSizes} layout={this.props.state.orderInfo.layout}/> </Route>
            <Route path='/page03'> <Page03/> </Route>
            <Route path='/page04'> <Page04/> </Route>
            <Route path='/page05'> <Page05/> </Route>
            <Route path='/page06'> <Page06/> </Route>
            <Route path='/page07'> <Page07/> </Route>
            <Route path='/page08'> <Page08/> </Route>
            <Route path='/page09'> <Page09/> </Route>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLayout: (layout) => {
      dispatch(setLayoutAC(layout));
    },
      isKnowSizeAC: (e) => {
      dispatch(isKnowSizeAC(e.currentTarget.checked));
    },
      setSize: (e) => {
        if (e.currentTarget.name === "a") dispatch(setSizeAAC(e.currentTarget.value));
        if (e.currentTarget.name === "b") dispatch(setSizeBAC(e.currentTarget.value));
        if (e.currentTarget.name === "c") dispatch(setSizeCAC(e.currentTarget.value));
          dispatch(isKnowSizeAC(false))
    },
  };
};


//
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App);

export default AppContainer;
