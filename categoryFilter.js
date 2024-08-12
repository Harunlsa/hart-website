document.addEventListener("DOMContentLoaded", function () {
  var categories = [
    { value: "baby-sets", text: "Baby Sets" },
    { value: "basins", text: "Basins" },
    { value: "baskets", text: "Baskets" },
    { value: "bowls", text: "Bowls" },
    { value: "buckets", text: "Buckets" },
    { value: "colanders+plates", text: "Colanders And Plates" },
    { value: "coolers", text: "Coolers" },
    { value: "drums", text: "Drums" },
    { value: "ice-cream-containers", text: "Ice Cream Containers" },
    { value: "jerry-cans", text: "Jerry Cans" },
    { value: "mugs+cups", text: "Mugs And Cups" },
    { value: "racks", text: "Racks" },
    { value: "take-away-containers", text: "Takeaway Containers" },
    { value: "toys", text: "Toys" },
  ];

  var select = document.getElementById("categoryFilter");

  // Get the current URL and extract the current category
  var currentUrl = window.location.href;
  var currentCategory = currentUrl.split("/").pop().replace(".html", "");

  // Populate the select options
  categories.forEach(function (category) {
    var option = document.createElement("option");
    option.value = category.value;
    option.text = category.text;
    if (category.value === currentCategory) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  // Remove the default "Select Category" option if there's an active category
  if (currentCategory) {
    select.remove(0);
  } else {
    var defaultOption = document.createElement("option");
    defaultOption.value = "all";
    defaultOption.text = "Select Category";
    select.insertBefore(defaultOption, select.firstChild);
  }

  // Add change event listener
  select.addEventListener("change", function () {
    var selectedCategory = this.value;
    if (selectedCategory) {
      var newUrl = currentUrl.replace(/[^\/]+$/, selectedCategory + ".html");
      window.location.href = newUrl;
    }
  });
});
