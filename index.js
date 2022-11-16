var t = $("#example").DataTable();
fetch("https://api-cloud.bitmart.com/account/v1/currencies")
  .then((response) => response.json())
  .then(function (data) {
    for (let i = 0; i < data.data.currencies.length; i++) {
      t.row
      .add([
        data.data.currencies[i].currency,
        data.data.currencies[i].network,
        data.data.currencies[i].withdraw_enabled,
        data.data.currencies[i].deposit_enabled,
      ])
      .draw(false);
    }
  })
  .catch((error) => {});
