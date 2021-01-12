// const Page = require('./page');
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

// module.exports = new SecurePage();
export default new SecurePage();
