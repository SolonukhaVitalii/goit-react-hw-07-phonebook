import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from './redux/contacts/';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import titleTransition from './transitions/title.module.css';
import popTransition from './transitions/pop.module.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="app">
        <CSSTransition
          in timeout={500}
          classNames={titleTransition}
          appear>
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        {items.length > 1 &&
          <CSSTransition
            in timeout={250}
            classNames={popTransition}
            unmountOnExit>
            <Filter />
          </CSSTransition>}
        {items.length > 0 ? (
          <ContactList />
        ) : (
          <p>The contact list is empty. Please add a new contact.</p>
        )}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  items: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

App.propTypes = {
  items: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
