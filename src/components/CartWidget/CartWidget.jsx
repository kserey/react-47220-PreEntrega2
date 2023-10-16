import './CartWidget.css'
import bolsaImg from '../../assets/img/bolsa.png'

const CartWidget = () => {
  return (
    <div>
        <a href="">
        <img src={bolsaImg} alt="bolsa de compras" className="bolsa-img" />
        </a>
        <span className="bolsaCant">0</span>
    </div>


  )
}

export default CartWidget