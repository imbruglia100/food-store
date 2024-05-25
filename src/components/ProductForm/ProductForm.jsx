import { useState } from 'react'
import './ProductForm.css'
import { useDispatch } from 'react-redux'
import { addAProduct } from '../../store/produce'
import { nanoid } from 'nanoid'

const ProductForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const handleProductAdd = (e) => {
        e.preventDefault()
        if(!name)return
        dispatch(addAProduct({id: nanoid(), name: name, liked: false}))
        setName('')
    }
    return (
    <>
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button onClick={handleProductAdd}>Submit</button>
        </form>
    </>
    )
}

export default ProductForm;
