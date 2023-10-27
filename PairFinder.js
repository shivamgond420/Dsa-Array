function PairFinder(Arr) {
  for (let i = 0; i < Arr.length - 1; i++) {
    for (let j = 0; j < Arr.length - 1; j++) {
      if (Arr[i] + Arr[j] == 10) {
        console.log(Arr[i], Arr[j]);
      }
    }
  }
}

Arr = [0, 1, 2, 3, 4, 5, 67, 78, 6, 7, 8, 9];
PairFinder(Arr);
