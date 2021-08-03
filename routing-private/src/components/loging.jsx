import { useContext } from "react"
import { ThemeContext } from "../contextComponent/AuthContext"
export default function Login() {
    const {handlechange}=useContext(ThemeContext)
    return <div>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <button onClick={() => {
            handlechange()
        }}>Submit</button>
    </div>
    
}