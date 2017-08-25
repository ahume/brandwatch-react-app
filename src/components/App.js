import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Button,
  ButtonGroup,
  Heading,
  Paragraph,
  Strong,
} from 'bw-axiom';

export default class App extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { count, onAdd, onRemove } = this.props;

    return (
      <Base space="x8" textCenter>
        <Heading textSize="display1">Barebones React App</Heading>
        <Paragraph>count <Strong>{ count }</Strong></Paragraph>
        <ButtonGroup>
          <Button data-tid="add-product" onClick={ () => onAdd(2) }>
            Add
          </Button>
          <Button data-tid="remove-product" onClick={ () => onRemove(1) }>
            Remove
          </Button>
        </ButtonGroup>
      </Base>
    );
  }
}
