import Header from './Header';
import Footer from './Footer';
import Fruits from './Fruits';
import Food from './Food';
import Card from './Card';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';

function App() {
  return(
    <>
      <Header />
      <Fruits />
      <Food />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />

      <UserGreeting isLoggedIn={true} />

      <Footer />
    </> //fragment
  )
}

export default App
