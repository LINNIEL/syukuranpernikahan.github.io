window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
  
   
    setTimeout(function() {
        
        loading.classList.add("blur-out");
  
       
        setTimeout(function() {
            loading.style.display = "none";
            content.style.display = "block";
        }, 2900); 
    }, 2900); 
  });