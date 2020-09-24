input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        haloDisplay.rotate(1)
        basic.pause(5)
        haloDisplay.show()
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        haloDisplay.rotate(1)
        basic.pause(40)
        haloDisplay.show()
    }
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.showRainbow(1, 360)
basic.forever(function () {
	
})
