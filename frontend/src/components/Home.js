import { useNavigate } from "react-router-dom";
import React from 'react';
import '../App.css'

function Home() {
    const navigate = useNavigate();

    const gotoForm = (formType) => {
        navigate(`/form/${formType}`);
      };

    return (
    <div className="App">
        <h1>MedWander</h1>
        <button onClick={() => gotoForm('A')}>Form A</button>
        <button onClick={() => gotoForm('B')}>Form B</button>
    </div>
    )
}

export default Home;