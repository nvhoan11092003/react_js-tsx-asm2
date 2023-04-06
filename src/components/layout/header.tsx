import { Link } from "react-router-dom"
const Header = () => {
    return <header className="bg-red-500 flex justify-center items-center p-1">
        <Link to={"/"}><img src="./logo.png" alt="logo" className="w-[50px]" />
        </Link>
        <input type="text" className="rounded-md ml-[100px] h-[30px] w-7/12 p-3 " placeholder="Tìm Kiếm" />
    </header>

}

export default Header
