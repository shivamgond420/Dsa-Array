let Arr = [1, 23, 4, 5, 6, 67, 767, 7, 8, 56, 7, 88, 7, 665554, 4,]

function MaxMinfinder(number) {
    let RandomNum = number[2]
    for (let i = 0; i < number.length; i++) { //o(n)

        if (RandomNum < number[i]) {
            //O(1)
            MaxNum = number[i]
        }

        if (RandomNum > number[i]) {
            //O(1)
            MinNum = number[i]
        }

    }
    return ` this is minmum number ${MinNum} and maxmun number ${MaxNum}`
}

console.log(MaxMinfinder(Arr))

//this program compleity is O(n)
// Beacuse o(1) +0(1) +0(n)
// ignore 0(1)
// so 0(1)