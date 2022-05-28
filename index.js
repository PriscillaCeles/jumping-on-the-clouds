const c = [0, 0, 1, 0, 0, 1, 0]
const d = [0, 0, 0, 1, 0, 0]

function jumpingOnClouds(array){
  let cloudsCount = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i+2] === 0){
      cloudsCount++
      i++
    } else if (array[i+1] === 0){
      cloudsCount++
    } 
  }
  return cloudsCount
}

jumpingOnClouds(c)
jumpingOnClouds(d)

console.log(`São necessários ${jumpingOnClouds(c)} movimentos para c`)
console.log(`São necessários ${jumpingOnClouds(d)} movimentos para d`)

//* CODE FOR SITE */
function jumpingOnClouds(c) {
  let cloudsCount = 0
  
  for (let i = 0; i < c.length; i++) {
    if (c[i+2] === 0){
      cloudsCount++
      i++
    } else if (c[i+1] === 0){
      cloudsCount++
    } 
  }
  return cloudsCount
}

