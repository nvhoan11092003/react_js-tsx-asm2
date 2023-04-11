import { Link } from "react-router-dom"
import { useLocalStorage } from "../../hook"

const Header = () => {
    const [user, setUser] = useLocalStorage('user', null)
    if (user) {
        return <header className="bg-red-500 flex justify-center items-center p-1">
            <Link to={"/"}><img src="./logo.png" alt="logo" className="w-[50px]" />
            </Link>
            <input type="text" className="rounded-md ml-[100px] h-[30px] w-7/12 p-3 " placeholder="Tìm Kiếm" />
            <Link to={"/"} className="p-2 text-white hover:text-blue-500">{user.last_name}</Link>
            <Link to={"/logout"} className="p-2 text-white hover:text-blue-500">logout</Link>
        </header>
    } else return <header className="bg-red-500 flex justify-center items-center p-1">
        <Link to={"/"}><img src="./logo.png" alt="logo" className="w-[50px]" />
        </Link>
        <input type="text" className="rounded-md ml-[100px] h-[30px] w-7/12 p-3 " placeholder="Tìm Kiếm" />
        <Link to={"/signin"} className="p-2 text-white hover:text-blue-500">login</Link>
        <Link to={"/signup"} className="p-2 text-white hover:text-blue-500">logup</Link>
    </header>

}

export default Header
