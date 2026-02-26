import { useContext } from 'react'
import LanguageContext from './LanguageContext'


const Language = () => {

    const language = useContext(LanguageContext)
    const style={
      color: language.name==="en"? "red" : "blue"
    }

  return (
    <div style={style}> {language.name === "en"? "English:" : "Somali:"} {language.word}</div>
  )
}

export default Language;