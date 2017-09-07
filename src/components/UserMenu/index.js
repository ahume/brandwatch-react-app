import { connect } from 'react-redux';
import { uiOpenChangePasswordDialog } from '../../store/ui';
import UserMenu from './UserMenu';

const mapStateToProps = ({ profile }) => ({
  email: profile.email,
  name: profile.name,
  imageUrl: profile.imageUrl,
});

const mapDispatchToProps = {
  onChangePasswordClick: uiOpenChangePasswordDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
