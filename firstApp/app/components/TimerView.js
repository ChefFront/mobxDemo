import React,{ Component } from "react"
import { observer,inject } from "mobx-react"

@inject("appState")
@observer
class TimerView extends Component{
    render(){
        const  {appState} = this.props;
        return(
            <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
        )    
    }
}

export default TimerView