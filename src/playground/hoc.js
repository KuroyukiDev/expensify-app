// Higher Order Component (HOC):
//    > A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>
      The info is: <br/>
      [ {props.info} ]
    </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAdmin && (
          <p>
            This is private info. Please don't share!
          </p>
        )
      }
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AdminInfo isAdmin info="The sky is blue." />,
  document.getElementById('app')
);