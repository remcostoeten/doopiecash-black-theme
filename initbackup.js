function themeSwitcher() {
    var themeSwitcher = document.createElement('a');
    var content = document.createTextNode('Selecteer donker thema');
    // themeSwitcher.classList.add('theme-selector');
    themeSwitcher.id ="select-theme";

    themeSwitcher.appendChild(content);
    document.getElementsByClassName('header-top-inner')[0].appendChild(themeSwitcher);
}
themeSwitcher();

var classvar = 'select-theme';
var colorToggle = document.getElementById(classvar);
var body = document.body;

colorToggle.addEventListener('click', function red() {
    colorToggle, body.classList.toggle('dark-theme');
});

// start dropdown

var themeSelect = document.getElementById("select-theme");

//Create array of options to be added
var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
document.getElementById('select-theme').classList.add('select');
themeSelect.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
    selectList.add(option);
}
// var values = ["dark-theme", "white-theme"];
// var select = document.createElement("select");

// for (const val of values) {
//     var option = document.createElement("option");
//     option.value = val;
//         option.text = val.charAt(0).toUpperCase() + val.slice(1);
//         option.classList.add(val);
//         select.appendChild(option);
// }

// var label = document.createElement("div");
// document.getElementById("select-theme").appendChild(label).appendChild(select);
// label.id ="test";


//  end dropdown