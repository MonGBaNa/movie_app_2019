import React from 'react';

function Food({name}) {
  console.log(name);
return <h1>this food is {name}</h1>
}

const MyFood = [
   {id:0, name:"chicken", rating:5}
  ,{id:1, name:"pizza", rating:4.7}
  ,{id:2, name:"ramen", rating:3.9}
  ,{id:3, name:"chicken soup", rating:2.8}
  ,{id:4, name:"potato", rating:3}
];

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name}/>
}

function App() {
  return (
    <div>
      {MyFood.map(renderFood)}
    </div>
  );
}

export default App;
