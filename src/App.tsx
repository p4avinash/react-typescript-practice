import "./App.css"
import Button from "./components/Button"
import Container from "./components/Container"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
// import Input from "./components/Input"
import Input from "./components/html/Input"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
// import Status from "./components/Status"
import Status from "./components/restrictions/Status"
import Box from "./components/context/Box"
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { UserContextProvider } from "./components/context/UserContext"
// import Counter from "./components/state/Counter"
import { Counter } from "./components/class/Counter"
import LoggedIn from "./components/state/LoggedIn"
// import User from "./components/state/User"
import User from "./components/context/User"
import DomRef from "./components/ref/DomRef"
import MutableRef from "./components/ref/MutableRef"
import Private from "./components/auth/Private"
import Profile from "./components/auth/Profile"
import List from "./components/generics/List"
import RandomNumber from "./components/restrictions/RandomNumber"
import Toast from "./components/templateliterals/Toast"
import CustomButton from "./components/html/Button"
import CustomComponent from "./components/html/CustomComponent"
import Text from "./components/polimorphic/Text"

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ]

  return (
    <div className='App'>
      {/* <Greet name={"Avinash"} messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList nameList={nameList} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Greet name='Avinash' isLoggedIn={true} /> */}
      {/* <Button handleClick={(e, id) => console.log("clicked", e.target, id)} /> */}
      {/* <Input
        value=''
        handleChange={(event) => console.log(event.target.value)}
      /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <Counter message='The count value is: ' /> */}
      {/* <Private isLoggedIn={true} Component={Profile} /> */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Status status='success' /> */}
      {/* <Toast position='center' /> */}
      {/* <CustomButton variant='primary' onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}
      {/* <Input /> */}
      {/* <CustomComponent name='Avinash' isLoggedIn={true} /> */}
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='h2' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  )
}

export default App
