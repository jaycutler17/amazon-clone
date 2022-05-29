import React from 'react';
import '../subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStatevalue } from '../context/StateProvider';
import { BasketValue } from '../context/reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

  const navigate = useNavigate();
  const[{basket} , dispatch ] = useStatevalue();
  
  return (
    <div className='subtotal'>

    <CurrencyFormat
      renderText={value =>
      <>

        <p>
          subtotal({basket?.length} items): <strong> {value }</strong> 
        </p>
        <small className='subtotal-gift'>
          <input type="checkbox" /> this order contains a gift
        </small>
        
      </>
        
        
      }

      decimalScale={2}
      value={BasketValue(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />

    <button onClick={(e)=> navigate('/payment')}> proceed to checkout </button>
    </div> 
  )
}

export default Subtotal