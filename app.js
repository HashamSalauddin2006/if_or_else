var championstrophy = prompt("Frist match is champions Trophy 2025?");

if (championstrophy === "19/2/2025") {
  console.log("Good Answer*");
  var semiFinal1 = prompt("champions Trophy 2025 1st Semi-Final Team Name?");
  if (semiFinal1 === "India vs Australia") {
    console.log("Good Answer*");
    var semiFinal2 = prompt("champions Trophy 2025 2nd Semi-Final Team Name?");
    if (semiFinal2 === "South Africa vs New Zealand") {
      console.log("Good Answer*");
      var final = prompt("champions Trophy 2025 Winning Team Name?");
      if (final === "India") {
        console.log("Good Answer*");
      } else {
        console.log("Wrong Answer");
      }
    } else {
      console.log("Wrong Answer");
    }
  } else {
    console.log("Wrong Answer");
  }
} else {
  console.log("Wrong Answer");
}
