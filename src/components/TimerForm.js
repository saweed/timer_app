import React, {Component} from 'react'

export default class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        description: this.props.description || ''
    }
    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    render() {
        const submitText = this.state.title ? 'Update': 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' 
                                name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className='field'>
                            <label>Description</label>
                            <input type='text' 
                                name="description"
                                id="description"
                                value={this.state.description}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'>
                                {submitText}
                            </button>
                            <button className='ui basic red button'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
