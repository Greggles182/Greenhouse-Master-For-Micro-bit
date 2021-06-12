enum RadioMessage {
    message1 = 49434,
    LightOn = 49786,
    LightOff = 64509,
    HeaterOn = 29523,
    HeaterOff = 54869
}
/**
 * ONLY USE PINS 0,1 AND 2
 * 
 * 0 is Light
 * 
 * 1 is heater
 * 
 * 2 will be water
 */
radio.onReceivedMessage(RadioMessage.LightOff, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.onReceivedMessage(RadioMessage.HeaterOff, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedMessage(RadioMessage.HeaterOn, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
radio.onReceivedMessage(RadioMessage.LightOn, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
radio.setGroup(1)
