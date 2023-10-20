import { useState, useRef } from "react";


export default function useCounter(initialValue) {
const [number, setNumber] = useState(initialValue)
const inputRef = useRef(null)

const increment = () => {
    return setNumber(number + 1);
}

const decrement = () => {
    return setNumber(number- 1);
}

const reset = () => {
    
    return setNumber(initialValue);
}

const setValue = (e) => {
    e.preventDefault()
    setNumber(inputRef.current.value );
    inputRef.current.value = ''
}

return [number, increment, decrement, reset, setValue, inputRef];

}