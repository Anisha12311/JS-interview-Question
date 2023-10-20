
function isIsomorphic(str1, str2){

   if(str1.length !==str2.length) return false;

   let mapStr1 = {}
   let mapStr2 = {}
   for(let i = 0; i < str1.length; i++){
   
    if((mapStr1[str1[i]] && mapStr1[str1[i]] !== str2[i]) ||( mapStr2[str2[i]] && mapStr2[str2[i]] !== str1[i])) return false

     mapStr1[str1[i]] = str2[i]
     mapStr2[str2[i]] = str1[i]
   }

  return true
}

const s1 = "egg";
const t1 = "add";
console.log(isIsomorphic(s1, t1));
const s2 = "foo";
const t2 = "bar";
console.log(isIsomorphic(s2, t2));