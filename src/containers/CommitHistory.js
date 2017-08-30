import { connect } from 'react-redux';
import { commitsFetchRequested, commitsDeleteRequested } from '../store/commits';
import CommitHistory from '../components/CommitHistory';

const mapStateToProps = ({ commits }) => ({
  fetching: commits.fetching,
  commits: commits.commits,
});

const mapDispatchToProps = {
  onLoad: commitsFetchRequested,
  onDeleteClick: commitsDeleteRequested,
  onRefreshClick: commitsFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitHistory);
