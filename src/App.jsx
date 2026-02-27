import { useState } from "react";
import Usercard from "./Usercard";
import Blog from "./Blog";
import UsercardExercise3 from "./UsercardExercise3";
import ToggleExercise4 from "./toggleExercise4";
import ShoppingCart from "./ShoppingCart";
import Exercise6 from "./Exercise6";
import Exercise7 from "./Exercise7MouseMove";
import CountDown from "./CountDownExer8";
import GitHubUsers from "./GithubUsers";
import UserList from "./userList";
import LoginForm from "./LoginForm";
import Counting from "./Counting";
import Counter from "./Counter";
import LanguageContext from "./LanguageContext";
import Language from "./Language";
import { ContactApp } from './Contact App/ContactApp'
import TodoApp from "./TodoApp";


function App() {


    const [language, setLanguage] = useState({ name: "en", word: "Welcome" });

  const handdleTranslate = () => {
    setLanguage({...language, 
      name: language.name ==="en"? "som" : "en",
      word:language.word === "Welcome" ? "Soo dhowow" : "Welcome",
    });
  };

  return (
    <>
      {/* <Usercard /> */}
      {/* <Blog /> */}
      {/* <UsercardExercise3 name="Ahmed" email="ahmed@info..." />
      <UsercardExercise3 name="Muqtar" email="muqtar@info..." />
      <UsercardExercise3 name="Muse" email="muse@info..." />
      <UsercardExercise3 name="abdi" email="abdi@info..." /> */}
      {/* <ToggleExercise4 /> */}
      {/* <ShoppingCart /> */}
      {/* <Exercise6/> */}
      {/* <Exercise7/> */}
      {/* <CountDown></CountDown> */}
      {/* <GitHubUsers></GitHubUsers> */}
      {/* <UserList></UserList> */}
      {/* <LoginForm></LoginForm> */}
      {/* <Counting></Counting> */}
      {/* <Counter></Counter> */}
            {/* <LanguageContext.Provider value={language}>
        <button onClick={handdleTranslate}>
          Translate into {language.name === "en" ? "Somali" : "English"}
        </button>
        <Language></Language>
      </LanguageContext.Provider> */}
      {/* <ContactApp></ContactApp> */}
      <TodoApp></TodoApp>



    </>
  );
}

export default App;
