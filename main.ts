let 休息 = 0
serial.setBaudRate(BaudRate.BaudRate115200)
Speech.Set_IICAddress(Speech.I2C_ADDR_Select.NEW_ADDR)
pins.digitalWritePin(DigitalPin.P14, 1)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P14, 0)
Speech.SetVolume(10)
Speech.SetSpell(Speech.Spell_Type.Spell_Enable)
Speech.SetReader(Speech.Reader_Type.Reader_XuXiaoBao)
music.playTone(262, music.beat(BeatFraction.Whole))
while (!(CrocoKit_Input.Button(DigitalPin.P5, CrocoKit_Input.enButton.Press))) {
	
}
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
Speech.Speech_Text("kai1shi3xve2xi2")
Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
basic.forever(function () {
    let flag = 0
    if (flag == 1) {
        CrocoKit_Motor.Servo(AnalogPin.P0, 30)
        basic.pause(300)
        CrocoKit_Motor.Servo(AnalogPin.P0, 60)
        basic.pause(300)
        CrocoKit_Motor.Servo(AnalogPin.P0, 90)
        basic.pause(300)
        CrocoKit_Motor.Servo(AnalogPin.P0, 120)
        basic.pause(300)
        CrocoKit_Motor.Servo(AnalogPin.P0, 90)
        basic.pause(300)
        CrocoKit_Motor.Servo(AnalogPin.P0, 60)
        basic.pause(300)
    }
})
basic.forever(function () {
    if (休息 == 0) {
        if (30 < CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P2)) {
            Speech.Speech_Text("zhu4yi4tou2di1le4")
            Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
        }
    }
    basic.showNumber(CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P2))
})
basic.forever(function () {
    basic.pause(1500000)
    休息 = 1
    music.playMelody("C5 B A G F E D C ", 120)
    Speech.Speech_Text("xve2xi2yi4hui3le4xiu1xi3yi2xia4ba1")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
    basic.pause(600000)
    休息 = 0
    music.playMelody("C D E F G A B C5 ", 120)
    Speech.Speech_Text("kai1shi2xve2xi2ba4")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
    basic.pause(1500000)
    休息 = 1
    music.playMelody("C5 B A G F E D C ", 120)
    Speech.Speech_Text("xve2xi2yi4hui3le4xiu1xi3yi2xia4ba1")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
    basic.pause(60000)
    休息 = 0
    music.playMelody("C D E F G A B C5 ", 120)
    Speech.Speech_Text("zuo4yi2bian4yan3bao3jian4cao1ba4bao3hu4shi4li")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(300000)
    Speech.Speech_Text("kai1shi2xve2xi2")
    Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_Idle)
})
