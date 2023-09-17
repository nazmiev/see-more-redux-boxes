import { useSelector } from "react-redux";
import { fetchColors as fetchColorsApi } from "../api/api";

const initialState = {
  page: 1,
  cards: []
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-CARDS": {
      return {
        page: state.page,
        cards: action.cards
      };
    };
    case "MORE-CARDS": {
      return {
        ...state,
        page: state.page,
        cards: [...state.cards, ...action.cards]
      };
    };
    default:
      return state;
  }
};

export const setCards = (cards) => ({ type: "SET-CARDS", cards });

export const fetchCards = () => {
  return (dispatch) => {
    fetchColorsApi()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch(setCards(data.data));
      });
  };
};

export const moreCards = (cards) => ({ type: "MORE-CARDS", cards });

export const fetchMoreCards = (page) => {
  return (dispatch) => {
    fetchColorsApi(page)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch(moreCards(data.data));
      });
  };
};
