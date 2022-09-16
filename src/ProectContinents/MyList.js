export default function Main(props){
    return(
        <>
            <div className="countries">
                {props.obj.map((item) => <li key={item} > {item} </li> )}
            </div>
        </>
    )
}