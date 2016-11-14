import { connect } from 'react-redux';
import Hello from '../components/Hello.jsx';

const mapStateToProps = state => ({
  time: state.time
});

export default connect(mapStateToProps)(Hello);

