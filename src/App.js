import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [ chars, setChars  ] = useState(0)
    return (
      <div className="container">
        <textarea onChange={(e) => setChars(e.target.value.length)} rows="3"></textarea>
        <div className="counter">{chars}</div>
      </div>
    );
}

export default App;