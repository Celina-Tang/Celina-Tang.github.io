import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Info from './component/Info';
import Footer from './component/Footer';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Info />
        <Footer />
      </div> 
    );
  }
}

export default MainPage;
