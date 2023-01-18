import React, { FC, ReactElement,useEffect} from 'react'
import './App.css'
import { update ,loading, getRopes } from './slice/reposSlice';
import { useAppDispatch, useAppSelector } from './hooks/default';

const App:FC=():ReactElement=>{
  const useSelector=useAppSelector;
  const repos= useSelector(store=>store.repos)
  const dispatch=useAppDispatch();
  let url:string="https://registry.npmjs.org/-/v1/search?text=";
  const getData =async(url:string)=>{
    try{
      dispatch(loading());
      const response= await fetch(`${url}${repos.searchTerm}`);
      const data = await response.json();
      dispatch(getRopes(data));
    }catch(err)
    {
      console.log(err)
    }  
  }
  const {objects}=repos.repos;

  
  return (
    <>
      <input type="text" name="search" id="search" placeholder='search' value={repos.searchTerm} onChange={(e)=>{dispatch(update(e.target.value))}}/>
      <button onClick={()=>{getData(url)}}>search</button>
      {objects.map((object:any)=>{
        const package1=object.package;
        return (
          <div className="names" key={Math.random()}>
            <p>{package1.name}</p>
          </div>
        )      
    
      })}
      
    </>
  )
}

export default App
