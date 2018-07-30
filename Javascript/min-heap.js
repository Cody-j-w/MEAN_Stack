

function insertIntoHeap(heap, val){
    heap.push(val)
    for(x=1; x<heap.length;x++){
        console.log(heap)
        
        var temp = 0;
        var child1_index = x*2;
        var child2_index = (x*2)+1;
        var parent_index = Math.trunc(x/2);
        if(heap[x]>heap[child1_index]){
            temp = heap[x];
            heap[x] = heap[child1_index];
            heap[child1_index] = temp;
            x = Math.trunc(x/2);
        }
        else if(heap[x]>heap[child2_index]){
            temp = heap[x];
            heap[x] = heap[child2_index];
            heap[child2_index] = temp;
            x = Math.trunc(x/2);
        }
        else if(heap[x]<heap[parent_index]){
            for(y=x; y>0;y--){
                if(heap[Math.trunc(y/2)]<y || heap[Math.trunc(y/2)]==undefined){
                    continue;
                }
                else{
                temp = heap[y];
                heap[y]=heap[Math.trunc(y/2)];
                heap[Math.trunc(y/2)] = temp;
                }
            }
            x = parent_index;
        }
        
       
    }
    return heap;
}

heap = [undefined, 3,4,6,12,8,14,16,18,20,21,24];

console.log(heap)
console.log(insertIntoHeap(heap, 1))