import React, {Component} from 'react';
import configureStore from "./config/store";
import { Provider } from "react-redux";
import Routes  from './config/routes';
import I18n from "redux-i18n"
import {translations} from "./config/translations"

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/base.scss';

const store = configureStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <I18n translations={translations} initialLang="en">
          <Routes/>
        </I18n>
      </Provider>
    );
  }
}