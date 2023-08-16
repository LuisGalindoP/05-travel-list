import { useState } from "react";

function Form() {
    //States
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    //Handlers
    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        console.log(newItem);
        setDescription("");
        setQuantity(1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {/* "Array.from({ length: 20 }, (_, i) => i + 1)" this part create an Array
                with 20 elements, that we can map after to create the 20 numbers */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

export default Form;
