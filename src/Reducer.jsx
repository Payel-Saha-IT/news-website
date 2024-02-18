const reducer=(state,action)=>{
switch(action.type)
{
    case "SET_LOADING":
        return {
            ...state,
            isLoading:true
        }

    case "GET_NEWS":
        return{
            ...state,//using spread operator,initial states are getting

            //updation 
            isLoading:false,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages
        }

    case "REMOVE_POST":
        return{
            ...state,
            hits:state.hits.filter(
                (currElem)=>{
                    return currElem.objectID !==action.payload;
                }
            )
        }

    case "SEARCH_QUERY":
        return{
            ...state,
            query:action.payload
        }   
        
    case "NEXT_PAGE":
        let pageNo=state.page+1;
            if(pageNo===state.nbPages)
            {
                pageNo=0
            }
        return{
            ...state,
            page:pageNo
        } 

        case "PREV_PAGE":
            let pageNum=state.page-1;
            if(pageNum<=0)
            {
                pageNum=0
            }
            return{
                ...state,
                page:pageNum
            } 
    

}

return state;
}

export default reducer;