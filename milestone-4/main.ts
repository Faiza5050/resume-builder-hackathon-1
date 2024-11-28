document.addEventListener("DOMContentLoaded", () => {

    const generateButton = document.getElementById("generateResume") as HTMLButtonElement;

    generateButton.addEventListener("click", () => {
        
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value.split(',').map(education => education.trim());
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.split(',').map(experience => experience.trim());
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(',').map(skill => skill.trim());

        const resumeContent = `
        <html>
            <head>
                <title>Editable Resume</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f7f6;
                        color: #333;
                        line-height: 1.6;
                        padding: 20px;
                        border: 25px double;
                        width: 50%;
                        margin-left: 300px;
                        justify-content: center;
                    }
                    h1 {
                        text-align: center;
                        font-size: 40px;
                        margin-bottom: 20px;
                        color: #333;
                        width: 100%;
                        border-radius: 10px;
                        background-color: rgb(209, 200, 200);
                    }
                    h2 {
                        font-size: 35px;
                        background-color: #444;
                        margin-bottom: 20px;
                        border-radius: 8px;
                        color: #333;
                        color: white;
                        width: 60%;
                        padding-left: 10px;
                    }
                    .resume-section {
                        margin-bottom: 20px;
                    }
                    .resume-section h3 {
                        margin-top: 0;
                    }
                    li {
                        margin: 5px 0;
                    }
                    legend {
                        box-shadow: 5px 5px 5px 5px;
                        border-radius: 5px;
                        padding: 10px 3px 10px 3px;
                        background-color: #918583;
                        font-weight: bold;
                        font-size: 25px;
                    }
                    p {
                        padding: 10px;
                        font-size: 16px;
                        border: 1px solid #cf9898;
                        border-radius: 10px;
                        outline: none;
                        transition: border 0.3s ease;
                        padding-left: 10px;
                        width: 95%;
                        background-color: rgb(209, 200, 200);
                    }
                    strong {
                        font-weight: bold;
                        font-size: 30px;
                    }
                </style>
            </head>

            <body>
                <h1><u>~ Editable Resume ~</u></h1>
                
                <div class="resume-section">
                    <h2>Personal Information</h2>
                    <legend>
                        <p contenteditable="true"><strong>Name:</strong> ${name}</p>
                        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
                        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
                    </legend>
                </div>
                
                <div class="resume-section">
                    <h2>Education</h2>
                    <legend> 
                        ${education.map(education => `<p contenteditable="true">${education}</p>`).join('')}
                    </legend>
                </div>

                <div class="resume-section">
                    <h2>Work Experience</h2>
                    <legend>
                        ${experience.map(experience => `<p contenteditable="true">${experience}</p>`).join('')}
                    </legend>
                </div>

                <div class="resume-section">
                    <h2>Skills</h2>
                    <legend>
                        ${skills.map(skills => `<p contenteditable="true">${skills}</p>`).join('')}
                    </legend>
                </div>
                
            </body>
        </html>
        `;

        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(resumeContent);
            newWindow.document.close();
        }

    });
});
