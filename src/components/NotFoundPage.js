import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <p>Error: 404 - <Link to="/">Go home</Link></p>
  </div>
);

export default NotFoundPage;