/**
 * Login Page
 */
import React from 'react';
import { connect } from 'react-redux';
// import { getShowAddPost } from '../../../App/AppReducer';
// import { getPosts } from '../../PostReducer';

// require('./main.css');

class Login extends React.Component {
  render() {
    return(
      <div>
        <h1>Login</h1>
      </div>
      )
  }
}
// function mapStateToProps(state) {
//   return {
//     showAddPost: getShowAddPost(state),
//     posts: getPosts(state),
//   };
// }
// export default connect(mapStateToProps)(Login);

export default Login;