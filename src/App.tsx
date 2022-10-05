import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Props } from "./types";

function App({children}:Props) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
}

export default App
