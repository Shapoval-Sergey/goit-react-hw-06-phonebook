import contactsTypes from "./contactsTypes.js";
import { v4 as uuidv4 } from "uuid";

const addContacts = (name, number) => {
  return {
    type: contactsTypes.ADD,
    payload: {
      contact: {
        id: uuidv4(),
        name,
        number,
      },
    },
  };
};

const removeContacts = (contactId) => {
  return {
    type: contactsTypes.REMOVE,
    payload: {
      contactId,
    },
  };
};

const changeFilter = (filter) => {
  return {
    type: contactsTypes.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};

export default { addContacts, removeContacts, changeFilter };
