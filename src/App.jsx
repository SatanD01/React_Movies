import './App.css';
import React, {Component} from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        );
    }
}

export default App;
