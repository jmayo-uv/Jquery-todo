$(document).ready(() => {

    function getUID() {
        var i, random;
        var uuid = '';
    
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }
    
        return uuid;
        }

    const ENTER_KEY = 13
   // const ESCAPE_KEY = 27

    $('.container-input-todo').on('keypress', '#input-todo', (e) => {
        let inputValue = $('#input-todo').val().trim()
        if(e.which === ENTER_KEY && inputValue) {
            var todoChildren = $('#todo-list').children().length
            var valueUID = getUID()
            let NewTodo = '<li id="'+valueUID+'"><input class="toggle" id="'+valueUID+'" type="checkbox"> <input type="text" value="'+inputValue+'" class="todo-item-input" readonly="readonly"><button class="destroy" data-id="'+valueUID+'">X</button></li>'
            if(todoChildren < 1){
                $('.main-todo').show()
                $('.footer').css('display','flex')
            }
            $('.todo-list').append(NewTodo)
            $('.counter').html(todoChildren+1 +' task')
        }
    })

    $('.todo-list').on('click', '.destroy', (e) => {
        e.preventDefault()
        taskSelected = $(e.target).parent().remove()
        var todoChildren = $('.todo-list').children().length
        $('.counter').html(todoChildren +' task')

    })

    $('.container').on('click', '.all', () => {
        return todoList = $('.todo-list').children().show()
    })

    $('.container').on('click', '.active', () => {
        todoList = $('.todo-list').children().show()
        selected = $('.toggle:checked').each(
        function () {
            return $(this).parent().hide()
        })
    })

    $('.container').on('click', '.completed', () => {
        todoList = $('.todo-list').children().show()
        selected = $('.toggle').each(
        function () {
                if(!$(this).is(':checked')){
                    return $(this).parent().hide()
                }

        })
    })

    $('.container').on('click', '.clear-all', () => {
        let todoList = $('.todo-list').children().remove()
        var todoChildren = $('.todo-list').children().length
        $('.counter').html(todoChildren +' task')
    })

    

})