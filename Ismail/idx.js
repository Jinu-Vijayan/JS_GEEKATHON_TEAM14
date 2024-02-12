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
const addedPro = document.querySelector(".adding-project");
const addedEdu = document.querySelector(".adding-education");

const headColor = document.getElementById("headColor");
const headTextColor = document.getElementById("headTextColor");
const headerText = document.getElementById("headerText");

const downLoad = document.getElementById("downLoad");

function generatePDF() {
  const element = document.getElementById("dropDown1");
  console.log(element);

  html2pdf().from(element).save();
}

downLoad.addEventListener("click", () => {
  console.log("working");
  generatePDF();
});

// here Event Listener taking input color and adding into the headerColor Div as a backGroundColor
headTextColor.addEventListener("input", (e) => {
  let headTextColorVal = e.target.value;
  headerText.style.color = headTextColorVal;
});

headColor.addEventListener("input", (e) => {
  let headerColorVal = e.target.value;
  colorChange.style.backgroundColor = headerColorVal;
});

/********************************************************************************************
 * @param
 * from the addEventListener updating the personal details form
 * @returns
 ********************************************************************************************/

Personal.addEventListener("keyup", (e) => {
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

const skillsDynamicAdd = document.querySelector(".skillsDynamicAdd");
const skillsDynamicAddMinima = document.querySelector(
  ".skillsDynamicAddMinima"
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
    skillsDynamicAdd.children[0].innerHTML = inputVal;
    skillsDynamicAddMinima.children[0].innerHTML = inputVal;
  }
});

/******************************************************************
 *@param inputVal
 * here i created handler to swap the css attribute as per user needs
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

// this is for Project Card Update form and creation card

const addEdux = document.querySelector(".addEdux");

/****************************************************************************************************
 * @param
 * clearProjectForm clearing the data from the form when user filled the details once
 * @returns
 *****************************************************************************************************/

function clearEducationForm() {
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("school-collage").value = "";
  document.getElementById("description").value = "";
}

/******************************************************************************************************
 *@param
 the function rendering the education card dynamically when user click on button
 *@returns
*********************************************************************************************************/

function renderEducationCard() {
  const addEdu2Tag = document.createElement("div");
  const addEdu2TagChild1 = document.createElement("div");
  const addEdu2TagChild2 = document.createElement("div");
  const addEduxChild1 = document.createElement("p");
  const addEduxChild2 = document.createElement("p");

  // getting value from renderEmForm function----->
  const startDateVal = document.getElementById("startDate").value;
  const endDateVal = document.getElementById("endDate").value;
  const qualificationVal = document.getElementById("qualification").value;
  const schoolCollage = document.getElementById("school-collage").value;
  const descriptionVal = document.getElementById("description").value;

  let liTag = document.createElement("li");
  let pTag1 = document.createElement("p");
  let pTag2 = document.createElement("p");

  liTag.textContent = qualificationVal;
  addEdu2TagChild1.append(liTag);
  pTag1.textContent = startDateVal;
  pTag2.textContent = endDateVal;
  addEdu2TagChild2.append(pTag1, pTag2);

  addEdu2Tag.classList.add("addEdu2Tag");
  addEdu2Tag.append(addEdu2TagChild1, addEdu2TagChild2);

  // addProChild1.textContent = qualificationVal;
  addEduxChild1.textContent = schoolCollage;
  addEduxChild2.textContent = descriptionVal;

  addEdux.append(addEdu2Tag, addEduxChild1, addEduxChild2);
}

/*********************************************************************************************************
 * @param
 * the function rendering the education form dynamically when user click on button
 * @returns
 **********************************************************************************************************/

function renderEducationForm() {
  const educationFormContainer = document.createElement("div");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

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
  qualification.setAttribute("id", "qualification");

  //creating school/collage
  let school = document.createElement("input");
  school.setAttribute("type", "text");
  school.setAttribute("placeholder", "school/collage");
  school.setAttribute("id", "school-collage");

  //creating description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");
  description.setAttribute("id", "description");

  //here appending the all elements
  educationFormContainer.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    qualification,
    school,
    description,
    saveBtn,
    cancelBtn
  );

  addedEdu.append(educationFormContainer);
}

addedEdu.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (clickedElement.textContent === "Save") {
    renderEducationCard();
    clearEducationForm();
  } else if (clickedElement.textContent === "Cancel") {
    addedEdu.innerHTML = "";
  }
});

addEducational.addEventListener("click", () => {
  if (addedEdu.children.length === 0) {
    renderEducationForm();
  }
});

// this is for Project Card Update form and creation card

const addPro = document.querySelector(".addPro");
/****************************************************************************************************
 * @param
 * clearProjectForm clearing the data from the form when user filled the details once
 * @returns
 *****************************************************************************************************/

function clearProjectForm() {
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("tittle").value = "";
  document.getElementById("description").value = "";
}

