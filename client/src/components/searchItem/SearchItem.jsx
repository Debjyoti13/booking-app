import React from 'react'
import "./searchItem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square600/325771439.webp?k=342e764eea956b500cbda2cdd1c4d065fa9cf3cd6d334eb4959861424707408e&o=&s=1"
        alt=""
        className="siImg"
      ></img>
<div className='siDesc'>
<h1 className='siTitle'>Tower Street Apartments</h1>
<span className='siDistance'>
  500m from center
</span>
<span className='siTaxi'>
  Free Airport Taxi
</span>
<span className='siSubtitles'>
  Studio Apartment with Air Conditioning
</span>
<span className='siFeatures'>
  Entire studio . 1 Bathroom .King size bed
</span>
<span className='siCancelOp'>Free cancellation</span>
<span className='siCancelOpSubstitute'>You can cancel later so lock in this great price today
</span>
      </div>
      <div className='siDetails'>

<div className="siRating">
<span>Excellent</span>
<button>8.9</button>

</div>
<div className='siDetailsTexts'>
  <span className='siPrice'>$123</span>
  <span className='siTaxOp'>Includes taxes and fees</span>
  <button className='siCheckButton'>See availability</button>

</div>
      </div>
    </div>
  );
}

export default SearchItem