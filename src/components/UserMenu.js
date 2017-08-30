import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { UserMenu as UserMenuAxiom } from 'bw-axiom';

export default class UserMenu extends Component {

  static propTypes = {
    email: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    onProfileReceived: PropTypes.func.isRequired,
  };

  static contextTypes = {
    brandwatchAuthGetProfile: PropTypes.func.isRequired,
    brandwatchAuthLogout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onProfileReceived } = this.props;
    const { brandwatchAuthGetProfile } = this.context;
    brandwatchAuthGetProfile().then(onProfileReceived);
  }

  render() {
    const { email, name, imageUrl } = this.props;
    const { brandwatchAuthLogout } = this.context;

    if (!email) return null;

    return (
      <UserMenuAxiom
          email={ email }
          firstName={ name }
          imageSrc={ imageUrl }
          lastName=""
          onLogout={ () => brandwatchAuthLogout() } />
    );
  }
}
