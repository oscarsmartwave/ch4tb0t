/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Parent from './modules/Parent';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
/* <Route
      path="/posts/"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    /> */
export default (
  <Route path="/" component={Parent}>
    <IndexRoute getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Login/pages/Login').default);
        });
      }}
    />
    <Route 
      path="setup/venues" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Venues/pages').default);
        });
      }} 
    />
    <Route
      path="setup/venues/add" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Venues/pages/Add').default);
        });
      }} 
    />
    <Route
      path="setup/venues/:cuid" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Venues/pages/Venue').default);
        });
      }}
    />
    <Route
      path="setup/tables" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Tables/pages/Tables').default);
        });
      }}
    />
    <Route
      path="setup/tables/add" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Tables/pages/Add').default);
        });
      }}
    />
    <Route
      path="setup/tables/:cuid" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Tables/pages/Table').default);
        });
      }}
    />
    <Route 
      path="setup/events" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Events/pages/Events').default);
        });
      }}
    />
    <Route
      path="setup/events/add" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Events/pages/Add').default);
        });
      }}
    />
    <Route
      path="setup/events/:cuid" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Events/pages/Event').default);
        });
      }}
    />
    <Route
      path="setup/promoters" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Promoters/pages/Promoters').default);
        });
      }}
    />
    <Route
      path="setup/promoters/add" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Promoters/pages/Add').default);
        });
      }}
    />
    <Route
      path="setup/promoters/:cuid" 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Promoters/pages/Promoter').default);
        });
      }}
    />


  </Route>
);
