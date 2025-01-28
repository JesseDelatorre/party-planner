// create a website
// fill in any html elements 
// create async function for party API

const state = {
  nameOfParty: []

}

const getParties = async() => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`)
  const jsonObject = await response.json();
  // console.log(jsonObject);
  const allEvents = jsonObject.data;
  // console.log(allEvents);
  state.nameOfParty = allEvents;
  console.log(state.nameOfParty);
  renderEvents();
}
//function to render to page
const renderEvents = () => {
const partyUl = document.querySelector(`ul`);
partyUl.innerHTML = ``;
state.nameOfParty.forEach((singleParty) =>{
  const li = document.createElement(`li`);
  li.innerText = `PARTY NAME: ${singleParty.name} .\n DESCRIPTION: ${singleParty.description} .\n DATE AND TIME: ${singleParty.date} .\n LOCATION: ${singleParty.location}`;
  partyUl.append(li);
})
}
getParties();
