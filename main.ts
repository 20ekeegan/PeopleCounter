let NoOfPeople = 0
basic.showNumber(0)
if (input.lightLevel() < 128) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
    let light_sensor = 0
    NoOfPeople = light_sensor
    NoOfPeople += 1
    basic.pause(1000)
    basic.showNumber(NoOfPeople)
})
