input.onButtonPressed(Button.A, function () {
	
})
let LichtWest = 0
let LichtOst = 0
let Position = 180
basic.forever(function () {
    LichtOst = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    LichtWest = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100)
    if (LichtOst > LichtWest) {
        Position = Position - 1
    }
    if (LichtOst < LichtWest) {
        Position = Position + 1
    }
    if (LichtOst == LichtWest) {
        Position = Position + 1
    }
    pins.servoWritePin(AnalogPin.P5, Position)
})
