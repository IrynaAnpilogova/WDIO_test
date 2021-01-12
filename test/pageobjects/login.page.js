
import Page from './page';
import selectors from '../../data/selectors.json'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $(selectors.email) }
    get inputPassword () { return $(selectors.password) }
    get btnSubmit () { return $(selectors.button_log_in) }
    get usernameValidation () { return  $(selectors.error_email_is_not_valid)}
    get passwordValidation () { return $(selectors.error_password_is_required)}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    setUsername (username) {
        this.inputUsername.setValue(username);
    }

    clearUsername () {
        this.clearInput(this.inputUsername);

    }
    clearPassword() {
        this.clearInput(this.inputPassword);

    }


    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmit () {
        this.btnSubmit.click();
    }

    login (username, password) {
        this.setUsername(username);
        this.setPassword(password);
        this.clickSubmit();

    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return browser.url('/user/login');
    }
}

export default new LoginPage();