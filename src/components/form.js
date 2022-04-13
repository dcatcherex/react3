import React, {useState} from 'react'

const Form = () => { 
    const [inputs,setInputs] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Activity
                <input 
                    type="text" 
                    name="activity"
                    value={inputs.activity || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Description
                <input 
                    type="text" 
                    name="description"
                    value={inputs.description || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Date
                <input 
                    type="text" 
                    name="date"
                    value={inputs.date || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Duration
                <input 
                    type="text" 
                    name="duration"
                    value={inputs.duration || ""} 
                    onChange={handleChange}
                />
            </label>
            
            <input type="submit" />

        </form>
    )
}

export default Form


 