// Conditional Rendering ; displaying attributes based on whether the condition is true or false

import PropTypes from "prop-types";
function UserGreeting(props){

    /* if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please Log in to continue</h2>
    } */
    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.username}
                           </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please Log in to Continue
                        </h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
        
    /* return(props.isLoggedIn ?  <h2 className="welcome-message">Welcome {props.username}</h2> : 
                                   <h2 className="login-prompt">Please Log in to Continue</h2>);
    */
}
UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting