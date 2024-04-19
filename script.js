function getUserData() {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayUser(data.results[0]);
    })
    .catch(console.error);
}
// if you f12 nothing is going to show because you are console logging inside the function
getUserData(); //now need to do this to f12 and see the information in the results

//--------------------

//make a function and display it on the DOM
function displayUser(userData) {
  // now look at the results array with f12
  // grab the objects you want to use
  const picture = userData.picture.large;
  const name = userData.name.first + " " + userData.name.last;
  //   const city = userData.location.city;
  //   const country = userData.location.country;
  // **Destructuring - a different way to write the same code****
  const { city, country } = userData.location;
  const email = userData.email;

  // DOM manipulation steps
  // 1.Create all the elements
  // 1a. need a picture:
  const avatarImg = document.createElement("img");
  // 1b. Need paragraphs:
  const namePara = document.createElement("p");
  const cityPara = document.createElement("p");
  const countryPara = document.createElement("p");
  const emailPara = document.createElement("p");

  // 2. Modify the elements
  avatarImg.src = picture;
  avatarImg.alt = name;
  namePara.textContent = name;
  cityPara.textContent = city;
  countryPara.textContent = country;
  emailPara.textContent = email;

  // 3. Append the elements
  document.body.append(avatarImg, namePara, cityPara, countryPara, emailPara);
}

// now we can displayUser data, go back to line 7 and add the displayUSer(data.results[0]) underneath it

// what if you want to add in many users??
// You can go to your function and add:
// function getUserData(userCount=1) and add it to the end of the fetch API url
