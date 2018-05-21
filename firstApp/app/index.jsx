
import React,{Component} from "react"

import ReactDom from "react-dom"

import { observer } from "mobx-react"

import TimeView from "./components/TimerView"

import TotalView from "./components/TotalView"

import AppState from "./store/index"


const store  = new AppState()

class App extends Component{
    render(){
        return(
        <div>
            <TimeView appState={store}/>
            <TotalView appState={store}/>
        </div>
        )
    }
}


ReactDom.render(<App/>,document.getElementById("root"))

