import React, { Component } from 'react';
import {
  Canvas,
  Dock,
  DockFooter,
  DockHeader,
  DockIconLink,
  DockItem,
  Platform,
  UserMenu,
} from 'bw-axiom';
import './App.css';
import CommitHistory from '../containers/CommitHistory';


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
      <Platform>
        <Dock>
          <DockHeader>
            <DockIconLink
                active={ true }
                data-tid="search"
                icon="deck"
                title="Search" />
          </DockHeader>
          <DockFooter>
            <DockItem>
              { profile && (
                <UserMenu
                    email={ profile.email }
                    firstName={ profile.name }
                    imageSrc={ profile.imageUrl }
                    lastName=""
                    onLogout={ () => this.context.brandwatchAuthLogout() } />
              ) }
            </DockItem>
          </DockFooter>
        </Dock>
        <Canvas>
          <div className="bw-layout-container">
            <CommitHistory />
          </div>
        </Canvas>
      </Platform>
    );
  }
}
