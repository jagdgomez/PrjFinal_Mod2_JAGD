const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {

    WebServiceUrl= 'https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41'

}
module.exports = new ProfilePage();
