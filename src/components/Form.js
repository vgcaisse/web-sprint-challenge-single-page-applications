import React from 'react';

export default function PizzaForm(props) {

    const { values, update, submit } = props;



    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { value } = evt.target;
        update(value);
    }

    return (
        <div className='form-container'>
            <h1>Build Your Own Pizza</h1>
            <form>
                <label id={'size-dropdown'}>Size
                    <select onChange={onChange}>
                        <option value="">-- Select a Role --</option>

                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                
                <h2>Toppings</h2>

                <label>Ricotta
                    <input
                    type='checkbox'
                    name='topping1'
                    // checked={topping1}
                    onChange={onChange}            
                    />
                </label>

                <label>Spinach
                    <input
                    type='checkbox'
                    name='topping1'
                    // checked={topping1}
                    onChange={onChange}            
                    />
                </label>

                <label>Pineapple
                    <input
                    type='checkbox'
                    name='topping1'
                    // checked={topping1}
                    onChange={onChange}            
                    />
                </label>

                <label>Roasted Tomatoes
                    <input
                    type='checkbox'
                    name='topping1'
                    // checked={topping1}
                    onChange={onChange}            
                    />
                </label>
            </form>
            <button onClick={submit}>
                Submit
            </button>
        </div>
      )
} 