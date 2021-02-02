import selectors from "../../data/selectors.json";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get notification () { return $('.ant-notification-notice-message') }
    get header() { return $(selectors.header)}
    get linkCourses () { return $(selectors.linkCourses) }
    get linkCards () {return $(selectors.linkCards) }
    get linkDiary () {return $(selectors.linkDiary) }
    get linkGroups () {return $(selectors.linkGroups) }
    get linkChallenges () {return $(selectors.linkChallenges) }
    get linkShop () {return $(selectors.linkShop) }
    get linkChat () {return $(selectors.linkChat) }
    get linkAdmin() {return $(selectors.linkAdmin)}
    get linkAdminChallenges() {return $$(selectors.linkAdminChallenges)[2]}


    clearInput (element) {
        element.keys(['Command', 'a']);
        element.keys(['Backspace']);
    }

}
export default Page;
