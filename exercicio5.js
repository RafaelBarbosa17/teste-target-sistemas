
const reverseString = (str) => {
    let split = str.split("");
    let reverseArray = split.reverse();
    let joinStr = reverseArray.join("");

    console.log(joinStr)
}

reverseString("Rafael")