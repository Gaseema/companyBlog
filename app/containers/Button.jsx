import { connect } from 'react-redux';
import Button from '../components/Button.jsx';

const mapDispatchToProps = dispatch => ({
  updateTime(time) {
    dispatch({ type: 'UPDATE_TIME', time });
  }
});

export default connect(null, mapDispatchToProps)(Button);

