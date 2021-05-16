import React from "react";
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
    //    process the error
        return {hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        return this.state.hasErrored ? (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/FOeYt4E.png'/>
                <ErrorImageText> Oops!! The Page was not found!</ErrorImageText>
            </ErrorImageOverlay>
        )
            :
            this.props.children;
    }
}

export default ErrorBoundary;