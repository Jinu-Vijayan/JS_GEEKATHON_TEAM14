const addEmployment = document.querySelector("#addEmployment");
const addProject = document.querySelector("#addProject");
const addEducational = document.querySelector("#addEducational");

const selectType = document.querySelector("#selectType");
const droDown1 = document.querySelector(".droDown1");

const Personal = document.querySelector(".Personal");
const Professional = document.querySelector(".Professional");

const cssTemplate = document.querySelector("#cssTemplate");
const colorChange = document.querySelector(".colorChange");

/********************************************************************************************
 * @param
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
 *
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

    let pTag = document.createElement("p");
    pTag.innerHTML = inputVal;
    pTag.style.background = "black";
    // skillsAddingDynamically.children[0].innerHTML = inputVal;
    skillsAddingDynamically.appendChild(pTag);
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
  const addedEmp = document.querySelector("#adding-employment");

  // creating label date
  let labelStartDate = document.createElement("label");
  labelStartDate.textContent = "Start Date";

  // creating start date
  let startDate = document.createElement("input");
  startDate.setAttribute("type", "month");
  startDate.setAttribute("placeholder", "mm_yyyy");

  // creating end Date
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");

  // creating tittle
  let tittle = document.createElement("input");
  tittle.setAttribute("type", "text");
  tittle.setAttribute("placeholder", "job tittle");

  // creating employer
  let employer = document.createElement("input");
  employer.setAttribute("type", "text");
  employer.setAttribute("placeholder", "employer");

  // creating textarea for description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");

  //here appending the all elements
  addedEmp.append(
    labelStartDate,
    startDate,
    tittle,
    labelEndDate,
    endDate,
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
  const addedProj = document.querySelector("#adding-project");

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
  tittle.setAttribute("placeholder", "job tittle");

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
    tittle,
    labelEndDate,
    endDate,
    employer,
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
  const addedEdu = document.querySelector("#adding-education");

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
