import { StyledFiltration } from './Filtration.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedValue } from '../../redux/car/carReducer';

export const Filtration = () => {
  const [isClick, setIsClick] = useState(false);
  const [clickPrice, setClickPrice] = useState(false);
  const [selectedCar, setSelectedCar] = useState('All cars');
  const [selectedPrice, setSelectedPrice] = useState('');

  const dispatch = useDispatch();

  const handleClickSelect = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };
  const handleClickPrice = (e) => {
    e.preventDefault();
    setClickPrice(!clickPrice);
  };

  const handleClickItem = (e) => {
    setSelectedCar(e.target.dataset.value);
    setIsClick(false);
  };
  const handleClickItemPrice = (e) => {
    setSelectedPrice(e.target.dataset.value);
    setClickPrice(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(setSelectedValue(selectedCar));
  };

  useEffect(() => {
    const handleKeySelect = (e) => {
      if (e.key === 'Tab' || e.key === 'Escape') {
        setIsClick(false);
        setClickPrice(false);
      }
    };

    const handelClick = (e) => {
      if (e.target.localName === 'li' || e.target.localName === 'button')
        return;
      setIsClick(false);
      setClickPrice(false);
    };

    document.addEventListener('keydown', handleKeySelect);
    document.addEventListener('click', handelClick);

    return () => {
      document.removeEventListener('keydown', handleKeySelect);
      document.removeEventListener('click', handelClick);
    };
  }, []);

  return (
    <StyledFiltration onSubmit={handleSubmitForm}>
      <div className="form__car-select">
        <label htmlFor="car-select">Car brand</label>
        <div className="form__select-wrapper">
          <button
            onClick={handleClickSelect}
            name="cars"
            id="car-select"
            className="select-car"
          >
            {selectedCar}
          </button>

          <input defaultValue={selectedCar} name="selectValue" type="text" />

          {isClick && (
            <div className="form__wrapper-select-list">
              <ul onClick={handleClickItem} className="form__select-list">
                <li data-value="All cars">All cars</li>
                <li data-value="Buick">Buick</li>
                <li data-value="Volvo">Volvo</li>
                <li data-value="HUMMER">HUMMER</li>
                <li data-value="Subaru">Subaru</li>
                <li data-value="Mitsubishi">Mitsubishi</li>
                <li data-value="Nissan">Nissan</li>
                <li data-value="Lincoln">Lincoln</li>
                <li data-value="GMC">GMC</li>
                <li data-value="Hyundai">Hyundai</li>
                <li data-value="MINI">MINI</li>
                <li data-value="Bentley">Bentley</li>
                <li data-value="Mercedes-Benz">Mercedes-Benz</li>
                <li data-value="Aston Martin">Aston Martin</li>
                <li data-value="Pontiac">Pontiac</li>
                <li data-value="Lamborghini">Lamborghini</li>
                <li data-value="Audi">Audi</li>
                <li data-value="BMW">BMW</li>
                <li data-value="Chevrolet">Chevrolet</li>
                <li data-value="Chrysler">Chrysler</li>
                <li data-value="Kia">Kia</li>
                <li data-value="Land">Land</li>
              </ul>
            </div>
          )}

          {isClick ? (
            <MdKeyboardArrowUp className="car-select-icon" />
          ) : (
            <RiArrowDownSLine className="car-select-icon" />
          )}
        </div>
      </div>

      <div className="form__car-select form__car-select--price">
        <label htmlFor="car-select">Price/1 hour</label>
        <div className="form__select-wrapper">
          <button
            onClick={handleClickPrice}
            name="cars"
            id="car-select"
            className="select-car"
          >
            {!selectedPrice ? 'To $' : `${selectedPrice} $`}
          </button>

          <input defaultValue={selectedCar} name="selectValue" type="text" />

          {clickPrice && (
            <div className="form__wrapper-select-list">
              <ul onClick={handleClickItemPrice} className="form__select-list">
                <li data-value="10">10</li>
                <li data-value="20">20</li>
                <li data-value="30">30</li>
                <li data-value="40">40</li>
                <li data-value="50">50</li>
                <li data-value="60">60</li>
                <li data-value="70">70</li>
                <li data-value="80">80</li>
                <li data-value="90">90</li>
                <li data-value="100">100</li>
                <li data-value="110">110</li>
                <li data-value="120">120</li>
                <li data-value="130">130</li>
                <li data-value="140">140</li>
                <li data-value="150">150</li>
                <li data-value="160">160</li>
                <li data-value="170">170</li>
                <li data-value="180">180</li>
                <li data-value="190">190</li>
                <li data-value="200">200</li>
              </ul>
            </div>
          )}

          {clickPrice ? (
            <MdKeyboardArrowUp className="car-select-icon" />
          ) : (
            <RiArrowDownSLine className="car-select-icon" />
          )}
        </div>
      </div>

      <div className="form__car-diapazon-mileage">
        <label htmlFor="car-mileage">Сar mileage / km</label>
        <div id="car-mileage" className="wrapper-car-mileage">
          <div className="car-mileage">
            <span>From</span>
            <input className="car-mileage-input" type="text" name="from" />
          </div>
          <div className="car-mileage">
            <span>To</span>
            <input
              className="car-mileage-input car-mileage-input--mod"
              type="text"
              name="to"
            />
          </div>
        </div>
      </div>

      <button className="filtration__btn" type="submit">
        Search
      </button>
    </StyledFiltration>
  );
};
