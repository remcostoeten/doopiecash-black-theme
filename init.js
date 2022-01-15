function themeSwitcher() {
    var themeSwitcher = document.createElement('a');
    var content = document.createTextNode('text dit is een');
    themeSwitcher.classList.add('theme');
    themeSwitcher.appendChild(content);
    document.getElementsByClassName('header-top-inner')[0].appendChild(themeSwitcher);
}
themeSwitcher();

var classVar = 'theme';
var clicktest = document.getElementsByClassName(classVar)[0];
var body = document.body;

clicktest.addEventListener('click', function red() {
    clicktest.style.backgroundColor = 'blue';
    clicktest, body.classList.toggle('dark-theme');
});


// start dropdown
var values = ["dark-theme", "white-theme"];

var select = document.createElement("select");
select.name = "pets";
select.id = "pets"

for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
}

var label = document.createElement("label");
label.innerHTML = "Choose your pets: "
label.htmlFor = "pets";

document.getElementById("container").appendChild(label).appendChild(select);

var classVar = 'theme';
var clicktest = document.getElementsByClassName(classVar)[0];

clicktest.addEventListener('click', function red() {
    clicktest.style.backgroundColor = 'blue';
    clicktest.classList.toggle('theme-switcher');
});
//  end dropdown
