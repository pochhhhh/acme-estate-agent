import React from "react";

class Header extends React.Component{

render(){

return(

<nav className="Header">

<div className="Header-content">

<div className="logo"><p>Acme Estate Agent</p></div>

<ul>

<a href="#"><li>Create Ads</li></a>
<a href="#"><li>About Us</li></a>
<a href="#"><li>Log In</li></a>
<a href="#" className="register-btn"><li>Register</li></a>


</ul>



</div>


</nav>





);


}





}


export default Header;
