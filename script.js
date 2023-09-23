const baseUrl = `https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
let result = [];
async function fetchDetails(){
    const response = await fetch(baseUrl);
    result = await response.json();
    displayTable(result);
}
fetchDetails();

const table = document.getElementById("tabl");
function displayTable(result){

    for(let i=0;i<result.length;i++){
        appendToTable(result, i);
    }
}

// function to add data in table
function appendToTable(result, i){
    const trElement = document.createElement("tr");
        trElement.className = "trElements";
        let pass;
        if(result[i].passing === true) pass = "Passing";
        else pass = "Failed";
        trElement.innerHTML = `<td>${result[i].id}</td>
        <td id="tblName"><img src="${result[i].img_src}">${result[i].first_name + " " + result[i].last_name}</td>
        <td>${result[i].gender}</td>
        <td>${result[i].class}</td>
        <td>${result[i].marks}</td>
        <td>${pass}</td>
        <td>${result[i].email}</td>`;

        table.appendChild(trElement);
}

// search option
const searchOption = document.getElementById("search-input");
const btn = document.getElementById("search");
function addSearchData(){
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;

    let str = searchOption.value.toLowerCase();
    for(let j=0;j<result.length;j++){
        if(result[j].first_name.toLowerCase() === str || result[j].last_name.toLowerCase() === str || result[j].email.toLowerCase() === str){
            appendToTable(result,j);
        }
    }
}
btn.addEventListener("click", () => {
    addSearchData();
})

// sort A-> Z
const sort1 = document.getElementById("sort1");
function sortaAcending(){
    result.sort((a, b) => {
        const nameComparison = a.first_name.localeCompare(b.first_name);
        if(nameComparison === 0) {
           return a.last_name - b.last_name;
        }
        return nameComparison;
    });
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;

    displayTable(result);
}
sort1.addEventListener("click", () => {
    sortaAcending();
})

// sort Z-> A
const sort2 = document.getElementById("sort2");
function sortDesceding(){
    result.sort((a, b) => {
        const nameComparison = b.first_name.localeCompare(a.first_name);
        if(nameComparison === 0) {
           return b.last_name - a.last_name;
        }
        return nameComparison;
    });
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;

    displayTable(result);
}
sort2.addEventListener("click", () => {
    sortDesceding();
})

// sort marks
const sort_marks = document.getElementById("sort_marks");
function sortMarks(){
    result.sort((a, b) => a.marks - b.marks);
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;

    displayTable(result);
}
sort_marks.addEventListener("click", () => {
    sortMarks();
})

// sort passing
const sort_passing = document.getElementById("sort_passing");
function sortPass(){
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;
    for(let i =0;i<result.length;i++){
        if(result[i].passing === true){
            const trElement = document.createElement("tr");
            trElement.className = "trElements";
            let pass = "Passing";
            trElement.innerHTML = `<td>${result[i].id}</td>
            <td id="tblName"><img src="${result[i].img_src}">${result[i].first_name + " " + result[i].last_name}</td>
            <td>${result[i].gender}</td>
            <td>${result[i].class}</td>
            <td>${result[i].marks}</td>
            <td>${pass}</td>
            <td>${result[i].email}</td>`;

            table.appendChild(trElement);
        }
    }
}
sort_passing.addEventListener("click", () => {
    sortPass();
})

// sort class
const sort_class = document.getElementById("sort_class");
function sortClass(){
    result.sort((a, b) => a.class - b.class);
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;

    displayTable(result);
}
sort_class.addEventListener("click", () => {
    sortClass();
})

// sort gender
const sort_gender = document.getElementById("sort_gender");
function sortGender(){
    const table1 = document.createElement("table");
    table.id = "tabl";
    table.innerHTML = `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Gender</td>
    <td>Class</td>
    <td>Marks</td>
    <td>Passing</td>
    <td>Email</td>
    </tr>`;
    let genderArr = [];
    for(let i =0;i<result.length;i++){
        if(result[i].gender === "Male" || result[i].gender === "Female"){
            // const trElement = document.createElement("tr");
            // trElement.className = "trElements";
            // let pass;
            // if(result[i].passing === true) pass = "Passing";
            // else pass = "Failed";
            // trElement.innerHTML = `<td>${result[i].id}</td>
            // <td id="tblName"><img src="${result[i].img_src}">${result[i].first_name + " " + result[i].last_name}</td>
            // <td>${result[i].gender}</td>
            // <td>${result[i].class}</td>
            // <td>${result[i].marks}</td>
            // <td>${pass}</td>
            // <td>${result[i].email}</td>`;

            // table.appendChild(trElement);
            genderArr.push(result[i]);
        }
    }
    genderArr.sort((a, b) => {
        return b.gender.localeCompare(a.gender);
    });
    displayTable(genderArr);
}
sort_gender.addEventListener("click", () => {
    sortGender();
})