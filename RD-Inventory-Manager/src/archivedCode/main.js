// Connecting the Firebase Database to our project (not sure how this works)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://rd-inventory-manager-2fa9b-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemListInDB = ref(database, "stuff");

// Button & input-field functionality

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const itemListEl = document.getElementById("item-list");

addButtonEl.addEventListener("click", function () {
  // function for click
  let inputValue = inputFieldEl.value;

  // Saving input to DB
  push(itemListInDB, inputValue);

  // Console loggin button press
  console.log(inputValue);

  // Clear the input field
  clearInputFieldEl();
});

onValue(itemListInDB, function (snapshot) {
  // function on update to db

  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val()); // an array of all key value pairs in the db

    // necessary to reset the visual with each update otherwise shit is odd
    clearItemListEl();

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];

      let currentItemID = currentItem[0]; // key
      let currentItemValue = currentItem[1]; // value

      appendItemToItemListEl(currentItem); // displaying items on web
    }
  } else {
    itemListEl.innerHTML = "No items here";
  }
});

function clearItemListEl() {
  itemListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToItemListEl(item) {
  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");

  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `stuff/${itemID}`); // necessary to find exact location of db item to be removed

    remove(exactLocationOfItemInDB); // delete from database function
  });

  itemListEl.append(newEl);
}
