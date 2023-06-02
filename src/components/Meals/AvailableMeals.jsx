import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MelItem/MealItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "손흥민",
    description: "epl 득점왕",
    price: 1500.4521,
  },
  {
    id: "m2",
    name: "손웅정",
    description: "세계의 벽? 안높아!!!",
    price: 1000.254,
  },
  {
    id: "m3",
    name: "짜릿해",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "최고야",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
const mealsList = DUMMY_MEALS.map((e)=>(<MealItem price={e.price} key={e.id} id={e.id} name={e.name} description={e.description}/>))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals