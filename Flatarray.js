function Flatarray(arr) {
    let  array = []
    for(const n of arr){
        if(Array.isArray(n)){
           array = array.concat(Flatarray(n))
        }
        else {
            array.push(n)
        }
    }
    return array
}

const arr = [1,[2,3,4,[5,[3],4]],4,[4,3]]

console.log(Flatarray(arr))


function flat(arr){
 
  return arr.reduce((acc,value) => {
    if(Array.isArray(value) ){
       return  acc.concat(flat(value))
    }
    else {
       return  acc.concat(value)
    }
  },[])
}

console.log(flat(arr))