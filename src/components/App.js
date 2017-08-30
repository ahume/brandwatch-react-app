import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Grid,
  GridCell,
  Heading,
  Paragraph,
  Strong,
  UserMenu,
} from 'bw-axiom';

export default class App extends Component {

  static contextTypes = {
    brandwatchAuthGetProfile: PropTypes.func.isRequired,
    brandwatchAuthLogout: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount() {
    this.context.brandwatchAuthGetProfile().then((profile) => {
      this.setState({ profile });
    });
  }

  render() {
    const { profile } = this.state;

    return (
      <Base space="x8" textCenter>

        <Grid horizontalAlign="middle">
          { profile && (
            <GridCell shrink>
              <UserMenu
                  email={ profile.email }
                  firstName={ profile.name }
                  imageSrc={ profile.imageUrl }
                  lastName=""
                  onLogout={ () => this.context.brandwatchAuthLogout() } />
            </GridCell>
          ) }

          <GridCell shrink>
            <Heading textSize="display1">Barebones React App</Heading>
          </GridCell>
        </Grid>

        <Paragraph>count <Strong>2</Strong></Paragraph>
      </Base>
    );
  }
}
