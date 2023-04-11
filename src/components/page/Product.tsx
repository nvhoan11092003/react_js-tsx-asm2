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
                    <img className="h-[450px] " src={Product.images?.[0].base_url} alt="" />
                    <div className=" flex gap-x-2">
                        {Product.images?.map((item, index) => {
                            console.log(Product.images?.[0].base_url);
                            return <img className="max-h-[100px] w-auto" src={Product.images?.[index].base_url} alt="" />
                        })}
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-x-2 items-end">
                        <h1 className="text-red-500 text-2xl">{Product.price} đ</h1>
                        <h2 className="text-gray-500">{Product.original_price} đ</h2>
                    </div>
                    <div className="h-[300px] mt-3">
                        Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản {Product.name}, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
                    </div>
                    <div className="flex items-center gap-x-5">
                        <button className="w-[200px] p-2 bg-red-500 text-white">Mua Ngay</button>
                        <button className="w-[48px] border border-red-500 flex items-center justify-center"><img className="p-2 " src="../Icon.png" alt="giohang" /></button>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-red-500 text-2xl"> Đặc Điểm Nổi Bật</h1>
                <div className="" dangerouslySetInnerHTML={{ __html: Product.description }}></div>

            </div>
        </div>
    )
}

export default Product
