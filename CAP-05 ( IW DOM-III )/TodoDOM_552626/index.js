let form = document.getElementsByTagName("form");
form[0].addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("task").value;
    let status = document.getElementById("priority").value;
    let data = document.getElementsByTagName("tbody")[0];
    let tr = document.createElement("tr");
    
    let tdName = document.createElement("td");
    tdName.textContent = name;
    tr.appendChild(tdName);
    
    let tdStatus = document.createElement("td");
    tdStatus.textContent = status;
    tr.appendChild(tdStatus);
    
    let tdFavourite = document.createElement("td");
    
    tdFavourite.textContent = "Favourite";
    
    tr.appendChild(tdFavourite);
    
    if (status === "High") {
        tr.style.backgroundColor = "red";
    } else if (status === "Low") {
        tr.style.backgroundColor = "green";
    }

    data.appendChild(tr);
    
});
