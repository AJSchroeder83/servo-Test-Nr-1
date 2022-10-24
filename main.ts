let LichtWest = 0
let LichtOst = 0
let Position = 90
basic.forever(function () {
    LichtOst = Math.ceil(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100))
    LichtWest = Math.ceil(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100))
    serial.writeValue("Licht Ost", LichtOst)
    serial.writeValue("Licht West", LichtWest)
    basic.pause(100)
    if (LichtOst > LichtWest) {
        if (Position > 0) {
            Position = Position - 1
            serial.writeValue("Position", Position)
        }
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P5, Position)
    }
    if (LichtOst < LichtWest) {
        if (Position < 180) {
            Position = Position + 1
            serial.writeValue("Position", Position)
        }
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P5, Position)
    }
    if (LichtOst == LichtWest) {
        basic.showIcon(IconNames.Happy)
        serial.writeValue("Position erreicht", Position)
    }
})
