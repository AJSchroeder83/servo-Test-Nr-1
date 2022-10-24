input.onButtonPressed(Button.A, function () {
	
})
let LichtWest = 0
let LichtOst = 0
let Position = 180
basic.forever(function () {
    LichtOst = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    LichtWest = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100)
    if (LichtOst > LichtWest) {
        if (Position > 0) {
            Position = Position - 1
        }
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (LichtOst < LichtWest) {
        if (Position < 180) {
            Position = Position + 1
        }
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (LichtOst == LichtWest) {
        basic.showIcon(IconNames.Happy)
    }
    pins.servoWritePin(AnalogPin.P5, Position)
})
