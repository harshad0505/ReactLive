import React from 'react';

function Footer(){
    return(
        <React.Fragment>
            <footer>
        <div className="last">
          <div className="right">
            <h2> <i class="fas fa-phone-alt fas-5x"> Phone No : +91 7700062272</i></h2>
            <h2><i class="fas fa-envelope" id="fas " > Email Id : harshadchavan05@gamil.com</i></h2>
            <h2><i class="fas fa-map-marker-alt"> Location : Kalyan</i></h2>
          </div>
          <div className="middles">
          <p>Copyrigth@Harshad2021</p>
          </div>
          <div className="left">
            <a href="#"><i class="fab fa-github fa-1x">  Github</i></a>
            <a href="#"><i class="fab fa-facebook-square fa-1x"></i> Facebook</a>
            <a href="#"><i class="fab fa-linkedin fa-1x"> linkedin</i></a>
          </div>
          
          
        </div>
      </footer>
        </React.Fragment>
    )
}
export default Footer;