import { useState, useEffect } from "react"

export default function Form(props) {
    const [formData, setFormData] = useState({searchterm: ""});
    const handleChange = (event) => {setFormData({ ...formData, [event.target.name]: event.target.value });};
    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.nasasearch(formData.searchterm);
    };

    

    return (

    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    )
}
