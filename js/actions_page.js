let counter = 13; 
  
    function openModal() {
      const overlay = document.getElementById("overlay");
      const modal = document.getElementById("modal");
  
      overlay.style.display = "block";
      modal.style.display = "flex"; 
    }
  
    function closeModal() {
      const overlay = document.getElementById("overlay");
      const modal = document.getElementById("modal");
  
      overlay.style.display = "none";
      modal.style.display = "none";
  
      document.getElementById("name").value = ""; 
      document.getElementById("category").value = "";
      document.getElementById("card").value = "";
      document.getElementById("sum").value = "";
      document.getElementById("comment").value = "";
    }
  
    function addData() {
      const name = document.getElementById("name");
      const category = document.getElementById("category");
      const card = document.getElementById("card");
      const sum = document.getElementById("sum");
      const comment = document.getElementById("comment");
  
      const dataContainer = document.getElementById("data-container");

      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const formattedDate = day + "." + month + "." + year;
  
      const newData = document.createElement("div");
      newData.className = "group-" + counter; 
      const summ = Number(sum.value); 
      if (name.value == "" || category.value == "" || card.value == "" || sum.value == ""){
        alert("Заполните все поля")
        return
      }
      if (summ >0){
        newData.innerHTML = `
        <div class="overlap-group-wrapper">
        <div class="overlap-group-${counter}">
          <div class="rectangle-4"></div>
          <div class="text-wrapper-17">${name.value}</div>
          <div class="text-wrapperb">+${sum.value}</div>
          <div class="text-wrapper-19">${formattedDate}</div>
        </div>
        </div>
        `;
      }
      else{
        newData.innerHTML = `
        <div class="overlap-group-wrapper">
        <div class="overlap-group-${counter}">
          <div class="rectangle-6"></div>
          <div class="text-wrapper-17">${name.value}</div>
          <div class="text-wrapperr">${sum.value}</div>
          <div class="text-wrapper-19">${formattedDate}</div>
        </div>
        </div>
        `;
      }
      
      
      dataContainer.appendChild(newData); 
  
      counter += 1; 
  
      closeModal(); 
    }