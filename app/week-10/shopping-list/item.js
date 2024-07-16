
export default function Item({name, quantity, category}) {
    return (
        <li className="rounded bg-gray-200 bg-auto max-w-sm m-4 p-2.5 drop-shadow-md" >
            <span className="text-xl font-bold">{name}</span><br></br>
            <span>Buy {quantity} </span>
            <span>in {category}</span>
        </li>
    )
    
    
    
}