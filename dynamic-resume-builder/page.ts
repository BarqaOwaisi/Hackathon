const resume = document.getElementById('resume') as HTMLFormElement;
const display =document.getElementById('display') as HTMLDivElement;

resume.addEventListener('submit', (event : Event)=> {
    event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value
    const contactDetails = (document.getElementById('contactDetails') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const  workExperience = (document.getElementById('workExperience') as HTMLInputElement).value
  

    const profileImage = (document.getElementById('profileImage') as HTMLImageElement).src;



    const genResume = `
    <h2><b>Personal Information</b></h2>
    <p><b>Name:</b>${name}</p>
    <p><b>Contact Details:</b>${contactDetails}</p>
    <p><b>Email:</b>${email}</p>
    
    <br>

    ${profileImage ? `<img src="${profileImage}" alt="Profile Image" style="width:150px;height:150px;">` : ''}

    <h2><b>Education</b></h2>
    <p>${education}</p>

    <br>

    <h2><b>Skills</b></h2>
    <p>${skills}</p>
    
    <br>

    <h2><b>Work Experience</b></h2>
    <p>${workExperience}</p>`



    if (display){
        display.innerHTML = genResume;
    }else {
        console.error('error')
    }

})

function uploadProfilePicture(): void {
    const input = document.getElementById('profileUpload') as HTMLInputElement;
    const profileImage = document.getElementById('profileImage') as HTMLImageElement;
    const fileLabel = document.getElementById('fileLabel') as HTMLElement; 

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>): void {
            profileImage.src = e.target?.result as string; 
        };
        reader.readAsDataURL(input.files[0]); 

        
        fileLabel.style.display = 'none';
    }
}


