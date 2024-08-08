var countriesJSONdata;
$.getJSON('https://raw.githubusercontent.com/vplameniraket/countrieslib/main/countries-codes-flags.json', function(data) {
  countriesJSONdata = data;
  console.log(data);
});
