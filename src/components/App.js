import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import s from "./App.module.css";

export default class App extends Component {
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem("contacts");
  //   if (persistedContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistedContacts),
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div className={s.box}>
        <CSSTransition
          in={true}
          appear
          timeout={1000}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <CSSTransition
          in={true}
          timeout={250}
          classNames={s.filter}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        {/* {visibleContacts.length > 0 && (
          
        )} */}

        <ContactList />
      </div>
    );
  }
}
