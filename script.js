const form = document.getElementById("patientForm");
const tableBody = document.querySelector("#patientTable tbody");

let counter = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const disease = document.getElementById("disease").value;
  const doctor = document.getElementById("doctor").value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${counter++}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${disease}</td>
    <td>${doctor}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(row);

  form.reset();
});

tableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("tr").remove();
  }
});
