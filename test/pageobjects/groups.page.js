import Page from './page';
import selectors from '../../data/selectors.json'

class GroupsPage extends Page {

    get statusGroups() { return $(selectors.statusGroups) }


}
export default new GroupsPage();