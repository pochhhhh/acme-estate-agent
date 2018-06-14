import React from "react";

class Sidebar extends React.Component{

render(){

return(

<section id="Sidebar">

  <div className="inside">

<h4>Filter</h4>

<label htmlFor="borough">Borough</label>

<select name="borough" className="filters borough" onChange={this.props.change}>

<option value="All">All Boroughs</option>
<option value="Hammersmith & Fulham">Hammersmith & Fulham</option>
<option value="Kensington & Chelsea">Kensington & Chelsea</option>
<option value="Wandsworth">Wandsworth</option>
<option value="Merton">Merton</option>
<option value="Islington">Islington</option>
<option value="Harrow">Harrow</option>
<option value="Richmond upon Thames">Richmond upon Thames</option>
<option value="Camden">Camden</option>

</select>

<label htmlFor="homeType">Home Type</label>

<select name="homeType" className="filters homeType" onChange={this.props.change}>

<option value="All">All Homes</option>
<option value="Flat">Flat</option>
<option value="House">House</option>

</select>

<label htmlFor="bedrooms">Bedrooms</label>

<select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>

<option value="0">All</option>
<option value="1">1+ Bedrooms</option>
<option value="2">2+ Bedrooms</option>
<option value="3">3+  Bedrooms</option>
<option value="4">4+ Bedrooms</option>
<option value="5">5+ Bedrooms</option>

</select>

<div className="filters price">

<span className="title">Price</span>

<input type="text" name="min_price" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price}/>

<input type="text" name="max_price" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price}/>

</div>

<div className="filters floor-space">

<span className="title">Floor Space</span>

<input type="text" name="min_floor_space" className="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>

<input type="text" name="max_floor_space" className="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>

</div>

<div className="filters extras">
<span className="title">Extras</span>

<label htmlFor="extras">
<span>Balcony</span>
<input name="balcony" value="balcony" type="checkbox" onChange={this.props.change}/>
</label>


<label htmlFor="extras">
<span>Conservatory</span>
<input name="conservatory" value="conservatory" type="checkbox" onChange={this.props.change}/>
</label>

<label htmlFor="extras">
<span>Swimming Pool</span>
<input name="swimming-pool" value="swimming-pool" type="checkbox" onChange={this.props.change}/>
</label>

<label htmlFor="extras">
<span>Garage</span>
<input name="garage" value="garage" type="checkbox" onChange={this.props.change}/>
</label>

<label htmlFor="extras">
<span>Gym</span>
<input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
</label>

</div>

</div>
</section>


);


}





}


export default Sidebar;
