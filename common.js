// common.js
const basePath = "../assets/img/portfolio/";

const headerHTML = `
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="container d-flex align-items-center">
        <a href="#hero" class="logo"><img src="../assets/img/hart_logo.png" alt="logo"/></a>
        <h1 class="logo"><a href="../index.html">Hart Industries</a></h1>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About Us</a></li>
          <li class="dropdown">
            <a href="products.html"><span>Products</span> <i class="bi bi-chevron-down"></i></a>
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

const footerHTML = `
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

function createProductCard({ name, imgSrc, sizes, colors }) {
  const card = document.createElement("div");
  card.classList.add("col-sm-6", "col-md-4", "col-lg-3");
  card.innerHTML = `
    <div class="card">
      <img src="${basePath}${imgSrc}" class="card-img-top product-img" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <div class="d-flex justify-content-between">
          <div class="size-options">
            ${sizes.map((size) => `<span>${size}</span>`).join("")}
          </div>
          <fieldset class="color-selection">
            <div class="color-swatches">
              ${colors
                .map(
                  (color, index) => `
                <div class="swatch">
                  <input type="radio" id="color${index}-${name}" name="color-${name}" value="color${index}" data-img-src="${basePath}${color.imgSrc}">
                  <label for="color${index}-${name}" class="${color.className}"></label>
                </div>`
                )
                .join("")}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  `;
  document.getElementById("product-row").appendChild(card);
}

function initProductCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const image = card.querySelector(".product-img");
    const colorOptions = card.querySelectorAll(
      '.color-swatches input[type="radio"]'
    );
    colorOptions.forEach((option) => {
      option.addEventListener("change", () => {
        if (option.checked) {
          image.src = option.getAttribute("data-img-src");
          resetOutlineColors(card);
          setOutlineColor(option);
        }
      });
    });
    checkInitialColor(image, colorOptions); // Ensure correct radio button is checked initially
  });
}

function checkInitialColor(image, colorOptions) {
  const imageFileName = image.src.split("/").pop(); // Get the image file name
  colorOptions.forEach((option) => {
    const optionFileName = option.getAttribute("data-img-src").split("/").pop(); // Get the option image file name
    if (imageFileName === optionFileName) {
      option.checked = true;
      setOutlineColor(option); // Set the initial outline color
    }
  });
}

function resetOutlineColors(card) {
  const labels = card.querySelectorAll(".color-swatches label");
  labels.forEach((label) => {
    label.style.outlineColor = "transparent";
  });
}

function setOutlineColor(option) {
  const label = option.nextElementSibling;
  const bgColor = window.getComputedStyle(label).backgroundColor;

  // Check if the background color is white
  if (bgColor === "rgb(255, 255, 255)") {
    label.style.outlineColor = "grey"; // Set to grey for white swatches
  } else {
    label.style.outlineColor = bgColor;
  }
}
