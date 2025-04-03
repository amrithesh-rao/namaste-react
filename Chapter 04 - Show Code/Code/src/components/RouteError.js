import React from 'react'
import { useRouteError } from 'react-router-dom';

const RouteError = () => {
  console.log(useRouteError());
  const routerError = useRouteError();
  return (
    <div>
      <div>{routerError.data}</div>
      <div>
        {routerError.status}: {routerError.statusText}
      </div>
    </div>
  );
};

export default RouteError;
