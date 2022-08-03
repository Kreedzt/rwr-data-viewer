import { useState } from 'react';
import Button from '@mui/material/Button';

import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>RWR Data Viewer</h1>
             <div className="card">
                <Button
                    variant="contained"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </Button>
                <p>Incoming...</p>
            </div>
        </div>
    );
}

export default App;
