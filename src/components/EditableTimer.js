import React, { Component } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

export default class EditableTimer extends Component {
    state = {
        editForm : false
    }
    render() {
        if(this.state.editForm){
            return (
                <TimerForm 
                    id = {this.props.id}
                    title={this.props.title}
                    description={this.props.description}
                />
            )
        } else {
            return (
                <Timer
                    id = {this.props.id}
                    title={this.props.title}
                    description={this.props.description}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.passed}
                />
            )
        }
    }
}
