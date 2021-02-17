// Navigation Buttons
const Europe = document.getElementById("europe");
const Asia = document.getElementById("asia");
const Africa = document.getElementById("africa");
const Americas = document.getElementById("americas");
const Oceania = document.getElementById("oceania");


const signOut = document.getElementById("signOutButton");
const isUser = localStorage.getItem(window.windowKey);
if (!isUser) {
  location.replace("index.html");
}

signOut.addEventListener("click", () => {
  SERVICES.delete(window.windowKey);
  location.replace("index.html");
});

class infoBuilder {
  constructor(tagName = "div") {
    this.element = document.createElement(tagName);
    // this.element.className = 'listing';

    this.item = null;
    this.listGroup = null; 
      }
  
  addGroup() {
    this.listGroup = document.createElement('ul');
    this.listGroup.className = 'listing';
    this.element.appendChild(this.listGroup);
    return this;
    }
  addList(title){
    this.listElement = document.createElement('li');
    this.listElement.className = 'list-text';
    this.listElement.textContent = title;

    if(!this.listGroup) {
      this.addGroup();
    }
    this.listGroup.appendChild(this.listElement);
    return this;
  }
  render() {
    return this.element;
  }

}

(async () => {
  const response = await countryApi.allcountries();
  const itemsList = document.getElementById('listItems');
  // console.log(response[0]);

  response.forEach(element => {
    const information = new infoBuilder();
    information.addGroup().addList(`${element.name}`);
    itemsList.appendChild(information.render());
  });
  
  itemsList.addEventListener('click', ({target}) => {
    console.log(target.tagName, target.nodeName);
  })

  Europe.addEventListener('click', () => {
    const EUCountries = response.filter((el) => {
      return el.region == "Europe";
      
    });    
    console.log(EUCountries);
  });

  
  Asia.addEventListener('click', () => {
    const ASCountries = response.filter(function (el){
      return el.region == "Asia";
      

    });   
    console.log(ASCountries); 
  });
  // Africa.addEventListener('click', () => {
  //   const EUCountries = response.filter(function (ele){
  //     return ele.region == "Africa";

  //   });    
  // });
  // Americas.addEventListener('click', () => {
  //   const EUCountries = response.filter(function (ele){
  //     return ele.region == "Americas";

  //   });    
  // });


}) ();










//SIDE NAVBAR functions
function opening() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closing() {
  document.getElementById("mySidenav").style.width = "0";
}
