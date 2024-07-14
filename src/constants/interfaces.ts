export interface Ingredient {
  name: string,
  cost: number,
  img: string
}

export interface Topping {
  name: string,
  cost: number,
  img: string
}

export interface Size {
  name: string,
  price: number
}

export interface Dough {
  name: string,
  price: number
}

export interface Pizza {
  id: number,
  name: string,
  ingredients: Ingredient[],
  toppings: Topping[],
  description: string,
  sizes: Size[],
  doughs: Dough[],
  calories: number,
  protein: string,
  totalFat: string,
  carbohydrates: string,
  sodium: string,
  allergens: string[],
  isVegetarian: boolean,
  isGlutenFree: boolean,
  isNew: boolean,
  isHit: boolean,
  img: string
}