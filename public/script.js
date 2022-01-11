var socket = io();

socket.emit('joining msg', name);

$('form').submit(function (e) {
    e.preventDefault();            // will prevent page reloading
    if ($('#m').val()) {
        socket.emit('chat message', (name + ':  ' + $('#m').val()));
        $('#messages').append($('<li id="list">').text($('#m').val()));
        $('#messages').append($('<br><br>'))
        $('#m').val('');
        return false;
    }
});

socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg));
});

$("#m").keypress(function (e) {
    if (e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        $(this).closest("form").submit();
    }
});
