import { useDispatch } from "react-redux"
import { Add } from "../action"
console.log(4)

const Continents = () => {
    console.log(4)

    const dispatch = useDispatch()
    const formHandler = (event) => {
        event.preventDefault()
        dispatch(Add(event.target.elements.name.value))

    }

    return(
        <>
            <form onSubmit={formHandler} action="">

                <select>
                    <option value="">Africa</option>
                    <option value="">Asia</option>
                    <option value="">America</option>
                </select>
                <input type="text" name="name"/>
                <button type="submit">ADD</button>
            </form>
        </>
    )
}

export default Continents