import React, { Component } from 'react';
import logo from './assets/large-logo.svg';
import add from './assets/icon-add.svg';
import addLight from './assets/icon-add-light.svg';
import axios from 'axios';
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';

// components
import Icon from './components/Icon/Icon';
import Image from './components/Image/Image';
import Button from './components/Button/Button';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';

import InputText from './components/InputText/InputText';
import InputTextArea from './components/InputTextArea/InputTextArea';

import H1 from './components/H1/H1';
import H2 from './components/H2/H2';
import H3 from './components/H3/H3';
import Paragraph from './components/Paragraph/Paragraph';

import Header from './components/Header/Header';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegistration from './components/FormRegistration/FormRegistration';
import FormOrgInfo from './components/FormOrgInfo/FormOrgInfo'
import FormGrant from './components/FormGrant/FormGrant'

import PageGrants from './PageGrants'
import PageOrgDetails from './PageOrgDetails'
import PageRegistration from './PageRegistration'

        // <Header />
        // <H1 text="Random Components" />
        // <Image src={logo} />
        // <H1 text="Header 1" />
        // <H2 text="Header 2" />
        // <H3 text="Header 3" />
        // <Paragraph text="Sphinx of black quartzzz, judge my vow" />
        // <Icon type={add} />
        // <Button text="a button"/>
        // <ButtonWithIcon type={addLight} text="button with icon" />
        // <InputText name="newtextform" placeholder="some placeholder text" label="a text input" id="newInputText"/>
        // <InputTextArea name="newtextform" placeholder="some placeholder text" label="a text input" id="newInputText" />

        // <H1 text="Registration Form" />
        // <FormRegistration name="form-registration" id="form-registration"/>

        // <H1 text="Login Form" />
        // <FormLogin name="form-login" id="form-login"/>