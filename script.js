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

let fishOrder = [0, 6, 4, 2, 9, 10, 11, 8, 3, 13, 7, 1, 12,5];

function addImages(){
    var pictures = document.getElementsByTagName("img")

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
    const mobileText =  "<p><table width=100%><tr>Common Carp <br><img class='mobilepic' onclick='selection(this, true)'></tr><tr> <br>Northern Pike <br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Yellow Perch <br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Rainbow Trout<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Salmon<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Catfish<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Burbot<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Spotted Brook Trout<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Pumpkinseed<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Crayfish<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Bluegill<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>Brook Trout<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br>White Bass<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br> White Perch<br><img class='mobilepic' onclick='selection(this, true)'></tr><tr><br></p><button onclick='selection(this, false)'>Clear</button><br> <br> <button onclick='changeMode()'>Switch to desktop view</button><br>";
  const desktopText = "<table width=100%> <tr><td>Common Carp </td><td>Northern Pike</td><td>Yellow Perch</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Rainbow Trout</td><td>Salmon</td><td>Catfish</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Burbot</td><td>Spotted Brook Trout</td><td>Pumpkinseed</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>Crayfish</td><td>Bluegill</td><td>Brook Trout</td> </tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td></tr><tr><td>White Bass</td><td>White Perch</td></tr><tr><td><img class='pic' onclick='selection(this, true)'></td> <td><img class='pic' onclick='selection(this, true)'></td> </tr><tr><td colspan='3'><button onclick='selection(this, false)'>Clear</button> <button onclick='changeMode()'>Switch to mobile view</button></td></tr></table>";

    let changeable = document.getElementById("main")
    if (mobile == true) {
      //Switching to desktop view
      currentText = desktopText
      mobile = false
    } else {
      //switching to mobile view
      
      
      currentText = mobileText
      mobile = true
    }
    changeable.innerHTML = currentText;
    addImages()
  }
