let ham = document.getElementById('ham');
let close = document.getElementById('close');

ham.addEventListener('click', function () {
        document.getElementById("sidenav").style.width = "15vw";
});

close.addEventListener('click', function () {
    document.getElementById('sidenav').style.width = '0vw';
});