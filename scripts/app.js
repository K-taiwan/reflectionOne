let people = ["Albert","Anna","Ben","Carmen Sandiego","Dora","Eric","Francis","Gary","Helen","Ira","Jake","Jane","John","kate","Louis","Mike","Nancy","Oscar","Paula","QuIncy","Regina","Sabrina","trevor","Unice","Victoria","Winston","Waldo","Xavier","Yancy","Zack"];


let people2 = [["Albert","Anna"],"Ben","Carmen Sandiego","Dora","Eric","Francis","Gary","Helen","Ira",["Jake","Jane","John"],"kate","Louis","Mike","Nancy","Oscar","Paula","QuIncy","Regina","Sabrina","trevor","Unice","Victoria",["Winston","Waldo"],"Xavier","Yancy","Zack"];
// let newARR = people.includes("Waldo");
// console.log(newARR);


// for(let i = 0; i < people.length; i++){
//     if(i === "W"){
//         newARR = 
//     }
// }

// function tried() {
// newARR = people.splice(0,1).toString();
// console.log(newARR);
// }
// tried();



const peopleFinder = (array, string) => {

    if (Array.isArray(array) === false) {
        return `Positional Argument 1 should be an Array`;
    }
    if (typeof string !== "string") {
        return `Positional Argument 2 should be a String`;
    }
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i]) === true){
            for(let j = 0; j < array[i].length; j++){
                if(array[i][j].toLowerCase() === string.toLowerCase()) {
                    return `${string} was hiding at position [${i}][${j}]`;
                }
            }
        } else if (array[i].toLowerCase() === string.toLowerCase()) {
            return `${string} was hiding at position [${i}]`;
        }
    }
    return `I couldn't find ${string}`;
}
console.log(peopleFinder(people2, "jake"));