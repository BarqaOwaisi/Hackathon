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
    var genResume = "\n    <h2><b>Personal Information</b></h2>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Contact Details:</b><span contenteditable=\"true\">").concat(contactDetails, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    \n    <br>\n\n    ").concat(profileImage ? "<img src=\"".concat(profileImage, "\" alt=\"Profile Image\" style=\"width:150px;height:150px;\">") : '', "\n\n    <h2><b>Education</b></h2>\n    <p><span contenteditable=\"true\">").concat(education, "</span></p>\n\n    <br>\n\n    <h2><b>Skills</b></h2>\n    <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n    \n    <br>\n\n    <h2><b>Work Experience</b></h2>\n    <p><span contenteditable=\"true\">").concat(workExperience, "</span></p>");
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
    var fileLabel = document.getElementById('fileLabel');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
