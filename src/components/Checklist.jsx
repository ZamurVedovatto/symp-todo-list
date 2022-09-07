import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'

const ChecklistWrapper = styled.div`
  .checked-item,
  .not-checked-item {
    margin-left: 10px;
  }
  .checked-item {
    text-decoration: line-through;
  }
`

// todos: [
//   {
//     title: 'fix buttons position',
//     done: true
//   },
//   {
//     title: 'fix buttons position',
//     done: false
//   },
//   {
//     title: 'fix buttons position',
//     done: false
//   },
// ],

function Checklist({listData}) {
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    console.log(event)
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) => checked.includes(item) ? true : false;

  return (
    <ChecklistWrapper className="checkList">
      <div className="list-container">
        {listData.map((item, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            id={`${item}`}
            label={`${item.title}`}
            checked={isChecked(item)}
            onChange={handleCheck}
          />
        ))}
      </div>
    </ChecklistWrapper>
  )
}

// https://stackoverflow.com/questions/54809604/failed-prop-type-you-provided-a-checked-prop-to-a-form-field-without-an-onch

export default Checklist