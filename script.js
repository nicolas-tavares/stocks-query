

$.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Clitecoin%2Cpepe&vs_currencies=usd", function(data){
    console.log(data)

    $('#bitcoin_price').html(data.bitcoin.usd)
    $('#eth_price').html(data.ethereum.usd)
    $('#solana_price').html(data.solana.usd)
    $('#dogecoin_price').html(data.dogecoin.usd)
    $('#litecoin_price').html(data.litecoin.usd)
    $('#pepe_price').html(data.pepe.usd)
})





    