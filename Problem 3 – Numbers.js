function problem3Numbers(input) {
    let orgLine = input.split(` `).map(Number);
    let length = orgLine.length;
    let avg = orgLine.reduce((a, b) => a + b) / length;
    let finalArr = [];
    for (let i = 0; i < orgLine.length; i++) {
        let number = Number(orgLine[i]);
        if (number > avg) {
            finalArr.unshift(number);
        }
    }
    let printArr = [];
    for (let i = 0; i < finalArr.length; i++) {
        let finalNumbers = Number(finalArr[i]);
        let newLength = finalArr.length;

        if (finalArr.length >= 5) {
            printArr.push(finalNumbers);

        } else {
            printArr = finalArr;
        }
    }
    let sortedFinal = printArr.sort((a, b) => b - a);
    let finalForPrint = [];
    if (sortedFinal.length <= 5 && sortedFinal.length >=1) {
        console.log(sortedFinal.join(` `));
    } else if (sortedFinal.length > 5) {
        finalForPrint.push(sortedFinal.shift());
        finalForPrint.push(sortedFinal.shift());
        finalForPrint.push(sortedFinal.shift());
        finalForPrint.push(sortedFinal.shift());
        finalForPrint.push(sortedFinal.shift());
        console.log(finalForPrint.join(` `));
    } else {
        console.log(`No`);
    }
    console.log();
}
problem3Numbers('10 20 30 40 50');
problem3Numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
problem3Numbers('1');
problem3Numbers('-1 -2 -3 -4 -5 -6');