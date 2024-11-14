function insert_sort(arr) {
for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
}
    return arr;
}

const arr2 = [1,3,6,8,7,4,9];

console.log(insert_sort(arr2));
