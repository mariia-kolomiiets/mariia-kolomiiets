var random = 1 + Math.floor(Math.random() * (7 - 1)); //какойто рандомный номер цвета сообщения для клиента

var colorOfTXT;
if(random===1){
    colorOfTXT = "#bac7ff";
}
else if(random===2){
    colorOfTXT = "#ebe649";
}
else if(random===3){
    colorOfTXT = "#e84848";
}
else if(random===4){
    colorOfTXT = "#f78b8b";
}
else if(random===5){
    colorOfTXT = "#5af74f";
}
else if(random===6){
    colorOfTXT = "#de5b86";
}
else{
    colorOfTXT = "#8ad6ff";
}


$(function() {

    var socket = io.connect();
    var $messStory = $("#allMess");//здесь храню объект документа где находятся все сообщения
    var $user = $("#name"); //это поле имени
    var $txtField = $("#message");//поле текстового сообщения
    var $form = $("#FormOfMess"); //форма


    $form.submit(function(event) {
        event.preventDefault();
        //созд.события нового сообщения
        //фактически шлет серверу введённые пользователем данные
        socket.emit('new message', {user: $user.val(),newMessage: $txtField.val(), messColor: colorOfTXT});
        $txtField.val('');//очистка поля
    });


    socket.on('resend messages', function(data) {
        //добавление сообщения в контейнер
        $messStory.append("<div class='newMess' style='color:" + data.messColor + "'><b>" + data.user + "</b>: " + data.newMessage + "</div>");
        $messStory[0].scrollTop = $messStory[0].scrollHeight -  $messStory[0].clientHeight; //скролит страницу сообщений вниз
    });

});