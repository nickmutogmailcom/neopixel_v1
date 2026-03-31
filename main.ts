input.onButtonPressed(Button.A, function () {
    if (attesa > 100) {
        attesa += -100
    } else {
        c_blu = 0
        c_green = 100
        c_red = 0
        strip.showColor(neopixel.rgb(c_red, c_green, c_blu))
        basic.pause(500)
        attesa = 1000
    }
    CambioColore = 0
})
input.onButtonPressed(Button.B, function () {
    attesa = 1000
    if (CambioColore == 0) {
        c_blu = 100
        c_green = 0
        c_red = 0
    } else if (CambioColore == 1) {
        c_blu = 0
        c_green = 0
        c_red = 100
    } else if (CambioColore == 2) {
        c_blu = 0
        c_green = 100
        c_red = 100
    } else {
        c_blu = 100
        c_green = 100
        c_red = 100
    }
    CambioColore += 1
})
let CambioColore = 0
let c_red = 0
let c_green = 0
let c_blu = 0
let strip: neopixel.Strip = null
let attesa = 0
attesa = 1000
strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
strip.setBrightness(100)
c_blu = 0
c_green = 100
c_red = 0
basic.forever(function () {
    for (let indice = 0; indice <= 7; indice++) {
        strip.clear()
        strip.setPixelColor(indice, neopixel.rgb(c_red, c_green, c_blu))
        strip.show()
        basic.pause(attesa)
    }
})
