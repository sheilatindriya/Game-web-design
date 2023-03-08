$(document).ready(() => {
    $('.right').on('click', () => {
        let curr = $('.active')
        let next = curr.next()

        if (next.length) {
            curr.removeClass('active').css('z-index', -1)
            next.addClass('active').css('z-index', 5)
        }
    })
})