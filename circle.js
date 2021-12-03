function circleArea(r) {
    var area = 1
    area = (Math.PI) * r * r;
    console.log(area)
}

function circleCircumference(r) {
    var cevre = 1
    cevre = (2 * Math.PI * r)
    console.log(cevre)
}



module.exports = {
    circleArea,
    circleCircumference,
}