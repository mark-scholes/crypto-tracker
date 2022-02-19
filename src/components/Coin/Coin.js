import React from 'react'


const Coin = ({img , name, symbol, current_price, volume, price_change_24h, price_change_percentage_24h}) => {
  return (
    <div className="coin-container">
        <div className="coin-row" >
            <div className="coin">
                <img src={img} alt={name + " logo"} className="coin-img" />
                <p>{name}</p>
                <p className="coin-symbol">{symbol}</p>
                <p className="coin-currentPrice">{current_price}</p>
                <p className="coin-volume">{volume}</p>
                <p className="coin-priceChange">{price_change_24h}</p>
                {
                  price_change_percentage_24h < 0 ? (
                    <p className="coin-percentRed">{price_change_percentage_24h.toFixed(2)}%</p>
                  ) : (
                    <p className="coin-percentGreen">{price_change_percentage_24h.toFixed(2)}%</p>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Coin