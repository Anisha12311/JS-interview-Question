function deepFreeze(obj){
    const properties = Object.keys(obj)
 
    properties.forEach((value) => {
      let nestedKey = obj[value]
     
      if(typeof nestedKey === 'object' && nestedKey != null){
       deepFreeze(nestedKey)
      }
    })
    return Object.freeze(obj)
 }
 
 const obj = {
   a : 1,
   b : {
     name : "Anisha"
   }
 }
 
 obj.b.name = "Jhon"
console.log(deepFreeze(obj))