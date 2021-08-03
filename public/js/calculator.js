const socket = io("http://localhost:3001")
let email;

function onLoad() {
  const urlParams = new URLSearchParams(window.location.search)
  const name = urlParams.get("name")
  email = urlParams.get("email")
  socket.emit("start", {
    name,
    email
  })
}
onLoad()






document.addEventListener('keydown', function(e) {

  switch (e.key) {
    case '1':
    document.getElementById("one").click();
    return
    case '2':
    document.getElementById("two").click();
    return

    case '3':
    document.getElementById("three").click();
    return

    case '4':
    document.getElementById("for").click();
    return

    case '5':
    document.getElementById("five").click();
    return

    case '6':
    document.getElementById("six").click();
    return

    case '7':
    document.getElementById("seven").click();
    return

    case '8':
    document.getElementById("eight").click();
    return

    case '9':
    document.getElementById("nine").click();
    return

    case '0':
    document.getElementById("zero").click();
    return

    case "Backspace": 
      document.getElementById("clean").click(); 
    return

    case "Delete": 
      document.getElementById("clearOne").click();
    return

    case "/":
      document.getElementById("div").click();
    return

    case "*": 
      document.getElementById("mult").click();
    return

    case "+":
      document.getElementById("sum").click();
    return

    case "-" :
      document.getElementById("sub").click();
    return

    case "=":
      document.getElementById("calculator").click();
    return

    case "Enter":
      document.getElementById("calculator").click();
    return


  }
});


function insert(number ) {
  let num = document.getElementById("result").innerHTML
  document.getElementById("result").innerHTML = num + number  
 }
 function clean(){
   document.getElementById("result").innerHTML = ''
 }
 function clearOne(){
   let result = document.getElementById("result").innerHTML
   document.getElementById("result").innerHTML = result.substring(0,result.length -1)
 }
 

 function calc(){
   const result = document.getElementById("result").innerHTML


   if(result) {
   socket.emit('calc', {result, email})
      
  }
  socket.on('result', function(total){
    document.getElementById("result").innerHTML = total
  })
 }

