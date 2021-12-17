import React from 'react';


export default function PizzaForm(props) {

    const { values, change, submit, instructions } = props;



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
                <h2>Name:</h2>
                <label id={'name-input'}>Name: 
                    <input
                        type="text"
                        name="instructions"
                        placeholder="What is thines name, sire?"

                        value={instructions}
                        onChange={onChange}
                    />
                </label>
                
            <form onSubmit={onSubmit}>
                <h2>size</h2>
                <label id={'size-dropdown'}>Size:
                    <select onChange={onChange}>
                        <option value="">-- Select a Size --</option>

                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>

                <h2>Sauce Options</h2>
                <label id={'size-dropdown'}>Sauce:
                    <select onChange={onChange}>
                        <option value="">-- Select a Sauce --</option>

                        <option value="Small">Marinara</option>
                        <option value="Medium">Alfredo</option>
                        <option value="Large">BBQ</option>
                    </select>
                </label>

                <h2>Toppings</h2>

                <label>Ricotta:
                    <input
                        type='checkbox'
                        name='topping1'
                        // checked={topping1}
                        onChange={onChange}            
                    />
                </label>

                <label>Spinach:
                    <input
                        type='checkbox'
                        name='topping2'
                        // checked={topping2}
                        onChange={onChange}            
                    />
                </label>

                <label>Pineapple:
                    <input
                        type='checkbox'
                        name='topping3'
                        // checked={topping3}
                        onChange={onChange}            
                    />
                </label>

                <label>Roasted Tomatoes:
                    <input
                        type='checkbox'
                        name='topping4'
                        // checked={topping4}
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