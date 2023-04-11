
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProduct } from '../../api/products'

const ProductDelete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const onDelete = async (id: string) => {
        try {
            if (id) {
                await deleteProduct(id)
                navigate('/admin')
            }
        } catch (err) {
            console.log(err);

        }

    }
    useEffect(() => {
        if (id) {
            onDelete(id)

        }
    }, [])



    return (
        <div>

        </div>
    )
}

export default ProductDelete
