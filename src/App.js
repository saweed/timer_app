import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
    state = {
        timers: [
            {
                title: "First Timer" ,
                description: "1st test timer" ,
                elapsed: '1236500',
                passed: Date.now() ,
                id: uuidv4()
            },
            {
                title: "Second Timer" ,
                description: "2nd test timer" ,
                elapsed: '1236500',
                passed: null,
                id: uuidv4()
            },
            {
                title: "Third Timer" ,
                description: "3rd test timer" ,
                elapsed: '1236500',
                passed: null,
                id: uuidv4()
            },
            {
                title: "Fourth Timer" ,
                description: "4th test timer" ,
                elapsed: '1236500',
                passed: null,
                id: uuidv4()
            }
        ]
    }
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList timers= {this.state.timers}/>
                    <ToggleableTimerForm isOpen={false}/>
                </div>
            </div>
        );
    }
}
