import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Recuperar_Form from "../components/Recupera_Forms"
import Recuperar_Email from '../components/Recuperar_Email'
import Recuperar_SMS from '../components/Recuperar_SMS'

function RecuperarSenha() {
  const [tela, setTela] = useState('form')
  const navigate = useNavigate()

  return (
    <div>
      {tela === 'form' && (
        <Recuperar_Form
          onVoltar={() => navigate('/login')}
          onAvancarEmail={() => setTela('email')}
          onAvancarSMS={() => setTela('sms')}
        />
      )}
      {tela === 'email' && (
        <Recuperar_Email onVoltar={() => navigate('/')} />
      )}
      {tela === 'sms' && (
        <Recuperar_SMS onVoltar={() => navigate('/')} />
      )}
    </div>
  )
}

export default RecuperarSenha