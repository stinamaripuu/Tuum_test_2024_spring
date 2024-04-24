import React from 'react';
import Form from './Form';
import './App.css'; 

function App() {
  function handleSubmit(formData: any) { 
    console.log(formData);
  }

  return (
  
    <div className='conteiner'>
      <div className='contacts'>
        <h1>Media enquiries:</h1>
        <p><a href='mailto:press@tuum.com'>press@tuum.com</a></p>
        <h1>Career questions:</h1>
        <p><a href='mailto:careers@tuum.com'>careers@tuum.com</a></p>
      </div>
      <div className='formBox'>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;