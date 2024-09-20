var _a;
// listing elements 
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create the resume output 
        var resumeOutput = "\n <h2>RESUME</h2>\n <p><strong>NAME  :</strong> ".concat(name_1, "</p>\n <p><strong>EMAIL :</strong> ").concat(email, "</p>\n <p><strong>PHONE  :</strong> ").concat(phone, "</p>\n  \n\n <h3>EDUCATION</h3>\n <p> ").concat(education, "</p>\n \n <h3>EXPERIENCE</h3>\n <p> ").concat(experience, "</p>\n\n <h3>Skills</h3>\n <p> ").concat(skills, "</p>\n\n\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('THE RESUME OUTPUT ELEMENTS ARE MISSING');
        }
    }
    else {
        console.error(" ONE OR MORE OUT PUT ELEMENTS ARE MISSING.");
    }
});
