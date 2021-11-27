import React, { Component } from 'react';
import './App.css';
import Header from './conponents/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import Footer from './conponents/Footer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
    render() {
        return (
            <>
                {/* <!-- Header --> */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <ProductsContainer/>
                        {/* <!-- Message --> */}
                        <MessageContainer/>
                        {/* <!-- Cart --> */}
                        <CartContainer/>
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer/>
            </>
        );
    }
}

export default App;
