// Type definitions for react-side-effect 1.1
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
//                 Andrew Marshall <https://github.com/amarshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

declare function withSideEffect<WrappedProps, EffectState>(
    reducePropsToState: (propsList: WrappedProps[]) => EffectState,
    handleStateChangeOnClient: (state: EffectState) => void,
    mapStateOnServer?: (state: EffectState) => EffectState,
): ComponentEnhancer<WrappedProps, EffectState>;

type Component<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

type ComponentEnhancer<WrappedProps, EffectState> =
    <P>(component: Component<P>) => React.ComponentClass<P & WrappedProps> & SideEffect<EffectState>;

interface SideEffect<S> {
    canUseDOM: boolean;
    peek(): S;
    rewind(): S;
}

declare namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073
export = withSideEffect;
