import React from "react";

class Listings extends React.Component{

	constructor(){

		super();

		this.state = {



		}

	this.loopListings = this.loopListings.bind(this);

	}

  loopListings(){

  const {listingsData} = this.props; //is the same as:
  
  //const listingsData = {this.props.listingsData}

  return listingsData.map((listing, index) => {

    return(

  <div className="listing" key={index}>

<div className="listing-img"

  style={{background: `url("${listing.image}") no-repeat center center`}}>

<span className="address">{listing.address}</span>
<div className="details">

<div className="user-img"></div>
<div className="user-details">

<span className="user-name">{listing.userName}</span>
<span className="post-date">02/02/2020</span>

</div>

<div className="listing-details">

<div className="floor-space">
  <i className="fa fa-square"></i>
  <span>{listing.floorspace} ft &sup2;</span>
</div>

<div className="bedrooms">
  <i className="fa fa-bed"></i>
  <span>{listing.bedrooms} bedrooms</span>
</div>

</div>

<div className="view-btn">View Listing</div>

</div>

</div>

<div className="bottom-info">
<span className="price">£{listing.price}</span>
<span className="location"><i className="fas fa-map-marker"></i> {listing.borough}</span>
</div>

  </div>

);


  })

  }

render(){

return(
<section id="Listings">

<section className="search-area">

<input type="text" name="search"/>

</section>

<section className="sort-by-area">

<div className="results">
390 results found
</div>

<div className="sort-options">

<select name="sort-by" className="sort-by">
<option value="price-asc">Highest Price</option>
<option value="price-dsc">Lowest Price</option>
</select>

<div className="view">

<i className="fas fa-list-ul fa-2x"></i>
<i className="fas fa-th fa-2x"></i>

</div>

</div>

</section>

<section className="listings-results">

{this.loopListings()}

</section>

<section id="pagination">

<ul className="pages">
<li>Prev</li>
<li className="active">1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>Next</li>
</ul>

</section>


</section>

);


}

}


export default Listings;
