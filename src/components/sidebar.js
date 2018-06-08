import React from "react";

class Sidebar extends React.Component{

render(){

return(

<section id="Sidebar">

  <div className="inside">

<h4>Filter</h4>

<select name="borough" className="filters borough">

<option>Hammersmith & Fulham</option>
<option>Kensington & Chelsea</option>
<option>Wandsworth</option>
<option>Merton</option>
<option>Islington</option>
<option>Harrow</option>
<option>Richmond upon Thames</option>
<option>Camden</option>

</select>

<select name="housetype" className="filters housetype">

<option>Flat</option>
<option>House</option>

</select>

<select name="bedrooms" className="filters bedrooms">

<option>1 Bedroom</option>
<option>2 Bedrooms</option>
<option>3 Bedrooms</option>
<option>4 Bedrooms</option>
<option>5 Bedrooms</option>

</select>

<div className="filters price">

<span className="title">Price</span>

<input type="text" name="min-price" className="min-price"/>

<input type="text" name="max-price" className="max-price"/>

</div>

<div className="filters floor-space">

<span className="title">Floor Space</span>

<input type="text" name="min-floor-space" className="min-floor-space"/>

<input type="text" name="max-floor-space" className="max-floor-space"/>

</div>

<div className="filters extras">
<span className="title">Extras</span>

<label for="extras">
<span>Balcony</span>
<input name="extras" value="balcony" type="checkbox"/>
</label>


<label for="extras">
<span>Conservatory</span>
<input name="extras" value="conservatory" type="checkbox"/>
</label>

<label for="extras">
<span>Swimming Pool</span>
<input name="extras" value="swimming-pool" type="checkbox"/>
</label>

<label for="extras">
<span>Garage</span>
<input name="extras" value="garage" type="checkbox"/>
</label>

<label for="extras">
<span>Gym</span>
<input name="extras" value="gym" type="checkbox"/>
</label>

</div>

</div>
</section>


);


}





}


export default Sidebar;
