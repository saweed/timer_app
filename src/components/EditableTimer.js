import React, { Component } from 'react'
import ToggleableTimerForm from './ToggleableTimerForm'
import TimerForm from './TimerForm'
import Timer from './Timer'

export default class EditableTimer extends Component {
    render() {
        if(this.props.editForm){
            return (
                <TimerForm 
                    title={this.props.title}
                    description={this.props.description}
                />
            )
        } else {
            return (
                <Timer
                    title={this.props.title}
                    description={this.props.description}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.passed}
                />
            )
        }
    }
}
