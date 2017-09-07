import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import { uiCloseChangePasswordDialog } from '../../store/ui';

const mapStateToProps = ({ ui }) => ({
  isOpen: ui.isChangePasswordDialogOpen,
});

const mapDispatchToProps = {
  onRequestClose: uiCloseChangePasswordDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
