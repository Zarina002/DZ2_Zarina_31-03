var starbucksMenu = {
  coffee: {
    americano: {
      description: "Espresso shots with hot water.",
    },
    latte: {
      description: "Espresso with steamed milk and a small amount of foam.",
    },
    cappuccino: {
      description: "Espresso with equal parts of steamed milk and foam.",
    },
  },
  tea: {
    greenTea: {
      description: "Green tea made from Camellia sinensis leaves.",
    },
    EarlGreyTea: {
      description: "Black tea flavored with oil from the rind of the bergamot orange."
    },
  },
  otherDrinks: {
    hotChocolate: {
      description: "Hot, creamy chocolate drink topped with whipped cream.",
    },
  },
};

console.log(starbucksMenu.tea.EarlGreyTea)
console.log(starbucksMenu.otherDrinks.hotChocolate)
console.log(starbucksMenu.coffee.americano)





const userInput = Number(prompt("Введите число от 1 до 7"));

switch (userInput) {
    case 1:
        console.log("Понедельник")
        break
    case 2:
        console.log("Вторник")
        break
    case 3:
        console.log("Среда")
        break
    case 4:
        console.log("Четверг")
        break
    case 5:
        console.log("Пятница")
        break
    case 6:
        console.log("Суббота")
        break
    case 7:
        console.log("Воскресенье")
        break
    default:
        console.log("Введите корректное число!")
}