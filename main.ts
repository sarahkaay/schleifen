input.onButtonPressed(Button.A, function () {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            led.plot(index_x, index_y)
            basic.pause(200)
            led.unplot(index_x, index_y)
        }
    }
})
