let Arr = [-1, -3, -4, -12, 6, 7, 8];
let x = -10,
    Second,
    First,
    third;
function LargestDigest(n) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > x) {
            third = Second;
            Second = First;
            First = x;
            x = Arr[i];
        } else if (First > Arr[i] && First !== Second) {
            Second = Arr[i];
        } else if (Second > Arr[i]) {
            third = Arr[i];
        }
    }
    console.log("First:", First);
    console.log("Second:", Second);
    console.log("Third:", third);
}

// console.log(LargestDigest(Arr))

LargestDigest(Arr);
