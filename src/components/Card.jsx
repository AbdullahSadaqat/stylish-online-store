import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

const Card = ({data}) => {
    return (
        <div className="max-w-sm relative group select-none">
            <div className="aspect-square overflow-hidden">
                <img src={data.imgSrc} alt="Product" className="rounded-md object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" />
            </div> 
            {data.discount && <span className="bg-blue-600 py-1 px-2 text-xs absolute -top-1 -right-1 rounded-md text-slate-100">{data.discount}% off</span>}
            <div>

            </div>
            <h5 className="font-bold text-sm mt-2 truncate hover:text-slate-800"><Link to={data.link??'/'}>{data.title}</Link></h5>
            <p className="text-sm truncate line-clamp-2 text-wrap">{data.description}</p>
            <div className="flex justify-between px-1">
                <p className="font-bold"> {data.currency} {data.discount ? (data.price - (data.price/100*data.discount)) : data.price}  {data.discount && <span className="line-through text-xs">{data.price}</span>}</p>
                <div>
                    <button className="cursor-pointer"><FontAwesomeIcon icon={faHeart} className={`${ data.isFavourite?'text-red-800':''}`} /> </button>
                </div>
            </div>
        </div>

    )
}

export default Card