import { ADD, TOGGLE, DELETE } from "./actionType";

const initstate = [];
const todoReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD: {
      return [...state, payload];
    }
    case TOGGLE: {
      return state.map((e, i) => {
        if (e.id === payload) {
          e.status = !e.status;
        }
        return e;
      });
    }

    case DELETE: {
      return state.filter((e, i) => {
        return e.id !== payload;
      });
    }
  }
};
