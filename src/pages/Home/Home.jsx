import { StyledHome } from './Homestyled';
import { IoMdTime } from 'react-icons/io';
import { FaCar } from 'react-icons/fa6';
import { GrDocumentTime } from 'react-icons/gr';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

export const Home = () => {
  return (
    <StyledHome>
      <h1 className="hero__title">
        <span className="hero__sub-title">Car rental:</span>{' '}
        <span className="hero__sub-title--mod">
          fast, convenient, most efficient
        </span>
      </h1>

      <div className="hero__advantages">
        <div className="hero__advantage">
          <IoMdTime className="hero__advantage-icon icon-time" />
          <p>24/7 Support</p>
        </div>
        <div className="hero__advantage">
          <FaCar className="hero__advantage-icon" />
          <p>Delivery to any address</p>
        </div>
        <div className="hero__advantage">
          <GrDocumentTime className="hero__advantage-icon" />
          <p>Registration in 15 minutes</p>
        </div>
        <div className="hero__advantage">
          <RiMoneyDollarCircleLine className="hero__advantage-icon icon-price" />
          <p>Affordable prices</p>
        </div>
      </div>

      <div className="hero__services">
        <h2>OUR SERVICES</h2>
		
        <div className="hero__service">
          <MdDone className='hero__service-icon'/>
			 <p>Service</p>
        </div>
        <div className="hero__service">
          <MdDone className='hero__service-icon'/>
			 <p>Service</p>
        </div>
        <div className="hero__service">
          <MdDone className='hero__service-icon'/>
			 <p>Service</p>
        </div>
        <div className="hero__service">
          <MdDone className='hero__service-icon'/>
			 <p>Service</p>
        </div>
      </div>
    </StyledHome>
  );
};
