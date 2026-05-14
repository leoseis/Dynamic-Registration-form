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



// =========================
// FORM ELEMENT
// =========================
const registrationForm = document.getElementById("registrationForm");


// =========================
// FORM SUBMISSION
// =========================
registrationForm.addEventListener("submit", function (event) {

    // PREVENT PAGE REFRESH
    event.preventDefault();


    // =========================
    // GET FORM VALUES
    // =========================
    const level = academicLevel.value;

    const matricNumber = document
        .getElementById("matricNumber")
        .value
        .trim();

    const fullName = document
        .getElementById("fullName")
        .value
        .trim();

    const dateOfBirth = document
        .getElementById("dateOfBirth")
        .value;

    const department = departmentSelect.value;

    const hostelName = document
        .getElementById("hostelName")
        .value
        .trim();

    const lastInstitution = document
        .getElementById("lastInstitution")
        .value
        .trim();


    // =========================
    // BASIC VALIDATION
    // =========================
    if (
        level === "" ||
        matricNumber === "" ||
        fullName === "" ||
        dateOfBirth === "" ||
        department === ""
    ) {

        alert("Please fill in all required fields.");

        return;
    }


    // =========================
    // UNDERGRADUATE VALIDATION
    // =========================
    if (level === "undergraduate" && hostelName === "") {

        alert("Please enter hostel name.");

        return;
    }


    // =========================
    // POSTGRADUATE VALIDATION
    // =========================
    if (level === "postgraduate" && lastInstitution === "") {

        alert("Please enter last institution attended.");

        return;
    }


    /// =========================
// DATE OF BIRTH VALIDATION
// =========================
const today = new Date();

const birthDate = new Date(dateOfBirth);

let age = today.getFullYear() - birthDate.getFullYear();

const monthDifference =
    today.getMonth() - birthDate.getMonth();


// CHECK IF BIRTHDAY HAS NOT OCCURRED YET THIS YEAR
if (
    monthDifference < 0 ||
    (
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate()
    )
) {
    age--;
}


// =========================
// UNDERGRADUATE AGE CHECK
// =========================
if (level === "undergraduate" && age >= 25) {

    alert(
        "Undergraduate students must be younger than 25 years old."
    );

    return;
}


// =========================
// POSTGRADUATE AGE CHECK
// =========================
if (level === "postgraduate" && age < 22) {

    alert(
        "Postgraduate students must be at least 22 years old."
    );

    return;
}


// =========================
// SUCCESS MESSAGE
// =========================
alert("Registration Successful!");


    // =========================
    // RESET FORM
    // =========================
    registrationForm.reset();


    // =========================
    // RESET DYNAMIC FIELDS
    // =========================
    updateAcademicFields();


    // =========================
    // RETURN TO STEP 1
    // =========================
    step1.classList.add("active-step");

    step2.classList.remove("active-step");


    // =========================
    // RESET STEP INDICATORS
    // =========================
    stepIndicator1.classList.add("active");

    stepIndicator2.classList.remove("active");


    // =========================
    // CLOSE MODAL
    // =========================
    registrationModal.style.display = "none";

});


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