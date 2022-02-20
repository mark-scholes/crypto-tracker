import React from 'react'
import TableCell from '@mui/material/TableCell'


const Coin = ({img , name, symbol, current_price, volume, price_change_24h, price_change_percentage_24h}) => {
  return (
    
    <>
            <TableCell><img src={img} alt={name + " logo"} className="coin-img" /></TableCell>
            <TableCell><p>{name}</p></TableCell>
            <TableCell><p className="coin-symbol">{symbol}</p></TableCell>
            <TableCell><p className="coin-currentPrice">{current_price}</p></TableCell>
            <TableCell><p className="coin-volume">{volume}</p></TableCell>
            <TableCell><p className="coin-priceChange">{price_change_24h}</p></TableCell>
            <TableCell><p className={price_change_percentage_24h < 0 ? "coin-percentRed": "coin-percentGreen"}>{price_change_percentage_24h.toFixed(2)}%</p></TableCell>
    </>
  )
}

export default Coin