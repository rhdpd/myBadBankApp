import Card from '../components/context'
import bankImage from '../pages/bank.png'
import '../App.css'

function Home(){
  return (
    <Card
      txtcolor="black"
      header="My BadBank Home"
      title="Welcome to the Bad Bank"
      text="You can move around using the navigation bar to start your banking experience. Once you create an account, you can deposit, withdraw. This site is equipped to give you optimal banking experience!"
      body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
    /> 
  
  );  
}

export default Home;