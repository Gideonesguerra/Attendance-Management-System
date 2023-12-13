document = document.getElementById("form1").addEventListener("submit", submitFun1);


let studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let course = document.querySelector("#course").value;
    let year = document.querySelector("#year").value;
    let section = document.querySelector("#section").value;

    let studentObj = {
        name: name,
        number: number,
        course: course,
        year: year,
        section: section
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");
    

    //display students
    displayFun(studentDataArr)
}





function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.number;
        var td4 = document.createElement("td");
        td4.innerHTML = item.course;
        var td5 = document.createElement("td");
        td5.innerHTML = item.year;
        var td6 = document.createElement("td");
        td6.innerHTML = item.section;
        var td7 = document.createElement("td");
        var td8 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td8.innerHTML = "<button >Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td8.innerHTML = "<button id='absent'>Absent</button>";
        
        });
        td8.classList.add("td6");
        td8.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6, td7,td8);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);


