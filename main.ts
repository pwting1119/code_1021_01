basic.forever(function () {
    for (let J = 0; J <= 8; J++) {
        for (let I = 0; I <= 4; I++) {
            led.plot(4 - I, 4 - (J - I))
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
