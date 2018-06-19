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
borough: "All",
homeType: "All",
bedrooms: 0,
min_price: 0,
max_price: 1000000000,
min_floor_space: 0,
max_floor_space: 50000,
balcony: false,
conservatory: false,
swimming_pool: false,
garage: false,
gym: false,
filteredData: listingsData,
populateFormsData: ""


}

this.change = this.change.bind(this);
this.filteredData = this.filteredData.bind(this);
this.populateForms = this.populateForms.bind(this);

}




change(event){
	
	let name = event.target.name;
	let value = (event.target.type === "checkbox") ? event.target.checked : event.target.value;

	
	this.setState({
	
	[name]: value	
		
	}, () =>{
		
		console.log(this.state);
		this.filteredData()
		
	});
	
	

}

filteredData(){
	
let newData = this.state.listingsData.filter((item) => {
	
	return item.price >= this.state.min_price 
	&& item.price <= this.state.max_price 
	&& item.floorSpace >= this.state.min_floor_space 
	&& item.floorSpace <= this.state.max_floor_space
	&& item.bedrooms >= this.state.bedrooms
	
})	

if(this.state.borough !== "All"){
	
	newData = newData.filter((item) => {
		
		return item.borough === this.state.borough
		
	});
	
}

if(this.state.homeType !== "All"){
	
	newData = newData.filter((item) => {
		
		return item.homeType === this.state.homeType
		
		
	});
	
}
	
	this.setState({
		
		filteredData: newData
		
	});
	
	
}

populateForms(){
	
	//borough
	
	let boroughs = this.state.listingsData.map((item) => {
		
		return item.borough
		
	})
	
	boroughs = new Set(boroughs);
	boroughs = [...boroughs];
	
	
	//homeType
	
	let homeTypes = this.state.listingsData.map((item) => {
		
		return item.homeType
		
	})
	
	homeTypes = new Set(homeTypes);
	homeTypes = [...homeTypes];
	
	
	//bedrooms
	
		let bedrooms = this.state.listingsData.map((item) => {
		
		return item.bedrooms
		
	})
	
	bedrooms = new Set(bedrooms);
	bedrooms = [...bedrooms];
	
	this.setState({
	
	populateFormsData:{
		
		homeTypes,
		bedrooms,
		boroughs
		
		
	}
	
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

	  <Sidebar 
	  change={this.change} 
	  globalState={this.state}
	  populateAction={this.populateForms}
	  />

	  <Listings listingsData={this.state.filteredData}/>

	  </section>

	  <Footer />

	  </div>
    );
  }
}

export default App;
