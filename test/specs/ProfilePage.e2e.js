const ProfilePage = require('../pageobjects/profile.page');
const SearchPage = require('../pageobjects/search.page');

describe ('Verificacion del Llamado al Webservice en Perfil del Profesional', () => {

    beforeEach (() =>{
       browser.reloadSession();
      
    })   
    it ('Validacion de Webservice- https://javito-stage.herokuapp.com', () => {
        browser.url(SearchPage.testUserUrl);
        browser.setupInterceptor();
        SearchPage.ClickGotoProfileBtn();
        browser.pause(2000);
        browser.expectRequest('GET',ProfilePage.WebServiceUrl, 200);
        browser.assertExpectedRequestsOnly()
        });
    
    
});


