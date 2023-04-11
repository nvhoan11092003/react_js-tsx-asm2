import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hook"

const Logout = () => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()
    const logout = async () => {
        try {
            setUser(null)

            navigate('/admin')

        } catch (err) {
            console.log(err);

        }

    }
    useEffect(() => {

        logout()

    }, [])


    return (
        <div>

        </div>
    )
}

export default Logout
