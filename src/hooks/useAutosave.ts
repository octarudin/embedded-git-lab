import { Dispatch, SetStateAction, useEffect, useState } from 'react'
export function useAutosave<T>(key:string,initial:T):[T,Dispatch<SetStateAction<T>>,()=>void]{
 const [value,setValue]=useState<T>(()=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):initial}catch{return initial}})
 useEffect(()=>{localStorage.setItem(key,JSON.stringify(value))},[key,value])
 const clear=()=>{localStorage.removeItem(key);setValue(initial)}
 return [value,setValue,clear]
}
