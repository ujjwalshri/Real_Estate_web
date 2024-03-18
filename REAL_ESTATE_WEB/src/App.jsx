import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
<<<<<<< Updated upstream
function App() {
  return (
    <>
    
    <NavBar/>
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Hello, Tailwind CSS!</h1>
      <p className="text-lg text-gray-700">This is a React app using Tailwind CSS.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Click me</button>
    </div>
    </>
=======
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router> 
      <>
        <NavBar />
        <Home/>
        
        <Footer />
      </>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
