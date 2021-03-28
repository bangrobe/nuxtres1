import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  },
  totalCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  }
};

export const mutations = {
  UPDATE_FOODDATA: (state, data) => {
    state.fooddata = data;
  },
  ADD_TO_CART: (state, formOutput) => {
    //Vi moi item dua vao cart se co su khac nhau ve
    //Addons va Option nen phai su dung uuidv4 de phan biet
    formOutput.id = uuidv4();

    //formOutput nhan du lieu tu _id
    state.cart.push(formOutput);
  }
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      const data = await this.$axios.$get("restaurants");
      if (data) {
        commit("UPDATE_FOODDATA", data);
      }

      // await fetch("http://localhost:1337/restaurants", {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log(data);
      //     commit("UPDATE_FOODDATA", data);
      //   });
    } catch (err) {
      console.log(err);
    }
  }
};
