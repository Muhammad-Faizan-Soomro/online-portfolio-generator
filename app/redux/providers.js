"use client"
import { store } from "./store";

import { Provider } from "react-redux";

export function Redux({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>
}