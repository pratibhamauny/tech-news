import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
    const {query,searchPost}=useGlobalContext();
    //console.log(query)
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="search"
                     placeholder="Search here"
                     value={query}
                     onChange={(e)=>searchPost(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default Search
