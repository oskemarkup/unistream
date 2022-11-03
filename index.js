fetch('https://online.unistream.ru/card2cash/calculate?payout_type=cash&destination=TUR&amount=100&currency=USD&accepted_currency=RUB&profile=unistream_front&promo_id=445859%0D%0A')
    .then(response => response.json())
    .then(json => document.body.insertAdjacentHTML('beforeend', json.fees[0].acceptedAmount/json.fees[0].withdrawAmount));
