import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { getAll } from "../../api/products"
import { IProduct } from "../../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const deleteProduct = (id: string) => {
        return null
    }

    return <>

        <div className="overflow-x-auto rounded-lg border border-gray-200">

            <Link to={"/admin/product/add"}><button className="bg-blue-600  text-white rounded-md p-2">Thêm Sản Phẩm</button></Link>
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[200px]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <Link to={"/admin/product/delete/" + product.id} className="bg-red-600 ml-2 text-white rounded-md p-2">Xoá</Link>

                                <Link to={"/admin/product/" + product.id} className="bg-yellow-600 ml-2 text-white rounded-md p-2">Sửa</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard