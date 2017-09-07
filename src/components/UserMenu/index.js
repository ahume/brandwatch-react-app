import { connect } from 'react-redux';
import { profileFetchSucceeded } from '../../store/profile';
import { uiOpenChangePasswordDialog } from '../../store/ui';
import UserMenu from './UserMenu';

const mapStateToProps = ({ profile }) => ({
  email: profile.email,
  name: profile.name,
  imageUrl: profile.imageUrl,
});

const mapDispatchToProps = {
  onProfileReceived: profileFetchSucceeded,
  onChangePasswordClick: uiOpenChangePasswordDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
