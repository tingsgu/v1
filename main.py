休息 = 0
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
pins.digital_write_pin(DigitalPin.P14, 1)
basic.pause(500)
pins.digital_write_pin(DigitalPin.P14, 0)
Speech.set_volume(10)
Speech.set_spell(Speech.Spell_Type.SPELL_ENABLE)
Speech.set_reader(Speech.Reader_Type.READER_XUXIAOBAO)
music.play_tone(262, music.beat(BeatFraction.WHOLE))
while not (CrocoKit_Input.button(DigitalPin.P5, CrocoKit_Input.enButton.PRESS)):
    pass
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
Speech.Speech_Text("kai1shi3xve2xi2")
Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)

def on_forever():
    flag = 0
    if flag == 1:
        CrocoKit_Motor.servo(AnalogPin.P0, 30)
        basic.pause(300)
        CrocoKit_Motor.servo(AnalogPin.P0, 60)
        basic.pause(300)
        CrocoKit_Motor.servo(AnalogPin.P0, 90)
        basic.pause(300)
        CrocoKit_Motor.servo(AnalogPin.P0, 120)
        basic.pause(300)
        CrocoKit_Motor.servo(AnalogPin.P0, 90)
        basic.pause(300)
        CrocoKit_Motor.servo(AnalogPin.P0, 60)
        basic.pause(300)
basic.forever(on_forever)

def on_forever2():
    if 休息 == 0:
        if 30 < CrocoKit_Sensor.ultrasonic(DigitalPin.P1, DigitalPin.P2):
            Speech.Speech_Text("zhu4yi4tou2di1le4")
            Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
basic.forever(on_forever2)

def on_forever3():
    global 休息
    basic.pause(1500000)
    休息 = 1
    music.play_melody("C5 B A G F E D C ", 120)
    Speech.Speech_Text("xve2xi2yi4hui3le4xiu1xi3yi2xia4ba1")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
    basic.pause(600000)
    休息 = 0
    music.play_melody("C D E F G A B C5 ", 120)
    Speech.Speech_Text("kai1shi2xve2xi2ba4")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
    basic.pause(1500000)
    休息 = 1
    music.play_melody("C5 B A G F E D C ", 120)
    Speech.Speech_Text("xve2xi2yi4hui3le4xiu1xi3yi2xia4ba1")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
    basic.pause(60000)
    休息 = 0
    music.play_melody("C D E F G A B C5 ", 120)
    Speech.Speech_Text("zuo4yi2bian4yan3bao3jian4cao1ba4bao3hu4shi4li")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
    pins.digital_write_pin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P14, 0)
    basic.pause(300000)
    Speech.Speech_Text("kai1shi2xve2xi2")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)
basic.forever(on_forever3)
