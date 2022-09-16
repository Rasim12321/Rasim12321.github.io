export default function List(data) {
    console.log('==============')
    console.log(data)
    console.log('==============')

    return(
        <>
            <ul>
                {data.goods.map(item => <li key={item.title}>{item.title} <img src={item.image} alt="" /></li>)}
            </ul>
        </>
    )
}