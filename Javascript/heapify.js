function heapify(arr){
    var min = arr[0];
    idx = 1;
    var temp = arr[0];
    arr[0] = undefined;
    arr.push(temp);
    for(x=0; x<arr.length; x++){
        if(arr[x]<min){
            min = arr[x];
            idx = x;
        }
    }
    temp = arr[1];
    arr[1] = min;
    arr[idx] = temp;
    var j = 1;
    while(arr[j*2] || arr[(j*2)+1]){
        if(arr[j]>arr[j*2]){
            temp = arr[j];
            arr[j] = arr[j*2];
            arr[j*2] = temp;
        }
        if(arr[j]>arr[(j*2)+1]){
            temp = arr[j];
            arr[j] = arr[(j*2)+1];
            arr[(j*2)+1] = temp;
        }
        j++;
    }
    return arr;
}

console.log(heapify([5,3,8,2,1,9,19,25,43,18,20,16,4,7]))