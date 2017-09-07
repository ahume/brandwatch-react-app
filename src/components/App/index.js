import React, { Component } from 'react';
import {
  Canvas,
  Dock,
  DockFooter,
  DockHeader,
  DockIconLink,
  DockItem,
  Platform,
} from 'bw-axiom';
import './App.css';
import CommitHistory from '../CommitHistory';
import UserMenu from '../UserMenu';
import ChangePassword from '../ChangePassword';

export default class App extends Component {

  render() {
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
              <UserMenu />
            </DockItem>
          </DockFooter>
        </Dock>
        <Canvas>
          <div className="bw-layout-container">
            <CommitHistory />
          </div>
        </Canvas>

        <ChangePassword />
      </Platform>
    );
  }
}
