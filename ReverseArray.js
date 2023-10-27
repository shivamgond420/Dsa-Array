let Arr = [1, 23, 45, "world", "class", "Rose"]

function RevreseArr(Arr) {
    let RevArr = []
    for (let i = Arr.length - 1; i > -1; i--) {
        RevArr.push(Arr[i])
    }

    return RevArr
}

console.log(RevreseArr(Arr))
