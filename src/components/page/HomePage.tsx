import Card from "../layout/Card"
import Banner from "../layout/Banner"
import { getAll } from "../../api/products"
import { useEffect, useState } from "react"
import { IProduct } from "../../models"

const HomePage = () => {
    const [products, setproducts] = useState<IProduct[]>([])

    const fetchproducts = async () => {
        const { data } = await getAll()
        setproducts(data)

    }
    useEffect(() => {
        fetchproducts()
    }, [])

    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <div className="p-3 text-2xl">ĐIỆN THOẠI NỔI BẬT NHẤT</div>
            <div className=" grid grid-cols-4">
                {products.map(product =>
                    <Card
                        data={product}
                        key={product.id} />)
                }
            </div>
        </div>
    )
}

export default HomePage
