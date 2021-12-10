// Light or Dark Mode

var toggleTheme = document.getElementsByClassName("toggle");

toggleTheme.onClick = function() {

    if (document.getElementsByTagName("body").className == "light-theme") {
        document.getElementsByTagName("body").className = "dark-theme";
    } else {
        document.getElementsByTagName("body").className = "light-theme";
    }

};

// Submit Fake Email

var submitFakeEmail = document.getElementById("frm-btn");

submitFakeEmail.onClick = function() {

    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("msg").value);

};