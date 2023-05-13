// Demo: https://www.typescriptlang.org/play?#code/KYOwrgtgBAIgTgSxAawCoE8AOwDOUDeAUFFAMIDyA0gKJQC8UA5AMYD2ywjANMVAArU+AZQCS9Jtkw4E3XkL4AlEaloNGOTIgAunHiRjUAYgEEAqgBlU4xgBNgAMwCGYADZbZAXwDchQmxA4WlAA5sBa8EjI4gAUWljAAFywiCgY2DgAlPQAfAS8-oFQNinIeAxEJCQA2hGp8TgAdBQ0ALpJ0Vl0uYyk7Lq81bVo9Q0CwiJtUB05THzAUjJ6lTUlabgN8koqk9NdTEKaCDqylVArkWuNBiYWqDud3QDqABasUMbQIgD8J1DevLw4GEwHAQFNipEcFU4tgWlAAD7woolKFDS4Na5mSwtDIdHweXwFIKhLS9DjiElDaJokbNagZHx+VgBVguYANFysYLRAAGYgA7o4QEEACT4Elk4AeHkMoA

enum DrinkTypes {
  COKE = 'coke',
  PEPSI = 'pepsi',
  SPRITE = 'sprite',
  DEFAULT = 'default',
};

const getDrink = (type: DrinkTypes) => {
  const drinks = {
    [DrinkTypes.COKE]: () => 'Coke',
    [DrinkTypes.PEPSI]: () => 'Pepsi',
    [DrinkTypes.SPRITE]: () => 'Sprite',
    [DrinkTypes.DEFAULT]: () => 'Who Am I?',
  };
  
  return (drinks[type] || drinks[DrinkTypes.DEFAULT])();
}

const getCoke = getDrink(DrinkTypes.COKE);

// console.log(`I want ${getCoke}`);