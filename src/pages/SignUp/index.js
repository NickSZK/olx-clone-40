import { PageArea } from './styled'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import { useState } from 'react'
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import { useEffect } from 'react'

export const Signup = () => {
   const api = useApi()

   const [name, setName] = useState('')
   const [stateLoc, setStateLoc] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   const  [stateList, setStateList] = useState([])

   const [disabled, setDisabled] = useState(false)
   const [error, setError] = useState('')

   useEffect(() => {
      const getStates = async() => {
         const sList = await api.getStates()
         setStateList(sList)
      }

      getStates()
   }, [])

   const handleSubmit = async(e) => {
      e.preventDefault()
      setDisabled(true)
      setError('')

      if(password !== confirmPassword) {
         setError('Senhas não batem')
         setDisabled(false)
         return
      }
      
      const json = await api.register(name, email, password, stateLoc)

      if(json.error) {
         setError(json.error)
      } else {
         doLogin(json.token) // Aqui faz o login
         window.location.href = '/'
      }

      setDisabled(false)
   }  

   return(
      <PageContainer>
         <PageTitle>Cadastro</PageTitle>
         <PageArea>
            { error &&
               <ErrorMessage>{ error }</ErrorMessage>
            }

            <form onSubmit={ handleSubmit }>
               <label className='area'>
                  <div className='area--title'>Nome Completo</div>
                  <div className='area--input'>
                     <input type='text' 
                        disabled={ disabled } 
                        value={ name }
                        onChange={ e => setName(e.target.value) } 
                        required />
                  </div>
               </label>

               <label className='area'>
                  <div className='area--title'>Estado</div>
                  <div className='area--input'>
                     <select 
                        value={ stateLoc } 
                        onChange={ e => setStateLoc(e.target.value) } required >
                        <option></option>

                        { 
                           stateList.map((i, k) => 
                              <option key={k} value={i._id}>
                                 { i.name } </option>
                           )
                        }
                     </select>
                  </div>
               </label>

               <label className='area'>
                  <div className='area--title'>Email</div>
                  <div className='area--input'>
                     <input type='email' 
                        disabled={ disabled } 
                        value={ email }
                        onChange={ e => setEmail(e.target.value) } 
                        required />
                  </div>
               </label>

               <label className='area'>
                  <div className='area--title'>Senha</div>
                  <div className='area--input'>
                     <input type='password' disabled={ disabled } 
                        value={ password }
                        onChange={ e => setPassword(e.target.value)} 
                        required />
                  </div>
               </label>

               <label className='area'>
                  <div className='area--title'>Confirmar Senha</div>
                  <div className='area--input'>
                     <input type='password' disabled={ disabled } 
                        value={ confirmPassword }
                        onChange={ e => setConfirmPassword(e.target.value)} 
                        required />
                  </div>
               </label>

               <label className='area'>
                  <div className='area--title'></div>
                  <div className='area--input'>
                     <button disabled={ disabled }>Fazer Cadastro</button>
                  </div>
               </label>
            </form>
         </PageArea>
      </PageContainer>
   )
}