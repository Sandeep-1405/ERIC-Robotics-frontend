import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home(){

    const [Data,setData] = useState([])

    useEffect(()=>{
        const fetchData = ()=>{
            axios.get('http://localhost:3001')
            .then(res=>{
                setData(res.data)
                console.log(res)
            })
            .catch(error=>console.log(error))
        }
        fetchData()
    },[])

    return(
        <div>
            {
                Data.map((Details)=>(
                    <div>
                        <p>{Details.id}</p>
                        <p>{Details.Name}</p>
                        <p>{Details.BatteryLevel}</p>
                        <p>{Details.Status}</p>
                        <p>{Details.RecentActivity}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Home