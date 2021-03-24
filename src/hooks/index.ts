import React from "react";

export function useToggle(initialState = false) {
    return React.useReducer(state => !state, initialState);
}
