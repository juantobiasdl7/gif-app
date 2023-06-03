import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){

            onNewCategory(inputValue.trim());
            
            setInputValue("");
        }
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text"
                placeholder="Buscar..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
