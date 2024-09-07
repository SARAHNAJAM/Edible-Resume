"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    const educationElement = document.getElementById('education');
    const workExperienceElement = document.getElementById('work-experience');
    // Function to update the resume output
    const updateResume = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const education = educationElement.innerText;
        const workExperience = workExperienceElement.innerText;
        const skills = document.getElementById('skills').value;
        const resumeData = { name, email, education, workExperience, skills };
        resumeOutput.innerHTML = `
            <h2>${resumeData.name}</h2>
            <p>Email: ${resumeData.email}</p>
            <h3>Education</h3>
            <p>${resumeData.education}</p>
            <h3>Work Experience</h3>
            <p>${resumeData.workExperience}</p>
            <h3>Skills</h3>
            <p>${resumeData.skills}</p>
        `;
    };
    // Update resume on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        updateResume();
    });
    // Update resume on input change
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updateResume);
    });
    // Update resume on content-editable change
    const editableSections = document.querySelectorAll('.editable-section');
    editableSections.forEach(section => {
        section.addEventListener('input', updateResume);
    });
    // Initial update
    updateResume();
});
