
import {observable,action,computed} from "mobx"

var appstate = observable({
    timer:0
})

export default class AppState{
    @observable timer = 0;
    constructor(){
        setInterval(()=>{
            this.timer += 1;
        },1000)
    }

    @action.bound
    reset(){
        this.timer = 0;
    }
    @computed get total() {
        
        return  this.timer + "cs";
    }
}