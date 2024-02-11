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

const addExp = document.querySelector(".addExp").children;
const addExp2Tag = document.querySelector(".addExp2Tag").children;

const addPro = document.querySelector(".addPro").children;
const addPro2Tag = document.querySelector(".addPro2Tag").children;

const addEdux = document.querySelector(".addEdux").children;
const addEdu2Tag = document.querySelector(".addEdu2Tag").children;

// Filled Education Form------>

addedEdu.addEventListener("keyup", (e) => {
  let liTag = document.createElement("li");
  let pTag1 = document.createElement("p");
  let pTag2 = document.createElement("p");

  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "Qualification") {
    liTag.textContent = inputVal;
    addEdu2Tag[0].innerHTML = "";
    addEdu2Tag[0].append(liTag);
  } else if (inputId === "school/collage") {
    pTag1.textContent = inputVal;
    addEdux[1].innerHTML = "";
    addEdux[1].append(pTag1);
  } else if (inputId === "description") {
    pTag2.textContent = inputVal;
    addEdux[2].innerHTML = "";
    addEdux[2].append(pTag2);
  }
});

addedEdu.addEventListener("change", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "startDate") {
    let pTag1 = document.createElement("p");
    pTag1.textContent = inputVal;
    addEdu2Tag[1].append(pTag1);
  } else if (inputId === "endDate") {
    let pTag2 = document.createElement("p");
    pTag2.textContent = `- ${inputVal}`;
    addEdu2Tag[1].append(pTag2);
  }
});

// Filled project Form------>

addedProj.addEventListener("keyup", (e) => {
  let liTag = document.createElement("li");
  let pTag2 = document.createElement("p");

  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "tittle") {
    liTag.textContent = inputVal;
    addPro2Tag[0].innerHTML = "";
    addPro2Tag[0].append(liTag);
  } else if (inputId === "description") {
    pTag2.textContent = inputVal;
    addPro[1].innerHTML = "";
    addPro[1].append(pTag2);
  }
});

addedProj.addEventListener("change", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "startDate") {
    let pTag1 = document.createElement("p");
    pTag1.textContent = inputVal;
    addPro2Tag[1].append(pTag1);

    // console.log((pTag1.textContent = inputVal));
  } else if (inputId === "endDate") {
    let pTag2 = document.createElement("p");
    pTag2.textContent = `- ${inputVal}`;
    addPro2Tag[1].append(pTag2);
    // console.log((pTag2.textContent = inputVal));
  }
});

// filled Employees Form---->

addedEmp.addEventListener("keyup", (e) => {
  let liTag = document.createElement("li");
  let pTag = document.createElement("p");
  let pTag2 = document.createElement("p");

  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "tittle") {
    liTag.textContent = inputVal;
    addExp2Tag[0].innerHTML = "";
    addExp2Tag[0].append(liTag);
  } else if (inputId === "employer") {
    pTag.textContent = inputVal;
    addExp[1].innerHTML = "";
    addExp[1].append(pTag);
  } else if (inputId === "description") {
    pTag2.textContent = inputVal;
    addExp[2].innerHTML = "";
    addExp[2].append(pTag2);
  }
});

addedEmp.addEventListener("change", (e) => {
  let inputId = e.target.id;
  console.log(inputId);
  let inputVal = e.target.value;

  if (inputId === "startDate") {
    let pTag1 = document.createElement("p");
    pTag1.textContent = inputVal;
    addExp2Tag[1].append(pTag1);

    // console.log((pTag1.textContent = inputVal));
  } else if (inputId === "endDate") {
    let pTag2 = document.createElement("p");
    pTag2.textContent = `- ${inputVal}`;
    addExp2Tag[1].append(pTag2);
    // console.log((pTag2.textContent = inputVal));
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
 * addEventListener updating the professional details form
 *@returns
 ************************************************************************************************/

let skillsAddingDynamically = document.querySelector(
  ".skillsAddingDynamically"
);

Professional.addEventListener("keyup", (e) => {
  let inputId = e.target.id;
  let inputVal = e.target.value;

  if (inputId === "ProfessionalJob") {
    colorChange.children[1].innerHTML = inputVal;
  } else if (inputId === "ProfessionalSummary") {
    let addSummary = document.querySelector(".addSummary");
    addSummary.children[0].innerHTML = inputVal;
  } else if (inputId == "ProfessionalSkills") {
    skillsAddingDynamically.children[0].innerHTML = inputVal;
    // let pTag = document.createElement("p");
    // pTag.innerHTML = inputVal;
    // pTag.style.background = "black";
    // skillsAddingDynamically.appendChild(pTag);
  }
});

/******************************************************************
 *@param inputVal
 * here i created handler to swap the css attribute as per user need
 @returns
 ****************************************************************/

function cssSwap(inputVal) {
  if (inputVal === "TwoColumn") {
    cssTemplate.setAttribute("href", "./twoColumn.css");
    // document.querySelector(".skills-for-minimalist").style.display ="none";
  } else {
    // document.querySelector(".skills-for-minimalist").style.display ="block";
    cssTemplate.setAttribute("href", "./minimalist.css");
  }
}

selectType.addEventListener("change", (e) => {
  let inputVal = e.target.value;
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
  startDate.setAttribute("id", "startDate");

  // creating end date
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");
  endDate.setAttribute("id", "endDate");

  // creating tittle
  let tittle = document.createElement("input");
  tittle.setAttribute("type", "text");
  tittle.setAttribute("placeholder", "project Tittle");
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
  addedProj.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    tittle,
    description
  );
}

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
  startDate.setAttribute("id", "startDate");

  // creating label
  let labelEndDate = document.createElement("label");
  labelEndDate.textContent = "End Date";

  // creating end Date
  let endDate = document.createElement("input");
  endDate.setAttribute("type", "month");
  endDate.setAttribute("placeholder", "mm_yyyy");
  endDate.setAttribute("id", "endDate");

  // creating qualification
  let qualification = document.createElement("input");
  qualification.setAttribute("type", "text");
  qualification.setAttribute("placeholder", "Qualification");
  qualification.setAttribute("id", "Qualification");

  //creating school/collage
  let school = document.createElement("input");
  school.setAttribute("type", "text");
  school.setAttribute("placeholder", "school/collage");
  school.setAttribute("id", "school/collage");

  //creating description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");
  description.setAttribute("id", "description");

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

addProject.addEventListener("click", () => {
  renderProjectForm();
});

addEmployment.addEventListener("click", () => {
  renderEmploymentForm();
});
