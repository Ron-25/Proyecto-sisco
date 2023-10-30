document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".Articulo").forEach(problema =>{
  
            problema.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?problema.classList.remove("filtro")
              :problema.classList.add("filtro")
        })
  
    }
  
  
  })