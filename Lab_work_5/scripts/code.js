$(function() {
    $("button").click(function() {
        // Console.log("SSSSSSSSS");
        var name = $("#userName").val();
        var age = $("#userAge").val();

        let js = JSON.stringify({ name: name, age: age, btn: $(this).text().split(' ')[1] });

        let request = new XMLHttpRequest();

        request.open("POST", "/user", true);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener("load", function() {
            $(".div_text").text(request.response);
        });
        request.send(js);

    })
})