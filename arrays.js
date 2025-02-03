document.addEventListener("DOMContentLoaded", function() {
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
    function checkForDog(dogName){ return dogsArray.includes(dogName)};
    console.log("Task 2:", checkForDog("Trixie"));

    //Task 3b
    console.log("Task 2:", checkForDog("Baxter"));

}) // ends DOMContentLoaded