import React, { ErrorInfo } from "react";
import { Props,State } from "../types";
import ErrorComponentTemplates from "./ErrorComponentTemplates";


export class ErrorBoundary extends React.Component <Props, State>{
  
  constructor(props:Props) {
    
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Boolean) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log("error: " + error);
    console.log("errorInfo: " + JSON.stringify(errorInfo));
    console.log("componentStack: " + errorInfo.componentStack);
  }

  render() {
    const {options} = this.props;
    console.log(options);
    
    if (this.state.hasError) {
      return <ErrorComponentTemplates />;
    }

    return <>{this.props.children}</>
  }
}
