import React from "react";

export default function MyForm() {
    const [userForm, setInputs] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            isLover: true,
            employment: "",
            favColor: ""
        }
    );
    
    function handleChange(event) {
        const {name, type, value, checked} = event.target
        setInputs(form => {
            return {
                ...form,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    function submitForm(event) {
        event.preventDefault();
        console.log(userForm)
    }
    console.log(userForm.favColor)
    
    return (
      <form onSubmit={submitForm}>
        <input 
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
            value={userForm.firstName}
        />
        <input 
            placeholder="Last name"
            type="text"
            name="lastName"
            onChange={handleChange}
            value={userForm.lastName}
        />
        <input 
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={userForm.email}
        />
        <input 
            type="checkbox" 
            id="radio"
            name="isLover"
            checked={userForm.isLover}
            onChange={handleChange}
        />
        <label htmlFor="radio">Are you fall in love?</label>
        <fieldset>
        
            <legend>Current employee status</legend>
            
            <div className="radio-group">
                <input 
                    type="radio" 
                    id="unemployed"
                    name="employment"
                    onChange={handleChange}
                    checked={userForm.employment === "unemployed"}
                    value="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
            </div>
            <div className="radio-group">
                <input 
                    type="radio" 
                    id="partime"
                    name="employment"
                    onChange={handleChange}
                    checked={userForm.employment === "partime"}
                    value="partime"
                />
                <label htmlFor="partime">Part-Time</label>
            </div>
            <div className="radio-group">
                <input 
                    type="radio" 
                    id="fulltime"
                    name="employment"
                    onChange={handleChange}
                    checked={userForm.employment === "fulltime"}
                    value="fulltime"
                />
                <label htmlFor="fulltime">Full-Time</label>
            </div>
        </fieldset>
        <select
                name="favColor"
                value={userForm.favColor}
                onChange={handleChange}
            >   
                <option value="">-- Choses --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }