import { useReducer } from "react";
import React from "react";
import ContactContext from "./ContactContext";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { reducer,initialState } from "./reducer";

export const ContactApp = () => {

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <ContactContext.Provider value={{state,dispatch}}>
        <h1>This is Contact App com</h1>
        <ContactForm></ContactForm>
        <ContactList></ContactList>
      </ContactContext.Provider>
    </div>
  );
};
