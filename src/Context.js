//Context API
//create contex
//provider
//consumer-->was very difficult..so,it got removed..
//now in replacement of 'consumer', we use useContext hook


//API used in this project
// https://hn.algolia.com/api



import React, { createContext, useContext, useReducer,useEffect} from 'react'
import reducer from './Reducer';

const API='https://hn.algolia.com/api/v1/search?';

const initialState={
  isLoading:true,
  query:"HTML",
  nbPages:0,
  page:0,
  hits:[]
};


//create contex
const AppContext=createContext();


const AppProvider = ({children}) => {

  const [state,dispatch]=useReducer(reducer,initialState);
  

    const fetchAPI=async (url)=>{
      dispatch({type:"SET_LOADING"})
      try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        dispatch({type:"GET_NEWS",

                  payload:{
                    hits:data.hits,
                    nbPages:data.nbPages
                  }
                }
        
        )
      }
        catch(error){
          console.log(error);
        }
    }

//to remove the post
const removePost=(post_ID)=>{
dispatch({type:"REMOVE_POST",payload:post_ID});
};

//search
const searchPost=(searchQuery)=>{
  dispatch({type:"SEARCH_QUERY",
payload:searchQuery
})
}

//pagination
const getNextPage=()=>{
  dispatch(
    {
      type:"NEXT_PAGE"
    }
  );
}

const getPrevPage=()=>{
  dispatch(
    {
      type:"PREV_PAGE"
    }
  );
}

    useEffect(
        ()=>{
            fetchAPI(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page])





  return (
    <AppContext.Provider value={{ ...state,removePost,searchPost,getPrevPage,getNextPage}}>{children}</AppContext.Provider>
  )
}

//custom hook creation
const useGlobalContext=()=>{
  return useContext(AppContext);
}
export {AppProvider,AppContext,useGlobalContext};
