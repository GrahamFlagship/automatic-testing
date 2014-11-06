module.exports = {
"Flagship Does it's thing": function (test) {
  test.open('http://staging.flagshipcompany.com/frontend_staging.php')
  .type('#signin_username','graham@flagshipcompany.com')
  .type('#signin_password','1337Haxxors!')
   .click('.formtable tbody tr td .button') 
    .assert.text('.phonesupport').is('Toll-Free Support: 1 866 320 8383')
    .done();
}
};