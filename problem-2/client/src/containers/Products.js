// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import Main from '../components/Products';
import * as productAction from '../actions/productAction';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    user: state.userState,
    productArray: state.productState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedproductGetList: () => dispatch(productAction.getList())    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
