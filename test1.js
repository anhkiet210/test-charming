var a
const chuyendoi = (input) => {
    const arr = []
   for(let i=0; i < input.length; i++){
    const item = input[i]
    if(!arr[item]){
        arr[item] = 0
    }
    arr[item]++
   }
   a = arr
//    console.log(arr);
}


const input = "hello word"
chuyendoi(input)
