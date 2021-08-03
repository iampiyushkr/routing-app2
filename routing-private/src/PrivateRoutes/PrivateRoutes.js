import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { ThemeContext } from "../contextComponent/AuthContext"
export default function PrivateRoutes({path,children}) {
    const { theme } = useContext(ThemeContext)
    
    if (!theme) {

      return <Redirect to="login"/>
    }
    return <>
        <Route path={path}>{ children}</Route>
        </>
}