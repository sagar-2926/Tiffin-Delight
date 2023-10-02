import location from "./location.png"
import phone from "./phone.png"
import tiffin from "./order-2.png"
import './ProfileCard.css'
export default function ProfileCard({ name,img, no, add, order }) {
    return (
        <>

            <div className='col card-container '>
                <div className=" card profile-card">
                    <div className='profile-img-div '>
                        <img src={img} alt='profile-image' className='profile-img' />
                        <p>{name}</p>
                    </div>
                    <div className='profile-info-div'>
                        <div className='profile-info'>
                            <img src={phone} alt="icon" className='icon' />
                            <span>Number {no}</span>
                        </div>
                        <br />
                        <div className='profile-info'>
                            <img src={location} alt="icon" className='icon' />
                            <span>Address {add}</span>
                        </div>
                        <br />
                        <div className='profile-info'>
                            <img src={tiffin} alt="icon" className='icon' />
                            <span>Order {order} </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}