import React,{ Component } from "react"
import { observer } from "mobx-react"

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