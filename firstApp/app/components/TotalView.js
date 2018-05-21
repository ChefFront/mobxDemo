
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
        this.onChangeMount = this.onChangeMount.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmmit = this.onSubmmit.bind(this);
    }
    onChangePrice(e){
        const { changePrice } = this.props.appState;
        changePrice(e.target.value);
    }
    onChangeMount(e){
        const { changeMount } = this.props.appState;
        changeMount(e.target.value);
    }

    onSubmmit(){
        // console.log("&&&&&&&&&&&&",this.props.appState.total)
        // this.props.appState.total = 4;
        // console.log("^^^^^^^^^^^^^^",this.props.appState.price)
    }




    render(){
        const  {appState} = this.props;
        const {price,mount,total} = appState;

        return(
            <div>
                <input type = "text" onChange={this.onChangePrice} value={price}/>
                <input type = "text" onChange={this.onChangeMount} value={mount}/>
                <button onClick = {this.onSubmmit}>total{total}</button>
            </div>
        )
    }   
}

export default TotalView