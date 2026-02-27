import React, { useContext, useState } from "react";
import ContactContext from "./ContactContext";

export const ContactItem = ({ contact }) => {
  const { dispatch } = useContext(ContactContext);

  const [isEditing, setIsEditing] = useState(false);

  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
  });

  const style1 = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const style2 = {
    display: "flex",
    gap: "5px",
  };

  const handleSave = () => {
    dispatch({
      type: "edit",
      payload: {
        id: contact.id,
        ...editedContact,
      },
    });

    setIsEditing(false);
  };

  return (
    <li style={style1}>
      {isEditing ? (
        <>
          <input
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
          <input
            value={editedContact.phone}
            onChange={(e) =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
          />
          <input
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />

          <span style={style2}>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </span>
        </>
      ) : (
        <>
          <span>
            Name: {contact.name}{" "}
            <strong>{contact.favorite ? "★" : ""}</strong>
          </span>
          <span>Phone: {contact.phone}</span>
          <span>Email: {contact.email}</span>

          <span style={style2}>
            <button
              onClick={() =>
                dispatch({ type: "favorite", payload: contact.id })
              }
            >
              Favorite
            </button>

            <button onClick={() => setIsEditing(true)}>Edit</button>

            <button
              onClick={() =>
                dispatch({ type: "delete", payload: contact.id })
              }
            >
              Delete
            </button>
          </span>
        </>
      )}
    </li>
  );
};