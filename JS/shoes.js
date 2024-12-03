const clothes = [
  {
    id: 1,
    img: "../image/Shoes1.webp",
    title: "Shoes1",
    price: 20,
    dis: 10,
  },
  { id: 2, img: "../image/Shoes2.jfif", title: "Shoes1", price: 10 },
  { id: 3, img: "../image/Shoes3.jfif", title: "Shoes1", price: 10 },
  { id: 4, img: "../image/Shoes4.jfif", title: "Shoes1", price: 10 },
  { id: 5, img: "../image/Shoes5.jpg", title: "Shoes1", price: 20, dis: 10 },
  { id: 6, img: "../image/Shoes1.webp", title: "Shoes1", price: 10 },
  { id: 7, img: "../image/Shoes2.jfif", title: "Shoes1", price: 10 },
  { id: 8, img: "../image/Shoes3.jfif", title: "Shoes1", price: 10 },
  { id: 9, img: "../image/Shoes4.jfif", title: "Shoes1", price: 10 },
  { id: 10, img: "../image/Shoes5.jpg", title: "Shoes1", price: 20, dis: 10 },
  { id: 11, img: "../image/Shoes1.webp", title: "Shoes1", price: 10 },
  { id: 12, img: "../image/Shoes2.jfif", title: "Shoes1", price: 10 },
  { id: 13, img: "../image/Shoes3.jfif", title: "Shoes1", price: 10 },
  {
    id: 14,
    img: "../image/Shoes4.jfif",
    title: "Shirt2",
    price: 20,
    dis: 10,
  },
  { id: 15, img: "../image/Shoes5.jpg", title: "Shoes2", price: 20, dis: 10 },
  { id: 16, img: "../image/Shoes1.webp", title: "Shoes2", price: 10 },
  { id: 17, img: "../image/Shoes2.jfif", title: "Shoes2", price: 10 },
  { id: 18, img: "../image/Shoes3.jfif", title: "Shoes2", price: 10 },
  { id: 19, img: "../image/Shoes4.jfif", title: "Shoes2", price: 10 },
  { id: 20, img: "../image/Shoes5.jpg", title: "Shoes2", price: 20, dis: 10 },
  {
    id: 21,
    img: "../image/Shoes1.webp",
    title: "Shoes2",
    price: 22,
    dis: 10,
  },
  { id: 22, img: "../image/Shoes2.jfif", title: "Shoes2", price: 10 },
  { id: 23, img: "../image/Shoes3.jfif", title: "Shoes2", price: 10 },
  { id: 24, img: "../image/Shoes4.jfif", title: "Shoes3", price: 10 },
  { id: 25, img: "../image/Shoes5.jpg", title: "Shoes3", price: 20, dis: 10 },
  { id: 26, img: "../image/Shoes1.webp", title: "Shoes3", price: 10 },
  { id: 27, img: "../image/Shoes2.jfif", title: "Shoes3", price: 10 },
  { id: 28, img: "../image/Shoes3.jfif", title: "Shoes3", price: 10 },
  { id: 29, img: "../image/Shoes4.jfif", title: "Shoes3", price: 10 },
  { id: 30, img: "../image/Shoes5.jpg", title: "Shoes3", price: 20, dis: 10 },
];
$(document).ready(function () {
  $(".cart_container").click(function () {
    // Check the current opacity and toggle it
    const category = $(".category");
    category.css("transition", "all 0.3s ease");
    if (category.css("display") == "none") {
      category.css({ display: "block" });
    } else {
      category.css({ display: "none" });
    }
  });

  // Make sure the imgContainer is available
  const imgContainer = document.querySelector(".image__container");
  if (imgContainer) {
    let divimg = "";

    clothes.forEach((image) => {
      divimg += `<div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                   <div class="card border-1 h-75 w-100">
                     <img src="${
                       image.img
                     }" class="card-img-top img-fluid w-100"style="height: 90%;"/>
                     <div class="card-body d-flex flex-column justify-content-between">
                       <h1 class="card-title fw-bolder fs-6 fs-sm-5 fs-md-4 fs-lg-3">${
                         image.title
                       }</h1>
                       <p class="card-text d-flex justify-content-end fs-7 fs-sm-6 fs-md-5 fs-lg-4">
                         <span class="${
                           image.price === 20 || image.price === 22
                             ? "text-decoration-line-through"
                             : ""
                         }">${image.price ? image.price : ""}$</span>
                         ${
                           image.dis
                             ? `<span class="ms-2 text-danger">${image.dis}$</span>`
                             : ""
                         }
                       </p>
                       <button onclick="handleSeleted(${
                         image.id
                       })" class="btn btn-danger btnSelected fs-6 fs-sm-5 fs-md-4 fs-lg-3">buy</button>
                     </div>
                   </div>
                 </div>`;
    });

    imgContainer.innerHTML = divimg;
  }
});

