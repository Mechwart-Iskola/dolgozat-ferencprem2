import { useState } from "react";
import { Product } from "./type";

type ProductCardProps = {
    sendSearchData: (text: string) => string,
    data: Product
}

const ProductCard = ({ sendSearchData, data }: ProductCardProps) => {
    const [searchText, setSearchText] = useState("")
    function handleClick() {
        sendSearchData(searchText)
    }
    return (
        <div className="container">
            <h1>Enter Product Name:</h1>
            <input type="text" className="search-section" onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={handleClick}>Search</button>
            {data ?
                (<div className="infoContainer">
                    <div>
                        <h1>ID: {data.id}</h1>
                        <h1>Name: {data.name}</h1>
                        <h1>Price: ${data.price}</h1>
                        <h1>Category: {data.category}</h1>
                    </div>
                    <div>
                        <img src={data.image} />
                    </div>
                </div>) : (
                    <h1 className="error">No product found with the given name</h1>
                )

            }


        </div>
    )
}

export default ProductCard;