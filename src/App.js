import React, { Component } from 'react';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Listings from "./components/listings";
import Footer from "./components/footer";
import listingsData from "./components/listingsData";
import './App.css';
import "./style.css";


class App extends Component {

constructor(props){

super(props);

this.state = {

listingsData: listingsData


}


}



  render() {
	  
	  //alert(this.state.listingsData.length);
	  
	  /*console.log(this.state.listingsData);*/
	  
    return (

      <div className="App">
	  
	  {this.state.listingsData[0].address}

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
