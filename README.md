# Dynamic Student Event Registration System

## Overview

The Dynamic Student Event Registration System is a responsive web application developed using HTML, CSS, JavaScript, and JSON. The project was designed to allow students register for university events through an interactive multi-step registration form.

The application dynamically changes form fields based on the selected academic level (Undergraduate or Postgraduate) without reloading the page. It also includes custom validation logic, asynchronous data handling, and a modern user-friendly interface.

---

# Features

- Responsive modern UI
- Modal popup registration form
- Multi-step form navigation
- Dynamic rendering of fields
- Asynchronous department loading using JSON
- Custom matric number validation
- Date of birth validation
- Form submission validation
- Animated emoji background
- Mobile-friendly design

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON
- Fetch API

---

# Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js
├── departments.json
├── report.pdf
└── README.md



How It Works
Dynamic Rendering

The system dynamically displays specific form fields based on the selected academic level:

Undergraduate students see the Hostel Name field.
Postgraduate students see the Last Institution field.

This functionality is implemented using JavaScript event listeners and DOM manipulation.

JSON Department Loading

Department data is stored inside a departments.json file and loaded dynamically into the department dropdown using the JavaScript Fetch API with async/await.

Validation

The application validates:

Required fields
Matric number format
Date of birth requirements
Academic-level-specific fields
Installation
Clone the repository
git clone https://github.com/yourusername/your-repository-name.git
Open the project folder
Run the application using Live Server or any local server
Author

juliet Ibeh

License

This project was developed for academic purposes