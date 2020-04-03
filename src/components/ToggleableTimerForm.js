import React, { Component } from 'react'
import TimerForm from './TimerForm'

export default class ToggleableTimerForm extends Component {
    state = {
      isOpen: false
    }
    toggleFormState = () => {
      this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        if(this.state.isOpen){
            return (
                <TimerForm />
            );
        }
        return (
            <div className='ui basic content center aligned segment'>
              <button className='ui basic button icon'
                onClick={this.toggleFormState}>
                <i className='plus icon' />
              </button>
            </div>
          )
    }
}
