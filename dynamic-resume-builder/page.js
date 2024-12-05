var resume = document.getElementById('resume');
var display = document.getElementById('display');
resume.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var contactDetails = document.getElementById('contactDetails').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('workExperience').value;
    var profileImage = document.getElementById('profileImage').src;
    var genResume = "\n    <h2><b>Personal Information</b></h2>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Contact Details:</b>").concat(contactDetails, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    \n    <br>\n\n    ").concat(profileImage ? "<img src=\"".concat(profileImage, "\" alt=\"Profile Image\" style=\"width:150px;height:150px;\">") : '', "\n\n    <h2><b>Education</b></h2>\n    <p>").concat(education, "</p>\n\n    <br>\n\n    <h2><b>Skills</b></h2>\n    <p>").concat(skills, "</p>\n    \n    <br>\n\n    <h2><b>Work Experience</b></h2>\n    <p>").concat(workExperience, "</p>");
    if (display) {
        display.innerHTML = genResume;
    }
    else {
        console.error('error');
    }
});
function uploadProfilePicture() {
    var input = document.getElementById('profileUpload');
    var profileImage = document.getElementById('profileImage');
    var fileLabel = document.getElementById('fileLabel'); // Get the file label element
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Update the profile image's src
        };
        reader.readAsDataURL(input.files[0]); // Read the uploaded file
        // Hide the "Choose file" label once the image is selected
        fileLabel.style.display = 'none';
    }
}
