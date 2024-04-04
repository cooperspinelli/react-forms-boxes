import { useState } from "react";


/** Renders new box form
 *
 * Props: onSubmit
 * State: formData
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
    const initialFormData = {
        height: "",
        width: "",
        backgroundColor: ""
    };
    const [formData, setFormData] = useState(initialFormData);

    function onChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    function onSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialFormData);
    }

    return (<div>
        <form onSubmit={onSubmit}>

            <label htmlFor="height">Height</label>
            <input type="text"
                name="height"
                id="height"
                value={formData.height}
                onChange={onChange} />

            <label htmlFor="width">Width</label>
            <input type="text"
                name="width"
                id="width"
                value={formData.width}
                onChange={onChange} />

            <label htmlFor="backgroundColor">Background Color</label>
            <input type="text"
                name="backgroundColor"
                id="backgroundColor"
                value={formData.backgroundColor}
                onChange={onChange} />
        </form>
    </div>);
}

export default NewBoxForm;