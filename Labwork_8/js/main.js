var counter = 0;
var counter_sec = 0;
var clear_html = document.getElementsByClassName("form")[0].innerHTML;
function showMessage() {
    let button_firstrow = document.getElementsByName("add_first")
    for (var i = 0; i < button_firstrow.length; i++) {
        button_firstrow[i].addEventListener("click", function(){
            counter += 1;
            let parent_html = document.getElementsByClassName("first");

            var html_in = '<div class="col-md-4 mb-3 '+counter+'" id="db'+counter+'" ><label for="validationTooltip01">First name</label> <input type="text" class="form-control '+counter+'" id="validationTooltip01" placeholder="First name" value="Mark" required> <div class="valid-tooltip"> Looks good!</div></div><div class="col-md-4 mb-3 '+counter+'" id="dbv'+counter+'" > <label for="validationTooltip02">Last name</label><input type="text" class="form-control '+counter+'" id="validationTooltip02" placeholder="Last name" value="Otto" required><div class="valid-tooltip">Looks good!</div></div><div class="add_form '+counter+'" id="dbds'+counter+'" ><label for="validationServer02">Press to add rows</label><button type="button" name="add_first" id="but'+counter+'" class="btn btn-primary but_nam_sur">Add</button><label for="validationServer02">Press to delete rows</label><button type="button" name="delete_first"  id="but'+counter+'"  class="btn btn-primary">Delete</button></div>'

            document.getElementsByClassName("first")[0].innerHTML = document.getElementsByClassName("first")[0].innerHTML + html_in;
            dellRowss();
            showMessage();
         })
     }
}

function dellRowss() {
    let button_del_firstrow = document.getElementsByName("delete_first");

    for (var i = 0; i < button_del_firstrow.length; i++) {
        button_del_firstrow[i].addEventListener("click", function(){
            let num_element = event.target.id.slice(-1);
            var elem = document.querySelector("#dbds"+num_element);
            elem.remove();
            var elem = document.querySelector("#db"+num_element);
            elem.remove();
            var elem = document.querySelector("#dbv"+num_element);
            elem.remove();
         })
     }

}
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
function second_add() {
    let button_firstrow = document.getElementsByName("add_secod")
    for (var i = 0; i < button_firstrow.length; i++) {
        button_firstrow[i].addEventListener("click", function(){
            counter_sec += 1;
            let parent_html = document.getElementsByClassName("second");

            var html_in = '<div class="col-md-6 mb-3 '+counter_sec+'" id="sdb'+counter_sec+'" ><label for="validationTooltip03">City</label><input type="text" class="form-control '+counter_sec+'" id="validationTooltip03" placeholder="City" required><div class="invalid-tooltip">Please provide a valid city.</div></div><div class="col-md-3 mb-3 '+counter_sec+'" id="sdbv'+counter_sec+'" ><label for="validationTooltip04">State</label><input type="text" class="form-control '+counter_sec+'" id="validationTooltip04" placeholder="State" required><div class="invalid-tooltip">Please provide a valid state.</div></div><div class="add_form '+counter_sec+'" id="sdbds'+counter_sec+'" ><label for="validationServer02">Press to add rows</label><button type="button" name="add_secod" id="sbut'+counter_sec+'" class="btn btn-primary but_nam_sur">Add</button><label for="validationServer02">Press to delete rows</label><button type="button" name="delete_second" id="sbut'+counter_sec+'"  class="btn btn-primary">Delete</button></div>'

            document.getElementsByClassName("second")[0].innerHTML = document.getElementsByClassName("second")[0].innerHTML + html_in;
            dell_second_Rows();
            second_add();
         })
     }
}
function dell_second_Rows() {
    let button_del_secrow = document.getElementsByName("delete_second");

    for (var i = 0; i < button_del_secrow.length; i++) {
        button_del_secrow[i].addEventListener("click", function(){
            let num_element = event.target.id.slice(-1);
            var elem = document.querySelector("#sdbds"+num_element);
            elem.remove();
            var elem = document.querySelector("#sdb"+num_element);
            elem.remove();
            var elem = document.querySelector("#sdbv"+num_element);
            elem.remove();
         })
     }
}

function clear_all_f() {
    let clear_all_button = document.getElementsByName("clear_all");
    clear_all_button[0].addEventListener("click", function(){
        count = 0;
        counter_sec = 0;
        document.getElementsByClassName("form")[0].innerHTML = clear_html;
    })}
showMessage();
second_add();
clear_all_f();
