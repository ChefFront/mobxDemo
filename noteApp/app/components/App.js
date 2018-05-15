
import React,{Component} from "react"

import Notes from "./Notes"

import NoteStore from "../store/NoteStore"

export default class App extends Component{
    constructor(props){
        super(props);
        const store = NoteStore;
        this.editNote = store.editNote.bind(store);
        this.deleteNote = store.deleteNote.bind(store);
        this.addNote = store.addNote.bind(store,{task:"new task"})
    }

    render(){
        return(
            <div>
                <button onClick = { this.addNote }>+</button>
                <Notes notes = {NoteStore.notes}
                onEdit = {this.editNote} onDelete = { this.deleteNote }/>
            </div>
        )
    }
}