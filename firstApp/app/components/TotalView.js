
import React,{ Component } from "react"
import { observer } from "mobx-react"

@observer
class TotalView extends Component{
    constructor(props){
        super(props);
        this.state = {
            price:0,
            mount:0
        }
        // this.onChangeMount = this.onChangeMount.bind(this);
        // this.onChangePrice = this.onChangePrice.bind(this);
        // this.onSubmmit = this.onSubmmit.bind(this);
    }
    // onChangePrice(e){
    //     this.setState({
    //         mount:e.target.value
    //     })
    // }
    // onChangeMount(e){
    //     this.setState({
    //         mount:e.target.value
    //     })
    // }

    onSubmmit(){

    }




    render(){
        const  {appState} = this.props;
        const {price,mount} = appState;

        return(
            <div>
                <input type = "text" onChange={appState.onChangePrice} value={price}/>
                <input type = "text" onChange={appState.onChangeMount} value={mount}/>
                <button onClick = {this.onSubmmit}/>
            </div>
        )
    }   
}