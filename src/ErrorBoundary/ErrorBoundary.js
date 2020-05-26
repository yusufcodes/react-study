// Not working!
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError)
        {
            return <h1>Something went wrong</h1>;
        }

        // Return whatever we wrap the ErrorBoundary around (default content)
        else 
        {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;