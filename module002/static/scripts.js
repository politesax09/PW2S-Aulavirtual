var last_select = document.querySelector('#lastcourse');
const select = document.querySelector('#course');

select.onchange = function() {
    var selected_div = document.querySelector('#'+select.options[this.selectedIndex].value);
    if (last_select.value == "1"){
        last_select.value = select.options[this.selectedIndex].value;
        selected_div.style.display = "block";
    } else {
        var last_div = document.querySelector('#'+last_select.value);
        last_div.style.display = "none";
        selected_div.style.display = "block";
        last_select.value = selected_div.id;
    }
};