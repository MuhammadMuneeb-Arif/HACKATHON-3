// listing elements 
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
        event.preventDefault();


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create the resume output 
        const resumeOutput = `
 <h2>RESUME</h2>
 <p><strong>NAME  :</strong> ${name}</p>
 <p><strong>EMAIL :</strong> ${email}</p>
 <p><strong>PHONE  :</strong> ${phone}</p>
  

 <h3>EDUCATION</h3>
 <p> ${education}</p>
 
 <h3>EXPERIENCE</h3>
 <p> ${experience}</p>

 <h3>Skills</h3>
 <p> ${skills}</p>


`;
        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
        } else {
            console.error('THE RESUME OUTPUT ELEMENTS ARE MISSING')
        }

    } else{
        console.error(" ONE OR MORE OUT PUT ELEMENTS ARE MISSING.")
    }
})