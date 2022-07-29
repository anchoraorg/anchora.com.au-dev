import { createStore } from "vuex";

export const SET_CONTACT_FORM_DATA = "SET_CONTACT_FORM_DATA";
export const SET_MOBILE_MENU_DATA = "SET_MOBILE_MENU_DATA";
export const SET_BODY_OVERLAY = "SET_BODY_OVERLAY";

export default createStore({
  state: {
    isContactFormOpen: false,
    isMobileMenuOpen: false,
  },
  getters: {
    isContactFormOpen: (state) => state.isContactFormOpen,
    isMobileMenuOpen: (state) => state.isMobileMenuOpen,
  },
  mutations: {
    [SET_CONTACT_FORM_DATA](state, data) {
      state.isContactFormOpen = data;
    },
    [SET_MOBILE_MENU_DATA](state, data) {
      state.isMobileMenuOpen = data;
    },
    [SET_BODY_OVERLAY](state, data) {
      data
        ? document.body.classList.add("body-overlay")
        : document.body.classList.remove("body-overlay");
    },
  },
});
