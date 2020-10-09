import { combineReducers } from "redux";
import contactsTypes from "./contactsTypes";

import errorMessage from "../../components/Notification/Notification";

const items = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  { type, payload }
) => {
  switch (type) {
    case contactsTypes.ADD:
      const names = state.map((item) => item.name.toLowerCase());
      if (names.includes(payload.contact.name.toLowerCase().trim())) {
        errorMessage(payload.contact.name);
        return state;
      } else {
        return [...state, payload.contact];
      }

    case contactsTypes.REMOVE:
      return state.filter(({ id }) => id !== payload.contactId);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case contactsTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
