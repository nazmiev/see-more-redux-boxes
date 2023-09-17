import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, fetchMoreCards } from "./redux/cards-reducer";
import CardItem from "./components/CardItem";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.Cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const onChangePage = () => {
    if (cards.cards.length >= 6) {return;};
    dispatch(fetchMoreCards(cards.page + 1));
  };

  return (
    <div className={styles.component}>
      <h1 className={styles.pageTitle}>Colors</h1>
      <div className={styles.wrapper}>
        {cards.cards.length && cards.cards.map((card, index) => (
          <CardItem
            key={index}
            id={card.id}
            name={card.name}
            color={card.color}
          />
        ))}
      </div>
      <div className={styles.button} onClick={() => onChangePage()} disabled={cards.cards.length >= 6}>See more</div>
    </div>
  );
}

export default App;
