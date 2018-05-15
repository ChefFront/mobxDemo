import React,{ Component } from "react"

import { Observer } from "mobx-react"

import Note from "./Note"

export default class Notes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { notes} = this.props;
        return(
            <ul>
                {notes.map((item)=><Note/>)}
            </ul>
        )
    }
}