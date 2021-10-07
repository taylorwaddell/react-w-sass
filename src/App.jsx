import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button classes="bg-primary text-light" buttonText="More info" />
      <Button classes="bg-success text-dark" buttonText="More info" />
      <Button classes="bg-danger text-light" buttonText="More info" />
      <Button classes="bg-warning text-light" buttonText="More info" />
    </>
  );
}

export default App;
