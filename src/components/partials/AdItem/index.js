import { Link } from "react-router-dom"
import { Item } from "./styled"

export const AdItem = (props) => {
   let price = ''

   if(props.data.priceNegotiable) {
      price = 'Preço negociável'
   } else {
      price = props.data.price
   }

   return(
         <Item>
            <Link to={`/ad/${props.data.id}`}>
               <div className="itemImage">
                  <img src={ props.data.image } alt='Erro na imagem' />
               </div>

               <div className="itemName">{ props.data.title }</div>

               <div className="itemPrice">{ price }</div>
            </Link>
         </Item>
   )
}

// 4:35