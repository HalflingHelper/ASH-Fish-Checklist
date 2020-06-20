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
      pictures[i].src = `fish/BasicFish_${fishOrder[i]}.png`
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

let mobile = false;  
  
  function changeMode() {
    let currentText;
    const mobileText =  "<p>Common Carp <br><img class='pic' onclick='selection(this, true)'> <br>Northern Pike <br><img class='pic' onclick='selection(this, true)'><br>Yellow Perch <br><img class='pic' onclick='selection(this, true)'><br>Rainbow Trout<br><img class='pic' onclick='selection(this, true)'><br>Salmon<br><img class='pic' onclick='selection(this, true)'><br>Catfish<br><img class='pic' onclick='selection(this, true)'><br>Burbot<br><img class='pic' onclick='selection(this, true)'><br>Spotted Brook Trout<br><img class='pic' onclick='selection(this, true)'><br>Pumpkinseed<br><img class='pic' onclick='selection(this, true)'><br>Crayfish<br><img class='pic' onclick='selection(this, true)'><br>Bluegill<br><img class='pic' onclick='selection(this, true)'><br>Brook Trout<br><img class='pic' onclick='selection(this, true)'><br>White Bass<br><img class='pic' onclick='selection(this, true)'><br> White Perch<br><img class='pic' onclick='selection(this, true)'><br></p><button onclick='selection(this, false)'>Clear</button><br> <br> <button onclick='changeMode()'>Switch to desktop view</button><br>";
  const desktopText = "<table width=100%> <tr><td>Common Carp </td><td>Northern Pike</td><td>Yellow Perch</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Rainbow Trout</td><td>Salmon</td><td>Catfish</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Burbot</td><td>Spotted Brook Trout</td><td>Pumpkinseed</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Crayfish</td><td>Bluegill</td><td>Brook Trout</td> </tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>White Bass</td><td>White Perch</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> </tr><tr><td colspan='3'><button onclick='selection(this, false)'>Clear</button> <button onclick='changeMode()'>Switch to mobile view</button></td></tr></table>";
    
    let changeable = document.getElementById("main")
    if (mobile == true) {
      currentText = desktopText
      mobile = false
    } else {
      currentText = mobileText
      mobile = true
    }
    changeable.innerHTML = currentText;
    addImages()
  }