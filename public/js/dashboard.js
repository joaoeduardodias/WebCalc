const socket = io("http://localhost:3001")


socket.on("list", function(data){
  data.map((item)=>{
   let row = document.querySelector(".model").cloneNode(true)
  row.classList.remove('model')
  
   row.querySelector(".calculation").innerText = item.calculation;
   row.querySelector(".result").innerText = item.result;
   row.querySelector(".nameUser").innerText = item.user.name;
   document.getElementById("tbody").append(row)
  })
})
