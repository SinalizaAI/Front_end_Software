import styler from "../css/recuperar_form.module.css"

function Recuperar_Form({ onVoltar, onAvancarEmail, onAvancarSMS }) {
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <button onClick={onAvancarEmail}>Avançar Email</button>
      <button onClick={onAvancarSMS}>Avançar SMS</button>
    </div>
  )
}
export default Recuperar_Form