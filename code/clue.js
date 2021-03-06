// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#006a71',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'trophy'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#ffd571',
  description: 'Dijon mustard hoarder',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe'
}

const mrsPeacock= {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#1e5f74',
  description: 'Illegal is her middle name',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Exotic birds trafficker',
  favouriteWeapon: 'poison'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#654062',
  description: 'Loves to (un)fix things',
  age: 50,
  image: 'assets/plum.png',
  occupation: 'PLUMber',
  favouriteWeapon: 'candlestick'
}

const mrsScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: '#931a25',
  description: 'Scars hearts with no mercy',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'TikTok celebrity',
  favouriteWeapon: 'bat'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ecf4f3',
  description: 'Knows all the secrets',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'knife'
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  id:'rope',
  color: 'brown',
  image:'assets/rope.jpg'
}

const knife = {
  name: 'Knife',
  id:'knife',
  color: 'grey',
  image: 'assets/knife.jpg'
}

const candlestick = {
  name: 'Candlestick',
  id:'candlestick',
  color: 'white',
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  id:'dumbbell',
  color: 'black',
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  id:'poison',
  color: 'green',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  id:'axe',
  color: 'red',
  image: 'assets/axe.jpg'
}

const bat = {
  name: 'Bat',
  id:'bat',
  color: 'light brown',
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  id:'trophy',
  color: 'yellow',
  image: 'assets/trophy.jpg'
}

const pistol = {
  name: 'Pistol',
  id:'pistol',
  color: 'blue',
  image: 'assets/gun.jpg'
}

// OBJECTS FOR THE ROOMS 

const diningroom = { 
  name: 'Dining Room',
  image: 'assets/diningroom.jpg'
}

const conservatory = { 
  name: 'Conservatory',
  image: 'assets/conservatory.jpg'
}

const kitchen = {
  name: 'Kitchen', 
  image: 'assets/kitchen.jpg'
}

const study = { 
  name: 'Study',
  image: 'assets/study.jpg'
}

const library = { 
  name: 'Library',
  image: 'assets/library.jpg'
}

const billiardsroom = { 
  name: 'Billiards Room',
  image: 'assets/billiardsroom.jpg'
}

const lounge = { 
  name: 'Lounge',
  image: 'assets/lounge.jpg'
}

const ballroom = { 
  name: 'Ballroom',
  image: 'assets/ballroom.jpg'
}

const hall = { 
  name: 'Hall',
  image: 'assets/hall.jpg'
}

const spa = { 
  name: 'Spa',
  image: 'assets/spa.jpg'
}

const livingroom = { 
  name: 'Living Room',
  image: 'assets/livingroom.jpg'
}

const observatory = { 
  name: 'Observatory',
  image: 'assets/observatory.jpg'
}

const theater = { 
  name: 'Theater',
  image: 'assets/theater.jpg'
}

const guesthouse = { 
  name: 'Guest House',
  image: 'assets/guesthouse.jpg'
}

const patio = { 
  name: 'Patio',
  image: 'assets/patio.jpg'
}

// ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS 

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  mrPlum,
  mrsScarlet,
  mrsWhite 
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  diningroom,
  conservatory,
  kitchen,
  study,
  library,
  billiardsroom,
  lounge,
  ballroom,
  hall,
  spa,
  livingroom,
  observatory,
  theater,
  guesthouse,
  patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// OBJECT THAT KEEPS THE MYSTERY.

const mystery = {
  killer: null,
  weapon: null,
  room: null
};

// RANDOM KILLER FUNCTION

// FUNCTION TO DELAY PICK KILLER FUNCTION
const delayPickKiller = () => {
  document.getElementById('loaderKiller').classList.remove('hidden');
  setTimeout(pickKiller, 1000);
};
document.getElementById('killerCard').addEventListener('click', delayPickKiller);

// PICK KILLER FUNCTION
const pickKiller = () => {
  document.getElementById('loaderKiller').classList.add('hidden');
  mystery.killer = randomSelector(suspects) // This will randomly select a killer from the suspects. And add that to the mystery object.

  // This will change what information about the killer is displayed
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;

  // SHUFFLE FAVOURITE WEAPON
  const shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons);
    document.getElementById('favouriteWeapon').innerHTML = `Favourite Weapon: ${mystery.favouriteWeapon.name}`;
  };
  shuffleFavouriteWeapon();
};


// RANDOM WEAPON FUNCTION

// FUNCTION TO DELAY PICK WEAPON FUNCTION
const delayPickWeapon = () => {
  document.getElementById('loaderWeapon').classList.remove('hidden');
  setTimeout(pickWeapon, 1000);
};
document.getElementById('weaponCard').addEventListener('click', delayPickWeapon);

// PICK WEAPON FUNCTION
const pickWeapon = () => { 
  document.getElementById('loaderWeapon').classList.add('hidden');
  mystery.weapon = randomSelector(weapons);

  document.getElementById('weaponCard').style.background = '#FFFFFF';
  document.getElementById('weaponImage').src = mystery.weapon.image;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
};


// RANDOM ROOM FUNCTION

// FUNCTION TO DELAY PICK ROOM FUNCTION
const delayPickRoom = () => {
  document.getElementById('loaderRoom').classList.remove('hidden');
  setTimeout(pickRoom, 1000);
};
document.getElementById('roomCard').addEventListener('click', delayPickRoom);

// PICK ROOM FUNCTION
const pickRoom = () => { 
  document.getElementById('loaderRoom').classList.add('hidden');
  mystery.room = randomSelector(rooms);

  document.getElementById('roomCard').style.background = '#FFFFFF';
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
  document.getElementById('roomImage').src = mystery.room.image;
};

// MYSTERY REVEAL FUNCTION 

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`;
};
