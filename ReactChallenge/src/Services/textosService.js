import instance from "../Config/axios"

export function getReverse(str){
    return instance.get("iecho?text="+str)
}