/******************************************************************************************************
 *@param
 the function rendering the project card dynamically when user click on button
 *@returns
*********************************************************************************************************/

function renderProjectCard() {
  const addPro2Tag = document.createElement("div");
  const addPro2TagChild1 = document.createElement("div");
  const addPro2TagChild2 = document.createElement("div");
  const addProChild1 = document.createElement("p");

  // getting value from renderEmploymentForm function----->
  const startDateVal = document.getElementById("startDate").value;
  const endDateVal = document.getElementById("endDate").value;
  const tittleVal = document.getElementById("tittle").value;
  const descriptionVal = document.getElementById("description").value;

  let liTag = document.createElement("li");
  let pTag1 = document.createElement("p");
  let pTag2 = document.createElement("p");

  liTag.textContent = tittleVal;
  addPro2TagChild1.append(liTag);
  pTag1.textContent = startDateVal;
  pTag2.textContent = endDateVal;
  addPro2TagChild2.append(pTag1, pTag2);

  addPro2Tag.classList.add("addPro2Tag");
  addPro2Tag.append(addPro2TagChild1, addPro2TagChild2);

  addProChild1.textContent = descriptionVal;

  addPro.append(addPro2Tag, addProChild1);
}

/********************************************************************************************************
 * @param
 * the function rendering the project form dynamically when user click on button
 * @returns
 *********************************************************************************************************/

function renderProjectForm() {
  const projectFormContainer = document.createElement("div");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

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
  employer.setAttribute("id", "employers");

  // creating textarea for description
  let description = document.createElement("textarea");
  description.setAttribute("placeholder", "description");
  description.setAttribute("id", "description");

  //here appending the all elements
  projectFormContainer.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    tittle,
    description,
    saveBtn,
    cancelBtn
  );
  addedPro.append(projectFormContainer);
}

addedPro.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (clickedElement.textContent === "Save") {
    renderProjectCard();
    clearProjectForm();
  } else if (clickedElement.textContent === "Cancel") {
    addedPro.innerHTML = "";
  }
});

addProject.addEventListener("click", () => {
  if (addedPro.children.length === 0) {
    renderProjectForm();
  }
});

// this is for addEmployee Card Update form and creation card

const addExp = document.querySelector(".addExp");
/****************************************************************************************************
 * @param
 * clearEmploymentForm clearing the data from the form when user filled the details once
 * @returns
 *****************************************************************************************************/

function clearEmploymentForm() {
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("tittle").value = "";
  document.getElementById("employer").value = "";
  document.getElementById("description").value = "";
}

/******************************************************************************************************
 *@param
 the function rendering the employee card dynamically when user click on button
 *@returns
*********************************************************************************************************/

function renderEmploymentCard() {
  const addExp2Tag = document.createElement("div");
  const addExp2TagChild1 = document.createElement("div");
  const addExp2TagChild2 = document.createElement("div");
  const addExpChild1 = document.createElement("p");
  const addExpChild2 = document.createElement("p");

  // getting value from renderEmploymentForm function----->
  const startDateVal = document.getElementById("startDate").value;
  const endDateVal = document.getElementById("endDate").value;
  const tittleVal = document.getElementById("tittle").value;
  const employerVal = document.getElementById("employer").value;
  const descriptionVal = document.getElementById("description").value;

  let liTag = document.createElement("li");
  let pTag1 = document.createElement("p");
  let pTag2 = document.createElement("p");

  liTag.textContent = tittleVal;

  addExp2TagChild1.append(liTag);
  pTag1.textContent = startDateVal;

  pTag2.textContent = endDateVal;
  addExp2TagChild2.append(pTag1, pTag2);

  addExp2Tag.classList.add("addExp2Tag");
  addExp2Tag.append(addExp2TagChild1, addExp2TagChild2);

  addExpChild1.textContent = employerVal;

  addExpChild2.textContent = descriptionVal;

  addExp.append(addExp2Tag, addExpChild1, addExpChild2);
}

/******************************************************************************************************
 *@param
 the function rendering the employee form dynamically when user click on button
 *@returns
*********************************************************************************************************/
function renderEmploymentForm() {
  const employmentFormContainer = document.createElement("div");
  const saveAndCancelBtn = document.createElement("div");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

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

  saveAndCancelBtn.append(saveBtn, cancelBtn);

  employmentFormContainer.append(
    labelStartDate,
    startDate,
    labelEndDate,
    endDate,
    tittle,
    employer,
    description,
    saveAndCancelBtn
  );

  addedEmp.append(employmentFormContainer);
}

addedEmp.addEventListener("click", (e) => {
  let clickedElement = e.target;
  if (clickedElement.textContent === "Save") {
    renderEmploymentCard();
    clearEmploymentForm();
  } else if (clickedElement.textContent === "Cancel") {
    addedEmp.innerHTML = "";
  }
});

addEmployment.addEventListener("click", () => {
  if (addedEmp.children.length === 0) {
    renderEmploymentForm();
  }
});
