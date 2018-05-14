
import React,{Component} from "react"

import ReactDom from "react-dom"

import { observer } from "mobx-react"

import TimeView from "./components/TimerView"

import AppState from "./store/index"



ReactDom.render(<TimeView appState={new AppState()}/>,document.getElementById("root"))

