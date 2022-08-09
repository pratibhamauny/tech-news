import React, {useEffect, useContext,useReducer } from 'react'
import reducer from "./reducer"

let API="http://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading:true,
    nbPages:0,
    page:0,
    query:"CSS",
    hits:[]
}
const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    
    const fetchData=async(url)=>{
        dispatch({type:"LOADING"})
        try{
            const res=await fetch(url);
            const data=await res.json()
           // console.log(data)
           dispatch({type:"POSTS",
            payload:{
                hits:data.hits,
                nbPages:data.nbPages,
            }
    })
            
        }
        catch(error){
            console.log(error)
        }
    }
    const removePost=(post_id)=>{
       // console.log(post_id)
        dispatch({type:"REMOVE_POST",
        payload:post_id})
    }

    const searchPost=(searchQuery)=>{
      //  console.log(searchQuery)
        dispatch({type:"SERACH_POST",
        payload:searchQuery})
    }
    const prevHandler=()=>{
        dispatch({type:"PREV_POST",payload:state.page})
        //console.log(state.page)
    }

    const nextHandler=()=>{
        dispatch({type:"NEXT_POST",payload:state.page})
       // console.log(state.page)


    }
    useEffect(()=>{
        // console.log(state.page)
        // console.log(state.query)
        fetchData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])
    return(
    <AppContext.Provider value={{...state,removePost,searchPost,prevHandler,nextHandler}}>
        {children}
    </AppContext.Provider>)
}

//custom hook

const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}