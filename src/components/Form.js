import React from 'react';


export default function PizzaForm(props) {

    const { change, submit, instructions, errors } = props;
    const { name, sauce, toppings } = props.values;


    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
      }

    return (
        <div className='form-container'>
            <h1>Build Your Own Pizza</h1>
            <p>{errors.name}</p>
        
                <h2>Name:</h2>
                <label id={'name-input'}>Name: 
                    <input
                        type="text"
                        name="instructions"
                        placeholder="What is thines name, sire?"
                        value={name}
                        value={instructions}
                        onChange={onChange}
                    />
                </label>
                
            <form onSubmit={onSubmit} id='pizza-form'>
                <h2>Pizza Size</h2>
                <label id={'size-dropdown'}>Size:
                    <select onChange={onChange}>
                        <option value={""}>-- Select a Size --</option>

                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>

                <h2>Sauce Options</h2>
                <label id={'size-dropdown'}>Sauce:
                    <select onChange={onChange} value={sauce}>
                        <option value="">-- Select a Sauce --</option>

                        <option value="Small">Marinara</option>
                        <option value="Medium">Alfredo</option>
                        <option value="Large">BBQ</option>
                    </select>
                </label>

                <h2>Toppings</h2>

                <label>Ricotta:
                    <input
                        value={toppings}
                        type='checkbox'
                        name='topping1'
                        onChange={onChange}            
                    />
                </label>

                <label>Spinach:
                    <input
                        value={toppings}
                        type='checkbox'
                        name='topping2'
                        onChange={onChange}            
                    />
                </label>

                <label>Pineapple:
                    <input
                        value={toppings}
                        type='checkbox'
                        name='topping3'
                        onChange={onChange}            
                    />
                </label>

                <label>Roasted Tomatoes:
                    <input
                        value={toppings}
                        type='checkbox'
                        name='topping4'
                        onChange={onChange}            
                    />
                </label>

                <h2>Special Instructions</h2>

                <label id={'special-text'}>Instructions: 
                    <input
                        type="text"
                        name="instructions"
                        placeholder="Give us thine command my leige!!"
                        value={instructions}
                        onChange={onChange}
                    />
                </label>
            </form>
           <input type='submit' value='create your pizza!' />
        </div>
      )
} 