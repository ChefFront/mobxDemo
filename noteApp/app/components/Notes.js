import React,{ Component } from "react"

import { observer } from "mobx-react"

import Note from "./Note"

@observer
export default class Notes extends Component{
    constructor(props){
        super(props);
        this.renderNote = this.renderNote.bind(this);
    }
    
    render(){
        const { notes, onEdit, onDelete} = this.props;
        return(
            <ul className='notes'>
                {notes.map(this.renderNote)}
            </ul>
        )
    }

    renderNote(note){
        return(
            <li className = "note" key = {`note${note.id}`}>
                <Note
                 task={note.task}
                 onEdit={this.props.onEdit.bind(null, note)}
                 onDelete={this.props.onDelete.bind(null, note)}
                />
            </li>
        )

    }
}