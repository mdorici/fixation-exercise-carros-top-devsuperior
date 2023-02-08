import './styles.css';
import carImg from '../../assets/car.png';
import Button from '../Button';

export default function Card() {
    return(
        <div className='ct-card'>
            <img src={carImg} alt="Carro" />
            <h3>Audi Supra TT</h3>
            <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eaque nihil, explicabo mollitia quia minus necessitatibus a repellendus suscipit? Recusandae unde odit quibusdam accusamus animi expedita esse eaque! Cum, corrupti?</i></p>
            <Button/>
        </div>
    );
}