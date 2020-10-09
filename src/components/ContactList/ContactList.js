import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../redux/contacts/contactsActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactListItem/ContactListItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={s.list}>
    {contacts.map(({ id, ...prop }) => (
      <CSSTransition key={id} timeout={2500} classNames={s}>
        <ContactListItem
          key={id}
          {...prop}
          onRemove={() => onRemoveContact(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
