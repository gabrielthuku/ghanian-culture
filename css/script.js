function getDayName() {
  alert("Hello,click OK to continue");
  let dateString = prompt("Enter date of birth: dd/mm/yyyy");
  let gender = prompt("What is your gender, male or female?");
  getNameFromDate(dateString, gender);
}
function getNameFromDate(dateString, gender) {
  let dateOfBirth = new Date(dateString); //create a date object from the string
  let dayOfTheWeek = dateOfBirth.getDay();
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if(gender == "male") {
      //console.log(maleNames[dayOfTheWeek]);
      document.getElementById("showNameHere").innerText = "Your Birth Name is " + maleNames[dayOfTheWeek];
  }
  else if(gender == "female") {
    //console.log(femaleNames[dayOfTheWeek]);
    document.getElementById("showNameHere").innerText = "Your Birth Name is " + femaleNames[dayOfTheWeek];
  }

}