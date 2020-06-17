let ind = []
let array = [4,2,6,4,5,337,23,24]
let iarray = array.map((el,i)=>{return [el,i]})
console.log(iarray)
let fArray = quick(iarray,0,iarray.length-1)
console.log(fArray)
console.log(ind)

function quick(array, low, high){
    if(low < high){
        let pi = partition(array, low, high)

        quick(array, low, pi-1)
        quick(array, pi+1, high)
    }
    return array
}

function partition(array, low, high){
    let i = low-1
    let pivot = array[high][0]

    for(var j = low; j < high; j++){
        if(array[j][0] <= pivot){
            i = i+1
            let ele1 = array[i]
            let ele2 = array[j]
            ind.push([ele1[1],ele2[1]])
            array[i][0] = ele2[0]
            array[j][0] = ele1[0]
        }
    }
    let ele1 = array[i+1]
    let ele2 = array[high]
    ind.push([ele1[1],ele2[1]])
    array[i+1][0] = ele2[0]
    array[high][0] = ele1[0]
    return i+1
}