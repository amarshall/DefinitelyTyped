import * as React from "react";
import withSideEffect = require("react-side-effect");

interface DocumentTitleProps {
    title: string;
}

interface WrappedProps extends DocumentTitleProps {
    bar: string;
}

class DocumentTitle extends React.Component<DocumentTitleProps> {
    render() {
        if (this.props.children) {
            return React.Children.only(this.props.children);
        } else {
            return null;
        }
    }
}

function reducePropsToState(propsList: WrappedProps[]): string | undefined {
    const innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.title;
    }
}

function handleStateChangeOnClient(title?: string): void {
    document.title = title || "";
}

const DocumentTitleWithSideEffects = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient,
)(DocumentTitle);

React.createElement(DocumentTitleWithSideEffects, {title: "foo", bar: "baz"});
