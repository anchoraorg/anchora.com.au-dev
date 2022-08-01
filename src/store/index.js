import { createStore } from "vuex";

export const SET_CONTACT_FORM_DATA = "SET_CONTACT_FORM_DATA";
export const SET_MOBILE_MENU_DATA = "SET_MOBILE_MENU_DATA";
export const SET_BODY_OVERLAY = "SET_BODY_OVERLAY";
export const SEND_CONTACT_FORM_DATA = "SEND_CONTACT_FORM_DATA";

export default createStore({
  state: {
    isContactFormSent: false,
    isContactFormOpen: false,
    isMobileMenuOpen: false,
  },
  getters: {
    isContactFormOpen: (state) => state.isContactFormOpen,
    isMobileMenuOpen: (state) => state.isMobileMenuOpen,
  },
  mutations: {
    [SEND_CONTACT_FORM_DATA](state, data) {
      var yourMessage =
        "Please call " +
        data.user_name +
        " " +
        data.user_surname +
        " on " +
        data.user_phone +
        " or email me at " +
        data.user_email +
        ".";
      var subject = "Contact Form Submission";
      document.location.href =
        "mailto:contactme@anchora.com.au?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(yourMessage);
      state.isContactFormSent = data;
    },
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
