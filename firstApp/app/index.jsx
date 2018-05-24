
import React,{Component} from "react"

import ReactDom from "react-dom"

import { observer,inject,Provider } from "mobx-react"

import { autorun } from "mobx"

import TimeView from "./components/TimerView"

import TotalView from "./components/TotalView"

import AppState from "./store/index"


const store  = new AppState();


class App extends Component{
    render(){
        return(
        <Provider appState = {store}>
            <div>
                <TimeView />
                <TotalView />
            </div>
        </Provider>
        )
    }
}


ReactDom.render(<App/>,document.getElementById("root"))

