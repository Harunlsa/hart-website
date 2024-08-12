document.addEventListener("DOMContentLoaded", () => {
  const basePath =
    "../assets/img/portfolio/" +
    document.body.getAttribute("data-category") +
    "/";
  const products = JSON.parse(
    document.getElementById("product-data").textContent
  );

  const createProductCard = ({ name, imgSrc, sizes, colors }) => `
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
          <img src="${
            basePath + imgSrc
          }" class="card-img-top product-img" alt="${name}">
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
                      <input type="radio" id="color${index}-${name}" name="color-${name}" value="color${index}" data-img-src="${
                        basePath + color.imgSrc
                      }">
                      <label for="color${index}-${name}" class="${
                        color.className
                      }"></label>
                    </div>`
                    )
                    .join("")}
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    `;

  const productRow = document.getElementById("product-row");
  productRow.innerHTML = products.map(createProductCard).join("");

  productRow
    .querySelectorAll(".color-selection input[type='radio']")
    .forEach((radio) => {
      radio.addEventListener("click", (e) => {
        const imgElement = e.target
          .closest(".card")
          .querySelector(".product-img");
        imgElement.src = e.target.getAttribute("data-img-src");
      });
    });
});
