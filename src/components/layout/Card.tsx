import { Link } from "react-router-dom"
import { IProduct } from "../../models"

type props = {
    data: IProduct
}

const Card = ({ data }: props) => {

    const link = "product/" + data.id
    return (
        <Link to={link}>
            <div className="flex flex-col sm:block items-center">
                <img className="max-h-[200px]" src={data.images?.[0].base_url} alt="" />
                <p className="mt-2 ">{data.name}</p>
                <div className="my-2 flex gap-x-4">
                    <div className="flex gap-x-3">
                        <button className="flex items-center text-gray-400 ">
                            {data.price} ₫
                            <p className="text-red-500 ml-4">
                                {data.original_price} ₫
                            </p></button>
                    </div>
                </div>
                <p className="flex gap-1  items-center"><img src="star.png" alt="" /><img src="star.png" alt="" /><img src="star.png" alt="" /><img src="star.png" alt="" /><img src="star.png" alt="" />lượt đánh giá {70 + data.id}</p>
                <p className="text-red-500">  </p>
            </div>
        </Link>
    )
}

export default Card
