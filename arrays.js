document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder ---
    // Task 1
    numbersLargerThanTwenty = numbersArray.filter((number) => number > 20);
    console.log("Task 1:", numbersLargerThanTwenty);

    //Task 2
    catsArray.push("Sniffles");
    console.log("Task 2:", catsArray);

    //Task 3a
    function checkForDog(dogName) { return dogsArray.includes(dogName) };
    console.log("Task 3a:", checkForDog("Trixie"));

    //Task 3b
    console.log("Task 3b:", checkForDog("Baxter"));

    //Task 4a
    function findCat(catName) { return catsArray.find((cat) => cat == catName) };
    console.log("Task 4a:", findCat("Bagheera"));

    //Task 4b
    console.log("Task 4b:", findCat("Salem"));

    // Task 5
    let numberArrayTimesThree = numbersArray.map((num) => num * 3)
    console.log("Task 5:", numbersArray, numberArrayTimesThree);

    //Task 6
    let dogsInOneString = dogsArray.reduce((total, item) => total + item);
    console.log("Task 6:", dogsInOneString);

    //Task 7a
    function indexOfFruit(fruitName) { return fruitsArray.indexOf(fruitName) }
    console.log("Task 7a", indexOfFruit("Mango"));

    //Task 7b
    function indexOfFruit(fruitName) { return fruitsArray.indexOf(fruitName) }
    console.log("Task 7b", indexOfFruit("Blåbær"));

    //Task 8
    function deleteNameAtIndex(dogName) {
        let deleteAtIndex = dogsArray.indexOf(dogName)
        dogsArray.splice(deleteAtIndex, 1);
    }
    console.log("Task 8 before", dogsArray);
    deleteNameAtIndex("Polly")
    console.log("Task 8 after", dogsArray);

    //Extra Task
    let total = numbersArray.reduce((total, item) => total + item);
    console.log("Task Extra", total);

}) // ends DOMContentLoaded