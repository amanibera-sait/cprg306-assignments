
export default function Item({name, quantity, category}) {
    return (
        <li>
            <span>{name}</span>
            <span>{quantity}</span>
            <span>{category}</span>
        </li>
    )
    
    
    
}