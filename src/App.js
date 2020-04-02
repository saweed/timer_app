import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import EditableTimerList from './components/EditableTimerList';

function App() {
    return (
        <div className='ui three column centered grid'>
            <div className='column'>
              <EditableTimerList />
            </div>
        </div>
    );
}

export default App;
