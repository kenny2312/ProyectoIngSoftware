
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Landing() {
   

    return (
 <div>
 <div id="preloader">
 </div>

<section id="hero">
  <div className="hero-container">
    <div className="wow fadeIn">
    

      <h1>Proyecto Ranking Empresas</h1>
      <h2>Nosotros <span className="rotating">graficas, reportes, asd</span></h2>
      <div className="actions">
        <a href="#about" className="btn-get-started">Empezar</a>
        <a href="#services" className="btn-services">Nuestros servicios</a>
      </div>
    </div>
  </div>
</section>


<header id="header">
  <div className="container">
    <div id="logo" className="pull-left">

    </div>

    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="#hero">Home</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#subscribe">Suscribirse</a></li>
        <li><a href="#contact">Contactanos</a></li>
        <li><a href="login">Login</a></li>
      </ul>
    </nav>
 
  </div>
</header>



<section id="about">
  <div className="container wow fadeInUp">
    <div className="row">
      <div className="col-md-12">
        <h3 className="section-title">About Us</h3>
        <div className="section-title-divider"></div>
        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      </div>
    </div>
  </div>
  <div className="container about-container wow fadeInUp">
    <div className="row">
      <div className="col-md-6 col-md-push-6 about-content">
        <h2 className="about-title">We provide great services and ideass</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate
        </p>
        <p className="about-text">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
        </p>
        <p className="about-text">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
        </p>
      </div>
    </div>
  </div>
</section>


<section id="services">
  <div className="container wow fadeInUp">
    <div className="row">
      <div className="col-md-12">
        <h3 className="section-title">Nuestros servicios</h3>
        <div className="section-title-divider"></div>
        <p className="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-desktop"></i></div>
        <h4 className="service-title"><a href="">Lorem Ipsum</a></h4>
        <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
      </div>
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
        <h4 className="service-title"><a href="">Dolor Sitema</a></h4>
        <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
      </div>
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
        <h4 className="service-title"><a href="">Sed ut perspiciatis</a></h4>
        <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
      </div>
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-photo"></i></div>
        <h4 className="service-title"><a href="">Magni Dolores</a></h4>
        <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-road"></i></div>
        <h4 className="service-title"><a href="">Nemo Enim</a></h4>
        <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
      </div>
      <div className="col-md-4 service-item">
        <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
        <h4 className="service-title"><a href="">Eiusmod Tempor</a></h4>
        <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
      </div>
    </div>
  </div>
</section>


<section id="subscribe">
  <div className="container wow fadeInUp">
    <div className="row">
      <div className="col-md-8">
           

      <h3 className="subscribe-title"> <p>A108 Adam Street New York, NY 535022</p></h3>
                       <p className="subscribe-text"> <i className="fa fa-envelope"></i>
                       info@example.com</p>
      <div className="col-md-4 subscribe-btn-container">
          <i className="fa fa-phone"></i>
          <p className="subscribe-btn"> +1 5589 55488 55s</p>
      </div>


    </div>
  </div>
  </div>
</section>


<footer id="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="copyright">
          &copy; Copyright <strong>Proyecto Ranking Empresas</strong>. Todos los derechos reservados
        </div>
      
      </div>
    </div>
  </div>
</footer>


<a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>



</div>);
}
