module.exports = {
"Flagship Does it's thing": function (test) {
  var prd = 'http://smartship.flagshipcompany.com/shipments/favorite';
  var staging = 'http://staging.flagshipcompany.com/frontend_staging.php/shipments/favorite';

  test.open(staging)
  .type('#signin_username','graham@flagshipcompany.com')
  .type('#signin_password','1337Haxxors!')
   .click('.formtable tbody tr td .button') 
    .click('#recon_holder tr:nth-child(4) td:nth-child(4) a ')
    .click('.nextStep')
      .query("tr[data-service='quote_ups_standard']")
        .waitForElement()
        .assert.exists()
        .click()
      .end()
    .click('#btnPredispath')
    .wait(3000)
    .click('#step3 .nextStep') // click approve and confirm
    .waitForElement('#overview .opt')
    .assert.attr('li.rw a').is.not('href', '')
    .done();
}
};