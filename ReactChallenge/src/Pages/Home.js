import React, {useContext} from "react"
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup"
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom"
import Results from "../Components/Results";
import { getReverse } from "../Services/textosService";
import { GlobalContext } from "../Context/GlobalProvider";

function Home (){
    const { addItemToList } = useContext(GlobalContext);
    const { register, handleSubmit,formState:{errors} } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {  
        if(data.text.length){
            try{
                const reverse = getReverse(data.text)
                .then( result => {
                    addItemToList(result.data.text);

                    Array.from(document.querySelectorAll("input")).forEach(
                        input => (input.value = "")
                      );
                }
                ).catch(error => console.log(error))
                navigate("/")
            }catch(e){
                console.log("error",e,e.code)
            }
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Texto" type="text"  register={{...register("text",{required:true})}}  />
                {errors.text && <span>El campo es obligatorio</span>}
                <Button type="submit" variant="primary">Send</Button>
            </form>

            <Results/>
        </div>
    )
    
}
export default Home