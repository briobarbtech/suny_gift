import { createContext } from "react";

export const AppContext = createContext()

export function ContextProvider(props) {

    let x = 2
    return (<AppContext.Provider value={x}>
        {props.children}
    </AppContext.Provider>)
}

