import {useEffect, useState} from 'react'

function useCurrencyInfo (currency) {

    const [data, setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((dataRes)=>{
            // console.log(dataRes);
            return setData(dataRes[currency]) //dynamically accessing the key stored in the "currency" variable
        })
    },[currency])
    
    console.log(data);
    return data;
}

export default useCurrencyInfo
