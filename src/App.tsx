import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Props } from "./types";

function App({children}:Props) {
  const options = {
    errorComponentType:"template-two"
  }
  return (
    <ErrorBoundary options={options}>
      {children}
    </ErrorBoundary>
  )
}

export default App
