import { useEffect, useState } from "react"

const useResDetails =  (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchDetailsData()
    },[])

    const fetchDetailsData = async () =>{
        const res = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+resId)

        const data = await res.json()
        setResInfo(data.data)
    }


    return resInfo
}

export default useResDetails
