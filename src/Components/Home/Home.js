import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home(){

    const [Data,setData] = useState([])

    useEffect(()=>{
        const fetchData = ()=>{
            axios.get('https://eric-robotics-backend.vercel.app/')
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
            <h1>Home</h1>
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