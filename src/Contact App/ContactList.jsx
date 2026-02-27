import React from "react";
import { useContext } from "react";
import ContactContext from "./ContactContext";
import { ContactItem } from "./ConatctItem";

export const ContactList = () => {
  const { state,dispatch } = useContext(ContactContext);

  const style1={
    display:"flex",
    flexDirection: "column",
    gap:"10px",
  }
  const style2={
    display:"flex",
    gap:"5px",
  }
  return (
    <div>
<ol style={style1}>
  {
  state.length === 0 ? (
    <p>No Contacts Available</p>
  ) : (
    state.map((contact) => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
    ))
  )}
</ol>
    </div>
  );
};
