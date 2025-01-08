import ProductCard from "./ProductCard";
import "./App.css";
import { useEffect, useState } from "react";
import { Product } from "./type";
import { products as prodList } from "../public/products.json"

function App() {
  const [products, setData] = useState<Product[]>([])
  const [searchData, setSearchData] = useState("")
  const [filterData, setFilterData] = useState<Product>()

  function handleDataFromChild(data: string) {
    setSearchData(data)
    filterProducts(data)
  }

  function filterProducts(searchData) {
    let filterData = products.find(p => p.name.toLowerCase().includes(searchData.toLowerCase()))
    setFilterData(filterData)
  }

  useEffect(() => {
    setData(prodList)
    console.log(products);
  }, [])

  return (
    <div>
      <h1>Product Information</h1>
      <ProductCard sendSearchData={handleDataFromChild} data={filterData} />
    </div>
  );
}

export default App; 