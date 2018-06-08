import React, { Component } from 'react';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Listings from "./components/listings";
import Footer from "./components/footer";
import './App.css';
import "./style.css";
import listingsData from "./components/listingsData";

class App extends Component {

constructor(props){

super(props);

this.state = {

listingsData: listingsData


}


}



  render() {
	  
	  /*console.log(this.state.listingsData);*/
	  
    return (

      <div className="App">
	  
	  <h1>{this.state.listingsData[0].address}</h1>

	  <Header />

	  <section id="content-area">

	  <Sidebar />

	  <Listings/>

	  </section>

	  <Footer />

	  </div>
    );
  }
}

export default App;
