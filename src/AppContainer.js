import { connect } from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state) => ({
  claim: state.main
});


export default connect(mapStateToProps)(App);
