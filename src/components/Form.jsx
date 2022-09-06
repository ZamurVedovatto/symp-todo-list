import { useState } from 'react'

import Form from 'react-bootstrap/Form';


function CheckExample() {
    const [data, setData] = useState([
        {
            type: 'radio'
        },
        {
            type: 'radio'
        },
        {
            type: 'radio'
        },
        {
            type: 'radio'
        },
    ])

    return (
        <Form>
            {data.map((type, index) => (
                <div key={index} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />
                </div>
            ))}
        </Form>
    );
}

export default CheckExample;