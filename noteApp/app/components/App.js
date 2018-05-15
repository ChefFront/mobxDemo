
import React,{Component} from "react"

import Notes from "./Notes"

export default class App extends Component{
    render(){
        return(
            <div>
                <button>+</button>
                <Notes />
            </div>
        )
    }
}