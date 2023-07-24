const vehicle = {
    wheel:4,
    break:true,
    color:"red",
    sheet:6
}

const jeep = Object.create(vehicle)

jeep.color = "green"

console.log(jeep.wheel)