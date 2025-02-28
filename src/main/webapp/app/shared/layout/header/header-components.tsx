import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Brand = () => (
  <NavbarBrand tag={Link} to="/page" className="brand-logo">
    <span className="brand-title">
      <Translate contentKey="global.title">Portfolio</Translate>
    </span>
    <span className="navbar-version"> <Translate contentKey="global.subtitle">Portfolio</Translate></span>
  </NavbarBrand>
);

export const About = () => (
  <NavItem>
    <NavLink tag={Link} to="/page" className="d-flex align-items-center">
      <FontAwesomeIcon icon="user" />
      <span>
        <Translate contentKey="global.menu.about">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);

