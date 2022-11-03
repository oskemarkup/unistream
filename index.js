fetch('https://online.unistream.ru/card2cash/calculate?payout_type=cash&destination=TUR&amount=100&currency=USD&accepted_currency=RUB&profile=unistream_front&promo_id=445859%0D%0A')
    .then(response => response.json())
    .then(json => document.body.insertAdjacentHTML('beforeend', json.fees[0].acceptedAmount/json.fees[0].withdrawAmount));

fetch("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", {
  method: 'POST',
  headers: {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "123",
    "content-type": "application/json",
    "Host": "p2p.binance.com",
    "Origin": "https://p2p.binance.com",
    "Pragma": "no-cache",
    "TE": "Trailers",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0"
  },
  body: JSON.stringify({
    "asset": "USDT",
    "fiat": "RUB",
    "page": 1,
    "rows": 1,
    "tradeType": "Sell"
  }),
  redirect: 'follow'
})
  .then(response => response.json())
  .then(json => console.log(json))
