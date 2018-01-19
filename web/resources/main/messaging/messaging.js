var Messaging = {
    showMessage: function(message_id, title, message) {
        var titleLimit = 45;

        if(title.length > titleLimit) {
            title = title.substring(0,(titleLimit - 1));
            title += '...';
        }

        var element = '';
        element += '<div class="modal-message" id="modal_message' + message_id + '">';
        element += '    <div class="modal-message-background"></div>';
        element += '    <div class="modal-message-content">';
        element += '        <p class="modal-message-title" >' + title + '</p>';
        element += '        <div class="modal-message-body">';
        element += '            <p class="modal-message-text">' + message + '</p>';
        element += '            <a href="javascript:void(0);" onclick="$(\'#modal_message' + message_id + '\').remove();">Ok</a>';
        element += '        </div>';
        element += '    </div>';
        element += '</div>';
        
        if($('#modal_message'+message_id).css('display') == undefined) {
            $('body').append(element);
            $('#modal_message' + message_id).fadeIn();
        }
    },
    _toast_time: 2000,
    toast: function(message, time) {
        var element = '';
        element+='<div class="toast">';
        element+='    <div class="toast-background"></div>';
        element+='    <p class="toast-message">'+message+'</p>';
        element+='</div>';
        $('body').append(element);
        $('.toast').fadeToggle('slow',function() {
            setTimeout(function() {
                $('.toast').fadeToggle('slow',function() {
                    $('.toast').remove();
                });
            },time?time:Messaging._toast_time);
        });
    }
}