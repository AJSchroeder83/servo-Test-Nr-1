LichtWest = 0
LichtOst = 0
Position = 90

def on_forever():
    global LichtOst, LichtWest, Position
    LichtOst = Math.ceil(Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 100))
    LichtWest = Math.ceil(Math.map(pins.analog_read_pin(AnalogPin.P1), 0, 1023, 0, 100))
    serial.write_value("Licht Ost", LichtOst)
    serial.write_value("Licht West", LichtWest)
    basic.pause(100)
    if LichtOst > LichtWest:
        if Position > 0:
            Position = Position - 1
            serial.write_value("Position", Position)
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        pins.servo_write_pin(AnalogPin.P5, Position)
    if LichtOst < LichtWest:
        if Position < 180:
            Position = Position + 1
            serial.write_value("Position", Position)
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        pins.servo_write_pin(AnalogPin.P5, Position)
    if LichtOst == LichtWest:
        basic.show_icon(IconNames.HAPPY)
        serial.write_value("Position erreicht", Position)
basic.forever(on_forever)
