document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.title;

  const headerTemplate = `
    <!-- ======= Top Bar ======= -->
    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">sales@hartindustries.com</a>
          </i>
          <i class="bi bi-phone d-flex align-items-center ms-4">
            <a href="tel:+2347025596606"><span>+234 702 559 6606</span></a>
          </i>
        </div>
      </div>
    </section>
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="container d-flex align-items-center">
          <a href="#hero" class="logo">
            <img src="../assets/img/hart_logo.png" alt="logo" />
          </a>
          <h1 class="logo">
            <a href="../index.html">Hart Industries</a>
          </h1>
        </div>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About Us</a></li>
            <li class="dropdown">
              <a href="products.html">
                <span>Products</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="baby-sets.html">Baby Sets</a></li>
                <li><a href="basins.html">Basins</a></li>
                <li><a href="baskets.html">Baskets</a></li>
                <li><a href="bowls.html">Bowls</a></li>
                <li><a href="buckets.html">Buckets</a></li>
                <li><a href="colanders+plates.html">Colanders & Plates</a></li>
                <li><a href="coolers.html">Coolers</a></li>
                <li><a href="drums.html">Drums</a></li>
                <li><a href="ice-cream-containers.html">Ice Cream Containers</a></li>
                <li><a href="jerry-cans.html">Jerry Cans</a></li>
                <li><a href="mugs+cups.html">Mugs & Cups</a></li>
                <li><a href="racks.html">Racks</a></li>
                <li><a href="take-away-containers.html">Take Away Containers</a></li>
                <li><a href="toys.html">Toys</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
    <!-- End Header -->
    `;

  const footerTemplate = `
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-9 footer-contact">
              <h3>Hart Industries</h3>
              <p>
                No 20, Challawa Industrial Area, <br />
                Kano, Nigeria <br /><br />
                <strong>Phone:</strong> +234 702 559 6606<br />
                <strong>Email:</strong> sales@hart-industries.com<br />
              </p>
            </div>
  
            <div class="col-lg-3 col-md-3 footer-links text-right">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i><a href="#">Home</a></li>
                <li><i class="bx bx-chevron-right"></i><a href="#">About us</a></li>
                <li><i class="bx bx-chevron-right"></i><a href="#">Products</a></li>
                <li><i class="bx bx-chevron-right"></i><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Hart Industries</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="#">HLAbdulwahab</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    `;

  const mainElement = document.querySelector("main");

  if (mainElement) {
    mainElement.insertAdjacentHTML("beforebegin", headerTemplate);
    mainElement.insertAdjacentHTML("afterend", footerTemplate);
  }
});
