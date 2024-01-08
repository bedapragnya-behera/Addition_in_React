import { useEffect, useState } from 'react'

const useCalculate = (a,b) => {
    const [data, setData] = useState();
    useEffect(()=>{
        setData(a+b)
    },[a,b])
  return data
}

export default useCalculate
