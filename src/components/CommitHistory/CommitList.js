import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CardList } from 'bw-axiom';

export default class CommitList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <CardList { ...rest }>
        { children }
      </CardList>
    );
  }
}
