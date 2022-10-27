import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <input type="text" value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
        onBlur={(e)=>{handleBlur(e)}}>
      </input>
		</footer>
	)
}


function handleBlur(e) {
  const value = e.target.value;
  if(!value.includes("@")) {
    alert("Votre email ne contient pas de @ !")
  }
}

export default Footer
