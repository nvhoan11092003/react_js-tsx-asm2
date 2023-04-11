import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
    return (<div className="">
        <header className="bg-blue-500 flex justify-center items-center p-1">
            <Link to={"/admin"}><img src="./logo.png" alt="logo" className="w-[50px]" />
            </Link>
            <p className="text-white mx-2">DashBoard </p>
            <input type="text" className="rounded-md ml-[100px] h-[30px] w-7/12 p-3 " placeholder="Tìm Kiếm" />
        </header>
        <div className="flex items-start">
            {/* menu dọc */}
            <ul
                className="mr-4 flex list-none flex-col flex-wrap pl-0"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation" className="flex-grow text-center">
                    <Link
                        to="/admin"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home03"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home03"
                        aria-selected="true"
                    >Điện Thoại</Link>
                </li>
                <li role="presentation" className="flex-grow text-center">
                    <Link
                        to="#tabs-profile03"
                        className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile03"
                        role="tab"
                        aria-controls="tabs-profile03"
                        aria-selected="false"
                    >Laptop</Link>
                </li>
                <li role="presentation" className="flex-grow text-center">
                    <Link
                        to="#tabs-messages03"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-messages03"
                        role="tab"
                        aria-controls="tabs-messages03"
                        aria-selected="false"
                    >Máy tính bảng</Link>
                </li>
                <li role="presentation" className="flex-grow text-center">
                    <Link
                        to="#tabs-contact03"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-contact03"
                        role="tab"
                        aria-controls="tabs-contact03"
                        aria-selected="false"
                    > Âm thanh </Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>

        <footer>footer</footer>
    </div>
    )
};

export default AdminLayout;
