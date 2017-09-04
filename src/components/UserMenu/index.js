import { connect } from 'react-redux';
import { profileFetchSucceeded } from '../../store/profile';
import UserMenu from './UserMenu';

const mapStateToProps = ({ profile }) => ({
  email: profile.email,
  name: profile.name,
  imageUrl: profile.imageUrl,
});

const mapDispatchToProps = {
  onProfileReceived: profileFetchSucceeded,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
