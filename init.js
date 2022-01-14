function themeSwitcher() {
    var themeSwitcher = document.createElement('a');
    var content = document.createTextNode('text dit is een');
    themeSwitcher.classList.add('theme');
    themeSwitcher.appendChild(content);
    document.getElementsByClassName('ct-email')[0].appendChild(themeSwitcher);
}
themeSwitcher();

var classVar = 'theme';
var clicktest = document.getElementsByClassName(classVar)[0];
var body = document.body;

clicktest.addEventListener('click', function red() {
    clicktest.style.backgroundColor = 'blue';
    clicktest, body.classList.toggle('dark-theme');
});



// var themeSwitchter = document.createElement('a');
// var switcherContent = document.createTextNode('store switcher');

// themeSwitchter.append(switcherContent);
// themeSwitchter.classList.add('theme-switcher');

// function myFunc(variable){
//     var s = document.getElementById(variable);
//     s.value = "new value";
// }   
// myFunc("test");

// $(themeSwitchter).on("click", function () {



// document.getElementsByClassName('ct-email')[0].appendChild(themeSwitchter);
// $(function () {
//     $(themeSwitchter).on("click", function () {
//         $('#change_me').addClass("make_me_blue");
//         setTimeout(RemoveClass, 1000);
//     });

//     function RemoveClass() {
//         $('#change_me').removeClass("make_me_blue");
//     }
// });
// themeSwitchter.classList.add('theme-switcher');

// var querySelector = document.querySelector.classList.add('test123');
// document.querySelector('.active') {


// document.getElementsByClassName('site-header')[0].appendChild(themeSwitchter);

// themeSwitchter.appendChild(switcherContent);