import React from 'react';
import {useState, useEffect} from 'react';

//you can destructure your props directly from the parameter list
export default function Form(props) {
    //state to hold the data of the form 
    const [formData, setFormData] = useState({
        searchterm: ""
    })
    //handlchange = update formdata when we type in the form
    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search to term to movieseach prop, which is getMovie function
        props.moviesearch(formData.searchterm);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name='searchterm'
            onChange={handleChange}
            value={formData.searchterm}
            />
            <input type="submit" value="submit" 
            />
        </form>
    </div>
  )
}
