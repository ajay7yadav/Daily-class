let arr = [5,4,2,5,3,1];

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let k = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[k]){
                k = j;
            }
        }
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
}
console.log(selectionSort(arr));

function insertionSort(array){

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j --
        }
        array[j + 1] = key;
    }
    return array;
}
console.log(insertionSort(arr));

/////////////////////////////////||  Marge Sort

function margeSort(arr, s,e){
    if(s>=e){

        return;
        
    }

    let mid = Math.floor((s+e)/2);
    margeSort(arr,s,mid);
    margeSort(arr,mid+1,e);
    marge(arr,s,mid,e);
}

function marge(arr, l, m, r){
    let n1 = m-l+1;
    let n2 = r-m;
    let div1 = new Array(n1);
    let div2 = new Array(n2);
    for(let i=0; i<n1; i++){
        div1[i] = arr[l+i];
    }
    for(let i=0; i<n2; i++){
        div2[i] = arr[m+1+i];
    }
    let i=0,j=0,k=l;
    while(i<n1 && j<n2){
        if(div1[i]<=div2[j]){
            arr[k++] = div1[i++];
        }
        else{
            arr[k++] = div2[j++];
        }
    }
    while(i<n1){
        arr[k++] = div1[i++];
    }
    while(j<n2){
        arr[k++] = div2[j++];
    }
}

margeSort(arr, s=0, e=arr.length-1);
console.log();