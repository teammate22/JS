// задание 1
function stringFrom(){
  let str =''
    for(let el of arguments){
      str += el + ' '
    }
    return str
}

// задание 2
function min(){
  let minimum = arguments[0]
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i+1] < minimum) {minimum = arguments[i+1]}
  }
  return minimum
}

// задание 3
function numbers(){
  let count = 0
  for(let el of arguments){
    if(typeof(el) == "number") count++
  }
  return count
}
// задание 4
function mean(){
  let leng = 0
  let sum = 0
  for(let el of arguments){
    if(typeof(el) == "number"){
      sum += el
      leng++
    }
  }
  return sum/leng
}

// задание 5
function pow(x){
  if(x % 2 == 0) {
    x = x / 2
    return pow(x)
  }
  if(x == 1) {return 'yes'}
  else return 'no'
}

// задание 6
function reverse(x: number){
  let reversed = ''
  while(x>9){
   reversed += x%10
   x = Math.floor(x/10)
  }
  reversed += x
  return reversed
}

let input1 = document.getElementById('input1')
const btn1 = document.getElementById('btn1')
let span1 = document.getElementById('span1')
// @ts-ignore
btn1.addEventListener('click', () => {span1.innerText = pow(input1.value)})

let input2 = document.getElementById('input2')
const btn2 = document.getElementById('btn2')
let span2 = document.getElementById('span2')
// @ts-ignore
btn2.addEventListener('click', () => {span2.innerText = reverse(input2.value)})