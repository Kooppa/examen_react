import React, {useState} from 'react'

export const User = () => {

  

  const [state, setCounter] = useState(
    {
      counter1: "Robert",
      counter2: "001",
      counter3: "25",

      counter4: "Luisa",
      counter5: "002",
      counter6: "28",
    }
  )

  const {counter1,counter2,counter3,counter4,counter5,counter6} = state;

  return (
    <table>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Id</th>
          <th>Edad</th>
        </tr>
        <tr>
          <td>{counter1}</td>
          <td>{counter2}</td>
          <td>{counter3}</td>
          <td><button onClick={ 
            () => setCounter({
              ...state,
              counter1: "Usuario cambiado"
            } )
          }>Update</button></td>
          <td><button onClick={ 
            () => setCounter({
              ...state,
              counter1: "Usuario Borrado"
            } )
          }>Delete</button></td>
        </tr>
        <tr>
          <td>{counter4}</td>
          <td>{counter5}</td>
          <td>{counter6}</td>
          <td><button onClick={ 
            () => setCounter({
              ...state,
              counter4: "Usuario cambiado"
            } )
          }>Update</button></td>
          <td><button onClick={ 
            () => setCounter({
              ...state,
              counter4: "Usuario Borrado"
            } )
          }>Delete</button></td>
        </tr>
      </tbody>
    </table>
  )
}



export default User;
