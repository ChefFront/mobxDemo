
import {observable,action,computed} from "mobx"

var appstate = observable({
    timer:0
})

export default class AppState{
    @observable timer = 0;
    @observable price = 1;
    @observable mount = 0;
    constructor(){
        setInterval(()=>{
            this.timer += 1;
        },1000)
    }

    @action.bound
    reset(){
        this.timer = 0;
    }

    @action.bound
    changePrice(value){
        this.price = value?parseInt(value):"";
    }

    @action.bound
    changeMount(value){
        this.mount = value?parseInt(value):"";
    }
    @computed get total() {
        console.log(this.price,"&&&&",this.mount)
        return  this.price * this.mount;
    }
    set total(total){
        // console.log(total,"*****",this.mount,"%%%%%%%%%%",total/this.mount)
        this.price = (total/this.mount) ? (total / this.mount):"";
    }
    
}