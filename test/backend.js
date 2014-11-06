module.exports = {
"Backend Login": function (test) {
  var prd = 'http://smartship.flagshipcompany.com/shipments/favorite';
  var staging = 'http://staging.flagshipcompany.com/backend_staging.php/guard/users';

  test.open(staging)
  .type('#signin_username','graham@flagshipcompany.com')
  .type('#signin_password','1337Haxxors!')
  .click('#content form table input')
  .wait(2000)
  .assert.text('#sf_admin_header').is('User list')
  .done();
 }
};
