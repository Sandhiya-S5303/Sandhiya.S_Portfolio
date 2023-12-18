
document.addEventListener("DOMContentLoaded", function() {
    var linkedinLink = document.querySelector('.fab.fa-linkedin');
    var facebookLink = document.querySelector('.fab.fa-facebook');
    var githubLink = document.querySelector('.fab.fa-github');
    var emailLink = document.querySelector('.far.fa-envelope');

   
    linkedinLink.addEventListener('click', function() {
        alert(" Redirecting to Sandhiya'S LinkedIn profile link!");
    });

    
    facebookLink.addEventListener('click', function() {
        alert(" Redirecting to Sandhiya'S Facebook profile link!");
    });

    githubLink.addEventListener('click', function() {
        alert(" Redirecting to Sandhiya'S GitHub profile link!");
    });

    emailLink.addEventListener('click', function() {
        alert(" Redirecting to Sandhiya'S Email !");
    });
});
