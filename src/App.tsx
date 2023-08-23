import { useEffect, useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { getRoutes } from "./routes";
import { ErrorFallback } from "./pages/errors/errorBoundary";
import constants from "./config/constants";
import "./App.css";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {useRoutes(getRoutes(constants.STUDENT))}
    </ErrorBoundary>
  )
}

export default App