import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Card,
  Grid,
  GridCell,
  Icon,
  ImageCircle,
  Heading,
  Paragraph,
} from 'bw-axiom';

export default class Commit extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  }

  render() {
    const { body, id, user, onDeleteClick } = this.props;

    return (
      <Card key={ id }>
        <Grid responsive={ false } verticalAlign="middle">
          <GridCell shrink={ true }>
            <ImageCircle size="4.5rem" src={ user.avatar } />
          </GridCell>

          <GridCell>
            <Heading textSize="headtitle">{ user.login }</Heading>
            <Paragraph>{ body }</Paragraph>
          </GridCell>

          <GridCell shrink={ true }>
            <Button
                circular="small"
                data-tid="delete"
                onClick={ onDeleteClick }
                style="secondary">
              <Icon name="cross" />
            </Button>
          </GridCell>
        </Grid>
      </Card>
    );
  }
}
