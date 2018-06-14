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

listingsData: listingsData,
min_price: 0,
max_price: 1000000000,
min_floor_space: 0,
max_floor_space: 50000,
balcony: false,
conservatory: false,
swimming_pool: false,
garage: false,
gym: false


}

this.change = this.change.bind(this);

}




change(event){
	
	let name = event.target.name;
	let value = (event.target.type === "checkbox") ? event.target.checked : event.target.value;

	
	this.setState({
	
	[name]: value	
		
	}, () =>{
		
		console.log(this.state);
		
	});
	
	

}



  render() {

	  //alert(this.state.listingsData.length);

	  /*console.log(this.state.listingsData);*/

    return (

      <div className="App">

	  {this.state.listingsData[0].address}

	  <Header />

	  <section id="content-area">

	  <Sidebar change={this.change} globalState={this.state}/>

	  <Listings listingsData={this.state.listingsData}/>

	  </section>

	  <Footer />

	  </div>
    );
  }
}

export default App;
