import { connect } from 'react-redux';
import Main from '../components/Main';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    user: state.userState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
