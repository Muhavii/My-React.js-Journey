/* In JSX (used with React), 
props (short for "properties") are a way to pass data from a parent component 
to a child component. */

//proTypes = a mechanism that ensures that the passed value is of the correct datatype
// age: PropTypes.number

// defaultProps = default values for props in case they are npt passed from the
// parent component e.g. "Guest"

import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student