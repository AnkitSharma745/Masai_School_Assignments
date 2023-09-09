
let form = document.querySelector("form")
let tableBody = document.querySelector("tbody")
let filterSelect = document.querySelector("#department")
form.addEventListener('submit',function(event){
    event.preventDefault();


    let name = document.getElementById("name").value
      let employeeID = document.getElementById("employeeID").value
      let department = document.getElementById("department").value
      let  exp = document.getElementById("exp").value
      let email = document.getElementById("email").value
      let mobile = document.getElementById("mbl").value
      let role;
      if(exp>5){
        role = 'Senior'

      } 
      else if(exp>2){
        role = 'Junior'
      }
      else{
        role = 'Fresher'
      }
    let row = document.createElement('tr')

    row.innerHTML = `
    <td>${name}</td>
    <td>${employeeID}</td>
    <td>${department}</td>
    <td>${exp}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button class="delete-button">Delete</button></td>
  `;
   tableBody.appendChild(row);
   form.reset();



    });



tableBody.addEventListener('click', (event) => {
  if (event.target.className === 'delete-button') {
    // Remove the parent row of the delete button that was clicked
    event.target.parentElement.parentElement.remove();
  }
});

