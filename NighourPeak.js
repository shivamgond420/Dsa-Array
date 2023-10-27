// My code
let Arr = [1, 34,   8];

function PickElement(Num) {
    if (Num.length == 0 || Num.length == 2) {
        return false;
    }
    if (Num[0] > Num[1]) {
        return false;
    }
    for (let i = 0; i < Num.length; i++) {
        if (Arr[i] > Arr[i + 1] && Arr[i] > Arr[i - 1]) {
            console.log(` ${Arr[i - 1]}  < ${Arr[i]} >  ${Arr[i + 1]}  `);
            return i;
        }
    }

}
result = PickElement(Arr);
console.log(result);

// A JavaScript program to find a peak element

// Find the peak element in the array
// function findPeak(arr, n)
// {

// 	// first or last element is peak element
// 	if (n == 1) return 0;
// 	if (arr[0] >= arr[1]) return 0;
// 	if (arr[n - 1] >= arr[n - 2]) return n - 1;

// 	// check for every other element
// 	for (var i = 1; i < n - 1; i++)
// 	{

// 	// check if the neighbors are smaller
// 	if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
// 	}
// }

// // Driver Code
// var arr = [1, 3, 20, 4, 1, 0];
// var n = arr.length;
// console.log(findPeak(arr,n))

// // This code is contributed by rdtank.
