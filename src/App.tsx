import React, { Suspense } from "react";

import { ErrorProfile, Profile } from "./components";
import ErrorBoundary from "./components/ErrorBoundary";
import Profile2 from "./components/Profile2";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Profile />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Profile2 />
      </Suspense>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <ErrorProfile />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
