module.exports = {
"Flagship Does it's thing": function (test) {
  test.open('http://staging.flagshipcompany.com/frontend_staging.php/shipments/favorite')
  .type('#signin_username','graham@flagshipcompany.com')
  .type('#signin_password','1337Haxxors!')
   .click('.formtable tbody tr td .button') 
    .click('#recon_holder td:nth-child(4) a ')
    .click('.nextStep')
    .waitForElement('.rowhover')
    .click('#btnPredispath')
    .wait()
    .click('#step3 .nextStep') // click approve and confirm
    .waitForElement('#overview .opt')
    .assert.attr('li.rw a').is.not('href', '')
    .done();
}
};