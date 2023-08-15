

//  Using this array, add 3 more elements to the end, and access (read) the 2nd element in the array.
// [“bob”, “jerry”, “brandon”]
// let myArray = ["bob", "jerry", "brandon"];
// const addNames = (myArray, itemToAdd) => {
//     myArray.forEach(element) => {
//         if (element === itemToAdd) {
//             myArray.push(index, 1)
//         }
//     };

// } 
// console.log(myArray)
const classArray = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
const addStudentToClass = (student) => {
    classArray.push(student);
    console.log(classArray);
}
addStudentToClass("Simo");
addStudentToClass("Learner");