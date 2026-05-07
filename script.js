// =========================
// SELECT HTML ELEMENTS
// =========================

// DEPARTMENT DROPDOWN
const departmentSelect = document.getElementById("department");

// ACADEMIC LEVEL
const academicLevel = document.getElementById("academicLevel");

// DYNAMIC FIELDS
const hostelField = document.getElementById("hostelField");

const institutionField = document.getElementById("institutionField");



// =========================
// MODAL ELEMENTS
// =========================
const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const registrationModal = document.getElementById("registrationModal");


// =========================
// OPEN MODAL
// =========================
openModalBtn.addEventListener("click", () => {

    registrationModal.style.display = "flex";

});


// =========================
// CLOSE MODAL
// =========================
closeModalBtn.addEventListener("click", () => {

    registrationModal.style.display = "none";

});


// =========================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =========================
window.addEventListener("click", (event) => {

    if (event.target === registrationModal) {

        registrationModal.style.display = "none";
    }

});

// =========================
// MULTI STEP FORM ELEMENTS
// =========================
const step1 = document.getElementById("step1");

const step2 = document.getElementById("step2");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");


// STEP INDICATORS
const stepIndicator1 = document.getElementById("stepIndicator1");

const stepIndicator2 = document.getElementById("stepIndicator2");


// =========================
// NEXT BUTTON
// =========================
nextBtn.addEventListener("click", () => {

    // HIDE STEP 1
    step1.classList.remove("active-step");

    // SHOW STEP 2
    step2.classList.add("active-step");


    // UPDATE STEP INDICATORS
    stepIndicator1.classList.remove("active");

    stepIndicator2.classList.add("active");

});


// =========================
// PREVIOUS BUTTON
// =========================
prevBtn.addEventListener("click", () => {

    // SHOW STEP 1
    step1.classList.add("active-step");

    // HIDE STEP 2
    step2.classList.remove("active-step");


    // UPDATE STEP INDICATORS
    stepIndicator1.classList.add("active");

    stepIndicator2.classList.remove("active");

});


// =========================
// FETCH DEPARTMENTS FUNCTION
// =========================
async function loadDepartments() {

    try {

        // FETCH JSON FILE
        const response = await fetch("departments.json");


        // CHECK FOR FETCH ERRORS
        if (!response.ok) {
            throw new Error("Failed to fetch department data.");
        }


        // CONVERT RESPONSE TO JSON
        const data = await response.json();


        // CLEAR EXISTING OPTIONS
        departmentSelect.innerHTML = `
            <option value="">
                -- Select Department --
            </option>
        `;


        // LOOP THROUGH DEPARTMENTS
        data.departments.forEach((department) => {

            // CREATE OPTION ELEMENT
            const option = document.createElement("option");

            // SET OPTION VALUE
            option.value = department;

            // SET OPTION TEXT
            option.textContent = department;

            // APPEND OPTION TO SELECT
            departmentSelect.appendChild(option);

        });

    } catch (error) {

        // HANDLE ERRORS
        console.error("Error loading departments:", error);

        // DISPLAY ERROR OPTION
        departmentSelect.innerHTML = `
            <option value="">
                Unable to load departments
            </option>
        `;
    }
}


// =========================
// UPDATE DYNAMIC FIELDS
// =========================
function updateAcademicFields() {

    // GET SELECTED VALUE
    const selectedLevel = academicLevel.value;


    // =========================
    // UNDERGRADUATE
    // =========================
    if (selectedLevel === "undergraduate") {

        // SHOW HOSTEL FIELD
        hostelField.classList.remove("hidden");

        // HIDE INSTITUTION FIELD
        institutionField.classList.add("hidden");
    }


    // =========================
    // POSTGRADUATE
    // =========================
    else if (selectedLevel === "postgraduate") {

        // SHOW INSTITUTION FIELD
        institutionField.classList.remove("hidden");

        // HIDE HOSTEL FIELD
        hostelField.classList.add("hidden");
    }


    // =========================
    // NO SELECTION
    // =========================
    else {

        // HIDE BOTH FIELDS
        hostelField.classList.add("hidden");

        institutionField.classList.add("hidden");
    }
}


// =========================
// EVENT LISTENER
// =========================
academicLevel.addEventListener("change", updateAcademicFields);


// =========================
// PAGE LOAD EVENTS
// =========================
document.addEventListener("DOMContentLoaded", () => {

    // LOAD DEPARTMENTS
    loadDepartments();

    // INITIALIZE FIELD STATE
    updateAcademicFields();

});