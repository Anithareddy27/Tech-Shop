import { Cursole } from "../Components/Cursole"
import { FeaturedProducts } from "../Components/FeautredProduct"
import { Login } from "../Components/Login"

import { TopProducts } from "../Components/Topproduct"
import { Searchbar } from "./Searchbar"


export const Home=()=>{
    return(
        <>
    
    <Cursole />
    {/* <Login /> */}
    <FeaturedProducts />
    <TopProducts />
        </>
    )
}

