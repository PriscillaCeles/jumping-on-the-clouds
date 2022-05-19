const list = [0, 0, 1, 0, 0, 1, 0]

function jumpingOnClouds(){
  let cloudsCount = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i+2] === 0){
      cloudsCount++
      i++
    } else if (list[i+1] === 0){
      cloudsCount++
    } 
  }
  return cloudsCount
}

const contagem = jumpingOnClouds()

console.log(`São necessários ${contagem} movimentos`)