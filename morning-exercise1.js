//1.
const greetCustomer = (name) => {
    return ("Welcome " + name);
}
console.log(greetCustomer("Mr Smith"));

//2.
const BreakTime = (time) => {
    if (time >= 10) {
        return "Time to go back"
    } else {
        return "Still on my Break"
    }
}

console.log(BreakTime(2))

//3.
const logTypeOfData = (data) => {
    return (typeof data)
}
console.log(logTypeOfData("Dog"))
console.log(logTypeOfData(25))
console.log(logTypeOfData(true))
//4.

const doDecimalLoop = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 10 === 0) {
            console.log(i)
        }
    }
};
doDecimalLoop()
//5.
let IfdoorOpen;
const checkIfDoorIsOpen = (IfdoorOpen) => {
    if (IfdoorOpen === "open"){
        return ( "door is Open" )
    } else {
        return ("door is Close" )
    }
    
}
console.log(checkIfDoorIsOpen("open"))
