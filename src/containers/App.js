import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../store/products';
import App from '../components/App';

const mapStateToProps = ({ products }) => ({
  count: products.count,
});

const mapDispatchToProps = {
  onAdd: addProduct,
  onRemove: removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
