import React, { Component } from 'react'
import EditableTimer from './EditableTimer'
export default class EditableTimerList extends Component {
    render() {
        return (
            <div id='timers'>
                <EditableTimer 
                    title="First Timer" 
                    description="1st test timer" 
                    elapsed='1236500'
                    passed={null} 
                    editForm = {true} />
                <EditableTimer 
                    title="Second Timer" 
                    description="2nd test timer" 
                    elapsed='9873215'
                    passed={null} 
                    editForm = {false} />
                <EditableTimer 
                    title="Third Timer" 
                    description="3d test timer" 
                    elapsed='7532149'
                    passed={null} 
                    editForm = {true} />
                <EditableTimer 
                    title="Fourth Timer" 
                    description="4th test timer" 
                    elapsed='8526541'
                    passed={null} 
                    editForm = {false} />
            </div>
        )
    }
}
