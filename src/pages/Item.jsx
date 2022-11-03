import React, {useState} from 'react'

export const Item = () => {

    const [counter, setCounter] = useState(
        {
          counter1: "Pan de muerto",
          counter2: "001",
          counter3: "80",
    
          counter4: "Chocolate",
          counter5: "002",
          counter6: "70",
        }
      )

  return (
    <table>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Id</th>
          <th>Precio</th>
        </tr>
        <tr>
          <td>{counter.counter1}</td>
          <td>{counter.counter2}</td>
          <td>{counter.counter3}</td>
          <td><button onClick={ 
          () => setCounter(counter.counter1 = "" )
          }>Update</button></td>
          <td><button onClick={ 
          () => setCounter(counter.counter1 = "" )
          }>Delete</button></td>
        </tr>
        <tr>
          <td>{counter.counter4}</td>
          <td>{counter.counter5}</td>
          <td>{counter.counter6}</td>
          <td><button onClick={ 
          () => setCounter(counter.counter4 = "" )
          }>Update</button></td>
          <td><button onClick={ 
          () => setCounter(counter.counter4 = "" )
          }>Delete</button></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Item;