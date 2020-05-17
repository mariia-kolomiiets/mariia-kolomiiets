$(".post_button").click(function(event) {

        event.preventDefault();

        var data_to_send = { first: $("#first").val(), second: $("#second").val(), third: $("#third").val(), fourth: $("#fourth").val(), fifth: $("#fifth").val(), choice: $(this).text()};
        
        $.ajax({

            url: "/check",
            type: "post",
            datatype: "json",
            data: data_to_send,
            success: function(data_from_server){
                $("#a_first").text(data_from_server[0].first);
                $("#a_second").text(data_from_server[0].second);
                $("#a_third").text(data_from_server[0].third);
                $("#a_fourth").text(data_from_server[0].fourth);
                $("#a_fifth").text(data_from_server[0].fifth);
            },
            error: function(){
                console.log("No response data from server!");

            }
        });

    });