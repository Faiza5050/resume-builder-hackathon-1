document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateResume") as HTMLButtonElement;

    generateButton.addEventListener("click", () => {
        
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value.split(',').map(e => e.trim());
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.split(',').map(e => e.trim());
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(',').map(e => e.trim());

        const resumeContent = `
        <html>
            <head>
                <title>Shareable Resume Builder</title>
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
                    #downloadPdfBtn {
                        background-color: #ff6347;
                        color: #fff;
                        font-size: 25px;
                        padding: 10px;
                        border: none;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                        align-self: center;
                        margin-bottom: 10px;
                    }
                    #downloadPdfBtn:hover {
                        background-color: #e53e2f;
                    }
                    strong {
                        font-weight: bold;
                        font-size: 30px;
                    }

                    @media (max-width: 320px) {
                        body {
                            width: 100%;
                            margin-left: 0;
                            padding: 5px;
                        }
                        h1 {
                            font-size: 20px;
                        }
                        h4 {
                            font-size: 18px;
                        }
                        label {
                            font-size: 12px;
                        }
                        input, textarea {
                            font-size: 12px;
                            padding-left: 10px;
                        }
                        button {
                            font-size: 14px;
                            padding: 8px;
                        }
                        #downloadPdfBtn {
                            font-size: 14px;
                            padding: 8px;
                        }
                        legend {
                            font-size: 18px;
                        }
                        h2 {
                            font-size: 22px;
                        }
                        .resume-section {
                            margin-bottom: 10px;
                        }
                    }

                    @media (max-width: 768px) {
                        body {
                            margin-left: 0;
                            width: 100%;
                            border: none;
                        }
                        h1 {
                            font-size: 28px;
                        }
                        h4 {
                            font-size: 24px;
                        }
                        label {
                            font-size: 14px;
                        }
                        input, textarea {
                            font-size: 14px;
                            padding-left: 12px;
                        }
                        button {
                            font-size: 16px;
                            width: 100%;
                            padding: 10px;
                        }
                        #downloadPdfBtn {
                            font-size: 16px;
                            width: 100%;
                            padding: 10px;
                        }
                        legend {
                            font-size: 22px;
                        }
                        h2 {
                            font-size: 28px;
                        }
                        .resume-section {
                            margin-bottom: 15px;
                        }
                    }

                </style>
            </head>
            <body>
                <h1><u>~ Shareable Resume ~</u></h1>

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
                        ${education.map(degree => `<p contenteditable="true">${degree}</p>`).join('')}
                    </legend>
                </div>

                <div class="resume-section">
                    <h2>Work Experience</h2>
                    <legend>
                        ${experience.map(job => `<p contenteditable="true">${job}</p>`).join('')}
                    </legend>
                </div>

                <div class="resume-section">
                    <h2>Skills</h2>
                    <legend>
                        ${skills.map(skill => `<p contenteditable="true">${skill}</p>`).join('')}
                    </legend>
                </div>

                <div style="text-align:center; margin-top: 30px;">
                    <button id="downloadPdfBtn"><b>Download PDF</b></button><br>
                    <a href="#" id="shareableLink" target="_blank"><button>Get Shareable Link</button></a>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
            </body>
        </html>
        `;

        localStorage.setItem('resumeContent', resumeContent);
        
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(resumeContent);
            newWindow.document.close();

            const downloadBtn = newWindow.document.getElementById("downloadPdfBtn") as HTMLButtonElement;
            if (downloadBtn) {
                downloadBtn.addEventListener("click", () => {
                    const options = {
                        filename: `${username}_resume.pdf`,
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                    };

                    newWindow.html2pdf().from(newWindow.document.body).set(options).save();
                });
            };

            const shareLink = newWindow.document.getElementById("shareableLink") as HTMLAnchorElement;
            if (shareLink) {
                const shareableUrl = window.location.href + `?resume=${username}`;
                shareLink.href = shareableUrl;
                shareLink.textContent = `Share Your Resume: ${shareableUrl}`;
            }
        } else {
            alert("Popup blocked! Please enable popups in your browser.");
        };

    });
});

const params = new URLSearchParams(window.location.search);
if (params.has('resume')) {
    const resumeContent = localStorage.getItem('resumeContent');
    if (resumeContent) {
        document.body.innerHTML = resumeContent;
    };
};
