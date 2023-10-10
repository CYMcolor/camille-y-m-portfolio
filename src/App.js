import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import './App.css';
import React, { useState } from 'react';

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
        return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
            }
        if (currentPage === 'Contact') {
        return <Contact />;
        }
        return <Resume/>;
    };

    return(
        <div className='Page'>
            <Header/>
            {renderPage()}
            <Footer/>
        </div>
    );
}

export default App;
