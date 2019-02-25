// function makeIterator(arr) {
//   let nextIndex = 0
//   return {
//     next:()=>{
//       if(nextIndex<arr.length){
//         return{
//           value:arr[nextIndex++],
//           done:false
//         }
//       }else {
//         return {
//           done:true
//         }
//       }
//     }
//   }
// }
//
// const it = makeIterator(['吃饭','睡觉','打豆豆'])
//
// console.log('首先',it.next().value)
// console.log('首先',it.next().value)
// console.log('首先',it.next().value)
// console.log('首先',it.next().done)


function *makeIterator(arr) {
  for(let i =0; i<arr.length; i++){
    yield arr[i]
  }
}

const gen = makeIterator(['吃饭','睡觉','打豆豆'])

console.log('首先',gen.next().value)
console.log('首先',gen.next().value)
console.log('首先',gen.next().value)
console.log('首先',gen.next().done)