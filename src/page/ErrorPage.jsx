import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error_Page() {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-[90vh]	">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="mt-2">
          <Link to="/" className="rounded-lg bg-blue-gray-600 hover:bg-blue-gray-200 transition px-3 py-2">Home</Link>
        </p>

      </div>
    </div>
  );
}
