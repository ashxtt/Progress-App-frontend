import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Editgoal(props) {
    const {id} = useParams(); 
    const goal = props.goals.find((goal)=>goal._id === id)
    let navigate = useNavigate()

    const[editForm, setEditform] = useState(goal)

    const handleChange = (event) => {
        setEditform((prevState) => ({
            ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateGoals(editForm, goal._id)
        //see if it works
        console.log(editForm)
        navigate("/goals")
    }

    const removeGoal = () => {
        props.deleteGoals(goal._id)
        navigate("/goals")
    }

    return(
        <section className="content-layout p-4 text-white">
            
          <form className='' onSubmit={handleSubmit}>
            <div className='p-3 text-3xl'>
              Goal:<input
              className="goal-input bg-black w-fit text-2xl"
              type="text"
              value={editForm.title}
              name="title"
              placeholder="whats your plan"
              onChange={handleChange}
            />
            </div>
            <div className='p-3 text-3xl'>
              Course of Action:<input
              className="body-input bg-black text-2xl"
              type="text"
              value={editForm.body}
              name="body"
              placeholder="Describe your plan/goal"
              onChange={handleChange}
            /> 
            </div>
            <div className='p-3 text-3xl'>
              Today's Date:<input
              className="text-2xl date-input bg-black"
              type="text"
              value={editForm.date}
              name="date"
              placeholder="00/00/0000"
              onChange={handleChange}
            /> 
            </div>
            
        
            
            
            
            <div className=''><input className="update-button text-white border rounded-md p-1 w-72 hover:shadow-dark shadow-xl" type="submit" value="Update"/></div>
            <button className="delete-button text-white border rounded-md p-1 w-72 hover:shadow-dark shadow-xl" onClick = {()=>removeGoal(goal._id)}>Delete</button>

          </form>
        </section>
      )

}