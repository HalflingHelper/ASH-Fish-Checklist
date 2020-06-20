function toggleInfo() {
    let visibility = document.getElementsByClassName("info");
    console.log(visibility)
    for (let i = 0; i < visibility.length; i++) {
    if (visibility[i].style.display == "block") {
        visibility[i].style.display = "none"
    } else {
        visibility[i].style.display = "block"
    }
}
}

let fishOrder = [0, 6, 4, 2, 9, 10, 11, 8, 3, 13, 7, 1, 12,5]
function addImages(){
    var pictures = document.getElementsByClassName("pic")
  
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].src = `fish/BasicFish_${fishOrder[i]}.png?v=1592589711297`
    }
  }
  
  function selection(elmnt, check) {
    var checkboxes = document.getElementsByTagName("img");
    console.log(elmnt)
    
    
    
    if (check == false) {
      for (let i = 0; i < checkboxes.length; i++) {    
        
        checkboxes[i].style.filter = "grayscale(1)"
      }
    } else {
        if (elmnt.style.filter ==  "grayscale(0) drop-shadow(rgb(255, 238, 91) 0px 0px 10px)") {
            elmnt.style.filter = "grayscale(1)" 
          } else {
            elmnt.style.filter =  "grayscale(0) drop-shadow(rgb(255, 238, 91) 0px 0px 10px)"
          }
    }
  }