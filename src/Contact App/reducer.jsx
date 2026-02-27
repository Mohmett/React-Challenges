export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact)=>(
        contact.id !== action.payload
      ))
    case "favorite":
      return state.map((contact) =>
        contact.id === action.payload ? { ...contact, favorite: !contact.favorite } : contact,
      );
          case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload }
          : contact
)
      
  }
};
