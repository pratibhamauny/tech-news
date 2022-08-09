
const reducer=(state,action)=>{
//console.log(state)
    switch(action.type){
        case "LOADING":
            return {...state,isLoading:true}
        
        case "POSTS":
            //console.log("here");
            return {...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            }
            case "REMOVE_POST":
                return{
                    ...state,
                    hits:state.hits.filter((post)=>
                    post.objectID!=action.payload
                    )
                }

            case "SERACH_POST":
                return{
                    ...state,
                    query:action.payload
                }
            case "PREV_POST":
               let prevPage=state.page-1
               if(prevPage<=0){
                prevPage=0;
               }
                return{
                    ...state,
                    page:prevPage
                }
            case "NEXT_POST":
               // console.log(action.payload)
               let nextpage=state.page+1
               if(nextpage>=state.nbPages){
                nextpage=0;
               }
              // console.log(state)
                return{
                    
                    ...state,
                    page:nextpage
                }
        }
   return state
}

export default reducer