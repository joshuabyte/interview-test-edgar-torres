// @ts-nocheck
// JS Code here...

const submitButton = document.getElementById("submitButton");
const productId = document.getElementById("product-id");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productIva = document.getElementById("product-iva");
const productTotal = document.getElementById("product-total");
const productDate = document.getElementById("product-date");
const tableBody = document.querySelector("#products-table tbody");

const saveProduct = (event) => {
  event.preventDefault();

  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let iva = document.getElementById("iva").value;

  let total = price * (1 + iva / 100);

  const newRow = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.innerHTML = Math.floor(Math.random() * 1000);

  const productCell = document.createElement("td");
  productCell.innerHTML = product;

  const priceCell = document.createElement("td");
  priceCell.innerHTML = `$${price}`;

  const ivaCell = document.createElement("td");
  ivaCell.innerHTML = `${iva}%`;

  const totalCell = document.createElement("td");
  totalCell.innerHTML = `$${total.toFixed(2)}`;

  const dateCell = document.createElement("td");
  dateCell.innerHTML = new Date().toLocaleDateString();

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-delete");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", () => {
    tableBody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);

  newRow.appendChild(idCell);
  newRow.appendChild(productCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(ivaCell);
  newRow.appendChild(totalCell);
  newRow.appendChild(dateCell);
  newRow.appendChild(deleteCell);

  tableBody.appendChild(newRow);

  document.getElementById("product-form").reset();

  productId.innerHTML = idCell.innerHTML;
  productName.innerHTML = product;
  productPrice.innerHTML = priceCell.innerHTML;
  productIva.innerHTML = ivaCell.innerHTML;
  productTotal.innerHTML = totalCell.innerHTML;
  productDate.innerHTML = dateCell.innerHTML;
};

submitButton.addEventListener("click", saveProduct);
