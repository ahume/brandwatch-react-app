import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Button,
  Heading,
  ButtonIcon,
  ProgressInfinite,
} from 'bw-axiom';
import Commit from './Commit';
import CommitList from './CommitList';

export default class CommitHistory extends Component {

  static propTypes = {
    commits: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired),
    fetching: PropTypes.bool.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    onRefreshClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
      fetching,
      commits,
      onDeleteClick,
      onRefreshClick,
    } = this.props;

    return (
      <Base>
        <Heading textSize="display2">
          Github commits
          <Button
              circular="small"
              data-tid="refresh"
              onClick={ onRefreshClick }
              style="tertiary">
            <ButtonIcon name="refresh" />
          </Button>
        </Heading>

        { fetching && <ProgressInfinite /> }

        { !fetching && (
          <CommitList separators={ true }>
            { commits.map(message =>
              <Commit
                  { ...message }
                  key={ message.id }
                  onDeleteClick={ onDeleteClick.bind(null, message.id) } />
            ) }
          </CommitList>
        ) }
      </Base>
    );
  }
}
