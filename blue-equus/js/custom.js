document.getElementById('nav-toggle').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    } else {
        navList.classList.add('active');
    }
});
