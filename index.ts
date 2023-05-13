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