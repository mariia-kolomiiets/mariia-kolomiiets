$(document).ready(function() {
 $('.full_website_page').fullpage();
 });
document.getElementById("but_registration").addEventListener('click', function(){
    console.log(document.getElementsByTagName('input')[2].value);
    console.log(document.getElementsByTagName('input')[3].value);
    console.log(document.getElementsByTagName('input')[4].value);
    console.log(document.getElementsByTagName('input')[5].value);
});
document.getElementById("but_joining").addEventListener('click', function(){
    console.log(document.getElementsByTagName('input')[6].value);
    console.log(document.getElementsByTagName('input')[7].value);
});
