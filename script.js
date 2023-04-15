let nameData=document.getElementById('name-1');
let profession=document.getElementById('Profession');
let age=document.getElementById('age');
let show=document.getElementsByClassName('showStatus')[0];
let employees = document.getElementById('lists');
let employeeData=[];
let id=employeeData.length+1;
function renderData(){
employees.innerHTML="";
  for(let i of employeeData){
    var li=document.createElement('li');
    li.classList.add('list');
    li.innerText=`${i.id}. ${"Name: "+i.Name}, ${"Profession: "+i.Profession}, ${"Age: "+i.Age}`;
    employees.appendChild(li);
    let button=document.createElement('button');
    button.classList.add('btn-1');
    button.innerText="Delete User";
    li.appendChild(button);
    li.appendChild(button);
    button.addEventListener("click", myFunction)
  }
 
}

function myFunction(e){
  let index = Array.from(employees.children).indexOf(e.target.parentNode);
  employeeData.splice(index, 1);
  renderData();
}
function addedData(){
  // e.preventDefault();
    if(nameData.value === "" || profession.value === "" || age.value === ""){
        show.style.color = 'red';
      show.textContent = "Error: Please ensure all the fields are filled before adding an employee!";
      let heading = document.querySelector('.data-1');
      heading.style.display="visible";
      // employeeData=[]
      // employees.style.display="none";
    } else {
    show.style.color = 'green';
    show.textContent = "Success: Employee Added!";
    heading = document.querySelector('.data-1');
    heading.style.display="none";
    // employees.style.display="visible";
    let inputName=nameData.value;
    let inputProfession=profession.value;
    let inputAge=age.value;
    let id=employeeData.length+1;
    employeeData.push({id:id, Name:inputName, Profession:inputProfession, Age:inputAge});
    renderData();
    }
    nameData.value="";
    profession.value="";
    age.value="";
  }