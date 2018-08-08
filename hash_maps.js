var hashMap = [];
hashMap.length = 30;

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash;                
    }
    return hash;
}
function mod(input, div){
    return (input % div + div) % div;
}


hashInsert = function(map, object){
    var key = Object.keys(object)
    console.log(key)
    for(var x = 0; x<key.length; x++){
    console.log(object[key[x]])
    console.log(key[x].hashCode())

    idx = mod(key[x].hashCode(), map.length)
    console.log(idx)
    if(map[idx] == null){
    map[idx] = [[key[x], object[key[x]]]]
    }
    else{
        for(var y = 0; y<map[idx].length; y++){
            var marker = 0;
            if(map[idx][y][0] == key[x]){
                marker = y;
            }
        }
        if(marker>0){
            map[idx][marker][1] = object[key[x]]
        }
        else{
        map[idx].push([key[x], object[key[x]]])
        }
        
    }
    }
    console.log(map)
    
    
    
}

hashInsert(hashMap, {'key':'value', 'otherkey':'othervalue','lastkey':'lastvalue'})
hashInsert(hashMap, {'testkey':'testvalue', 'othertestkey':'othertestvalue','finaltestkey':'finaltestvalue'})
hashInsert(hashMap, {'finaltestkey':'THEWRENCH'})

hashLookup = function(map, key){
    const lookup = key;
    const idx = mod(key.hashCode(), map.length);
    if(map[idx] == null){
        return null;
    }
    else{
        for(var x = 0; x<map[idx].length; x++){
            if(map[idx][x][0] == lookup){
                return map[idx][x][1];
            }
        }
        
    }
}

console.log(hashLookup(hashMap, 'finaltestkey'))

hashGrow =map=>{
    map.length = Math.floor(map.length * 1.5);
    
    for(i = 0; i<map.length; i++){
        if(map[i] == null){
            continue;
        }
        else{

            console.log("we're at index "+i )
            for(j = 0; j<map[i].length; j++){
                lookup = map[i][j][0]
                console.log(lookup)
                var idx = mod(lookup.hashCode(), map.length);
                console.log(idx)
            //     console.log(idx)
            //     if(map[idx] == null){
            //     map[idx] = [[map[i][j][0], map[i][j][1]]]
            //     }
            //     else{
            //     map[idx].push(map[i][j])
            //     }
            }
            
        }
    }
    console.log(map)
}

hashGrow(hashMap)