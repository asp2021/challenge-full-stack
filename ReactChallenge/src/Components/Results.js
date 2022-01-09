import React,{useState,useEffect, useContext} from "react"
import Loading from "../Components/Loading"
import CardGroup from 'react-bootstrap/CardGroup'
import Texto from "./Texto"
import { GlobalContext } from "../Context/GlobalProvider";

function Results (){
   const { textList } = useContext(GlobalContext);

    const [loading,setLoading] = useState(true)
    const [reload,setReload]=useState(true)   
    async function request(){
        try{
            setLoading(false)
            setReload(false)
        }catch(error)
        {
            console.log(error)
        }
    }
    useEffect(
        ()=>{
            if(reload)request()
        },[reload]
    )
  
    return(
        <Loading active={loading}>
            <>
                <h3>Results</h3>
                <CardGroup>
                    <div className="row">
                        { textList.map(texto=><Texto className="col" key={texto.id} datos={texto}  />)}
                    </div>
                </CardGroup>
            </>
        </Loading>
    )
}

export default Results