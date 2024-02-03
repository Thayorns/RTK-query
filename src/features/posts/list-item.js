import { Link } from "react-router-dom"

const ListItem = ({el}) => (
    <li className='li-container'>
        <span>№{el['id']}</span>
        <h1>{el['title'].slice(0, 6)}</h1>
        <p>{el['body']}</p>
        <Link to={`/list-item-description/${el.id}`}><button>просмотр</button></Link>
    </li>
) 
export default ListItem