// get ID from button of each card
const cate = document.querySelector(".category");
const ul = document.querySelector(".cate__content");
function handleSeleted(id) {
  const list = ul.querySelectorAll("li");
  // Check if an item with the same ID already exists
  if (!Array.from(list).some((li) => li.dataset.id === String(id))) {
    const item = clothes.find((item) => item.id === id);

    if (item) {
      const li = document.createElement("li");
      li.dataset.id = item.id; // Store the ID to avoid duplicates
      li.innerHTML = `<img onMouseover="alert("Hello")" src="${item.img}"/> 
                        <h1>${item.title}</h1>
                        
                        <div class="btn__container">
                          <button class="btn btn-light h-50 my-auto" onclick="handleMin(this)">-</button>  
                          <p class="mt-auto mb-auto res__count text-light">0</p>
                                 
                          <button class="btn btn-light h-50 my-auto" onclick="handlePlus(this)">+</button> 
                          <p class="delete" onclick="handleDelete(${item.id})">x</p>
                        </div>`;

      ul.appendChild(li);

      // Update item count when a new item is added
      updateItemCount();
      addSelectedItemToTable(item);
    }
  }
}
function addSelectedItemToTable(item) {
  const tableBody = document.querySelector(".selected-items-table tbody");

  if (!tableBody) {
    console.error("Table body not found!"); // Debugging line
    return;
  }

  // Check if the item is already in the table to avoid duplicates
  const existingRow = Array.from(tableBody.children).find(
    (row) => row.dataset.id === String(item.id)
  );

  if (!existingRow) {
    const totalElement = document.querySelector(".total");
    const row = document.createElement("tr");

    row.dataset.id = item.id; // Store the ID to avoid duplicates

    // Calculate the effective price (considering discount)
    const effectivePrice = item.dis ? item.dis : item.price;

    // Update the total sum
    let currentTotal = parseFloat(totalElement.textContent) || 0;
    currentTotal += effectivePrice;
    totalElement.textContent = currentTotal.toFixed(2); // Display with 2 decimal places

    // Insert item details into the table row
    row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.price}$</td>
        <td>${item.dis ? item.dis + "$" : "No discount"}</td>
      `;
    tableBody.appendChild(row);

    console.log("Item added to table:", item); // Debugging line
  } else {
    console.log("Item already exists in the table:", item); // Debugging line
  }
}

// ===============================================================

// Function to display items
function displayItems(items) {
  const container = document.querySelector(".image__container");
  container.innerHTML = ""; // Clear the current items

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add(
      "col-6",
      "col-sm-4",
      "col-md-3",
      "col-lg-2",
      "col-xl-2"
    );
    itemDiv.innerHTML = `
      <div class="card border-1 h-75 w-100">
          <img src="${item.img}" class="card-img-top img-fluid w-100" style="height: 90%;" alt="${item.name}" />
          <div class="card-body d-flex flex-column justify-content-between">
          <h1 class="card-title fw-bolder fs-6">${item.title}</h1>
          <p class="card-text d-flex justify-content-end fs-7">
          <span>${item.price}$</span>
          </p>
          <button onclick="handleSelected(${item.id})" class="btn btn-danger btnSelected">Buy</button>
          </div>
        </div>
      `;
    container.appendChild(itemDiv);
  });
}

// Display all items initially
displayItems(clothes);

// Function to handle search input
function handleSearch() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filteredItems = clothes.filter(
    (item) => item.title.toLowerCase().includes(searchInput) // Change 'name' to 'title'
  );
  // Check if filteredItems is empty and show message accordingly
  if (filteredItems.length > 0) {
    displayItems(filteredItems); // Display the filtered items
  } else {
    alert("No value is founded!");
  }
}

// Add event listener to the search input
document.getElementById("searchInput").addEventListener("input", handleSearch);

// Function to add selected item to the table

// deleteItems from the rigth menu
function handleDelete(ID) {
  // Find and remove the item from the displayed list in the DOM
  const itemToDelete = ul.querySelector(`li[data-id="${ID}"]`);
  if (itemToDelete) {
    ul.removeChild(itemToDelete); // Remove the item from the DOM
  }

  // Update item count after deletion
  updateItemCount();
}

// Function to update the count of selected items
function updateItemCount() {
  const listCount = document
    .querySelector(".cate__content")
    .querySelectorAll("li").length;
  document.querySelector(".count").textContent = listCount;
  if (listCount == 0) {
    document.querySelector(".category").style.display = "none";
  }
}
// Adjusting counting logic to handle multiple counters
function handleMin(button) {
  const countElement = button.parentElement.querySelector(".res__count");
  let counting = parseInt(countElement.textContent);

  if (counting > 0) {
    counting = counting - 1;
    countElement.textContent = counting;
  }
}

function handlePlus(button) {
  const countElement = button.parentElement.querySelector(".res__count");
  let counting = parseInt(countElement.textContent);

  counting = counting + 1;
  countElement.textContent = counting;
}

//close Box

function handleCloseBox() {
  document.querySelector(".box").style.display = "none";
}

//hover the category to display block the center div img container
$(document).ready(function () {
  // Hover effect for the images only in the li of cate__content
  $(".cate__content").on("mouseenter", "li img", function () {
    // Get the image source when hovering over the img element
    const imgSrc = $(this).attr("src");

    // Set the image source in the box
    $(".full-image").attr("src", imgSrc);

    // Display the box when hovering over the image
    $(".box").css("display", "block");

    if (!imgSrc) {
      $(".box").css("display", "none");
    }
  });

  // Hide the box when the mouse leaves the image
  $(".cate__content").on("mouseleave", "li img", function () {
    $(".box").css("display", "none");
  });
});

$(document).ready(function () {
  $(".addBtn").click(function () {
    $(".tbl__container").css({ display: "block" });
    $(".category").hide();
  });

  $(".close").click(function () {
    $(".tbl__container").css({ display: "none" });
  });

  $(".payDone").click(function () {
    $(".tbl__container").css({ display: "none" });
    $(".category").hide();
    alert("Payment Done!");
  });
});
