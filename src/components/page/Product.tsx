import { useEffect, useState } from "react"
import { IProduct } from "../../models"
import { Link, useParams } from "react-router-dom"
import { getById } from "../../api/products"

const Product = () => {
    const { id } = useParams()
    const [Product, setproduct] = useState<IProduct>({} as IProduct)
    const fecthProductbyid = async (id: string) => {
        try {
            const { data } = await getById(id)
            setproduct(data)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        if (id) {
            fecthProductbyid(id)
        }
    }, [])

    return (
        <div className="container mx-auto">
            {/* menu */}
            <nav className="shadow-slate-600 p-3">
                <ul className="flex gap-y-3 gap-x-7 text-[#707070]">
                    <Link to={""}>Trang Chủ</Link>
                    <Link to={""}>Điện Thoại</Link>
                    <Link to={""}>Samsung</Link>
                    <Link to={""}>{Product.name}</Link>
                </ul>
            </nav>
            <h1>{Product.name}</h1>
            <hr className="my-2" />
            <div className=" grid grid-cols-2">
                {/* image */}
                <div className="">
                    <img src={Product.images[0].base_url} alt="" />
                    {/* <img className="max-h-[200px]" src={Product.images[0].base_url ? Product.images[0].base_url : ""} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Product
