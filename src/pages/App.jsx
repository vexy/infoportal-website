import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
        <div>
            <h1>Dobrodošli na platformu za glasanje!</h1>
            <Link to="/feed">Napravi razliku</Link>
        </div>
    </>
  );
}

export default App;