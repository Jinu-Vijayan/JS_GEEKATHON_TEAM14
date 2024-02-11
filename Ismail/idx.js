const addEmployment = document.querySelector("#addEmployment");
const addProject = document.querySelector("#addProject");
const addEducational = document.querySelector("#addEducational");

const selectType = document.querySelector("#selectType");
const droDown1 = document.querySelector(".droDown1");

const Personal = document.querySelector(".Personal");
const Professional = document.querySelector(".Professional");

const cssTemplate = document.querySelector("#cssTemplate");
const colorChange = document.querySelector(".colorChange");

const addedEmp = document.querySelector(".adding-employment");
const addedProj = document.querySelector(".adding-project");
const addedEdu = document.querySelector(".adding-education");

addedEdu.addEventListener("keyup", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;
  if (inputId === "startDate") {
    console.log(inputVal);
  }
});

addedProj.addEventListener("keyup", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;
  if (inputId === "startDate") {
    console.log(inputVal);
  }
});

addedEmp.addEventListener("keyup", (e) => {
  const addExp = document.querySelector(".addExp").children;
  console.log(addExp);

  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "startDate") {
    console.log((addExp[1].children[0] = inputVal));
  } else if (inputId === "endDate") {
    console.log((addExp[1].children[1] = inputVal));
  } else if (inputId === "tittle") {
    addExp[0].children.textContent = inputVal;
  }
});

/********************************************************************************************
 * @param
 * from the addEventListener updating the personal details form
 * @returns
 ********************************************************************************************/

Personal.addEventListener("keyup", (e) => {
  // console.log(e.target.id);
  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "personalName") {
    colorChange.children[0].innerHTML = inputVal;
  } else if (inputId === "personalEmail") {
    let number = document.getElementById("email");
    number.textContent = inputVal;
  } else if (inputId === "personalPhone") {
    let number = document.getElementById("number");
    number.textContent = inputVal;
  } else if (inputId === "personalCity") {
    let location = document.getElementById("location");
    location.textContent = inputVal;
  }
});

/************************************************************************************************
 *@param
 *from the addEventListener updating the professional details form
 *@returns
 ************************************************************************************************/

Professional.addEventListener("keyup", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "ProfessionalJob") {
    colorChange.children[1].innerHTML = inputVal;
  } else if (inputId === "ProfessionalSummary") {
    let addSummary = document.querySelector(".addSummary");
    addSummary.children[0].innerHTML = inputVal;
  } else if (inputId == "ProfessionalSkills") {
    let skillsAddingDynamically = document.querySelector(
      ".skillsAddingDynamically"
    );

    // let pTag = document.createElement("p");
    // pTag.innerHTML = inputVal;
    // pTag.style.background = "black";
    skillsAddingDynamically.children[0].innerHTML = inputVal;
    // skillsAddingDynamically.appendChild(pTag);
  }
});

// function updateTemplate() {
//   const headColorVal = document.querySelector("#headColor").value;
//   const textColorVal = document.querySelector("#headTextColor").value;

//   let inputValOfName = Personal[1].value;
//   // inputValOfName.style.backgroundColor = textColorVal;

//   // Updating change color and Name
//
//   colorChange.style.backgroundColor = headColorVal;

//   colorChange.innerHTML = `
//   <h2>${inputValOfName}</h2>
//   <p>${Professional[1].value}</p>`;

//   // Updating Contact Details
//   let number = document.getElementById("number");
//   number.textContent = Personal[3].value;

//   let email = document.getElementById("email");
//   email.textContent = Personal[2].value;

//   let location = document.getElementById("location");
//   location.textContent = Personal[4].value;
// }

/************************************************************************************************
 *@param
 * here i created handler to swap the css attribute as per user need
 @returns
 ************************************************************************************************/

function cssSwap(inputVal) {
  if (inputVal === "TwoColumn") {
    cssTemplate.setAttribute("href", "./twoColumn.css");
  } else {
    cssTemplate.setAttribute("href", "./minimalist.css");
  }
}

selectType.addEventListener("change", (e) => {
  let inputVal = e.target.value;
  // console.log(inputVal);
  cssSwap(inputVal);
});

/******************************************************************************************************
 *@param

 the function rendering the employee form dynamically when user click on button

 *@returns
*********************************************************************************************************/

function renderEmploymentForm() {
  // creating label date
  let labelStartDate = document.createElement("label");
  labelStartDate.textContent = "Start Date";

  // creating start date
  let startDate = document.createElement("input");
  startDate.setAttribute("type", "month");
  startDate.setAttribute("placeholder", "mm_yyyy");
  startDate.setAttribute("id", "startDate");

  // creating end Date
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");
  endDate.setAttribute("id", "endDate");

  // creating tittle
  let tittle = document.createElement("input");
  tittle.setAttribute("type", "text");
  tittle.setAttribute("placeholder", "job Tittle");
  tittle.setAttribute("id", "tittle");

  // creating employer
  let employer = document.createElement("input");
  employer.setAttribute("type", "text");
  employer.setAttribute("placeholder", "employer");
  employer.setAttribute("id", "employer");

  // creating textarea for description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");
  description.setAttribute("id", "description");

  //here appending the all elements
  addedEmp.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    tittle,
    employer,
    description
  );
}

addEmployment.addEventListener("click", () => {
  renderEmploymentForm();
});

/********************************************************************************************************
 * @param
 * the function rendering the project form dynamically when user click on button
 * @returns
 *********************************************************************************************************/

function renderProjectForm() {
  //creating label
  let labelStartDate = document.createElement("label");
  labelStartDate.textContent = "Start Date";

  //creating start date
  let startDate = document.createElement("input");
  startDate.setAttribute("type", "month");
  startDate.setAttribute("placeholder", "mm_yyyy");

  // creating end date
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");

  // creating tittle
  let tittle = document.createElement("input");
  tittle.setAttribute("type", "text");
  tittle.setAttribute("placeholder", "project Tittle");

  // creating employer
  let employer = document.createElement("input");
  employer.setAttribute("type", "text");
  employer.setAttribute("placeholder", "employer");

  // creating textarea for description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");

  //here appending the all elements
  addedProj.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    tittle,
    description
  );
}

addProject.addEventListener("click", () => {
  renderProjectForm();
});

/*********************************************************************************************************
 * @param
 * the function rendering the education form dynamically when user click on button
 * @returns
 **********************************************************************************************************/

function renderEducationForm() {
  // creating label
  let labelStartDate = document.createElement("label");
  labelStartDate.textContent = "Start Date";

  // creating stat date
  let startDate = document.createElement("input");
  startDate.setAttribute("type", "month");
  startDate.setAttribute("placeholder", "mm_yyyy");

  // creating label
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";

  // creating end Date
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");

  // creating qualification
  let qualification = document.createElement("input");
  qualification.setAttribute("type", "text");
  qualification.setAttribute("placeholder", "Qualification");

  //creating school/collage
  let school = document.createElement("input");
  school.setAttribute("type", "text");
  school.setAttribute("placeholder", "school/collage");

  //creating description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");

  //here appending the all elements
  addedEdu.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    qualification,
    school,
    description
  );
}

addEducational.addEventListener("click", () => {
  renderEducationForm();
});
