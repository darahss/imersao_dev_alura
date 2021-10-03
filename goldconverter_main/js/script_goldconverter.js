function ConverterOnChangeGoldValue() {
  var PriceReal = document.getElementById('RealValue')
  var PriceGold = document.getElementById('GoldValue')
  var GoldValue = parseFloat(PriceGold.value)

  var RealValue = GoldValue * 298.8
  console.log('aqui')
  PriceReal.value = String(RealValue.toFixed(1))
}

function ConverterOnChangeRealValue() {
  var PriceReal = document.getElementById('RealValue')
  var PriceGold = document.getElementById('GoldValue')
  var RealValue = parseFloat(PriceReal.value)

  var GoldValue = RealValue / 298.8
  console.log(RealValue)

  PriceGold.value = String(GoldValue.toFixed(1))
}
