import React from "react";

class Listings extends React.Component{

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
  <div className="listing">

<div className="listing-img">
<span className="Address">Address</span>
<div className="details">

<div className="user-img"></div>
<div className="user-details">

<span className="user-name">Bob Smith</span>
<span className="post-date">02/02/2020</span>

</div>

<div className="listing-details">

<div className="floor-space">
  <i class="fa fa-square"></i>
  <span>1000 ft &sup2;</span>
</div>

<div className="bedrooms">
  <i class="fa fa-bed"></i>
  <span>3 bedrooms</span>
</div>


</div>

</div>

</div>

<div className="bottom-info">
<span>£1000 / month</span>
<span><i class="fas fa-map-marker"></i>

Ridgewood NY</span>
</div>

  </div>

</section>

<section className="pagination">

<ul className="pagination-numbers">
<li>Prev</li>
<li>1</li>
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
