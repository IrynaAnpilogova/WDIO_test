import Page from './page';
import selectors from '../../data/selectors.json'

class ProfilePage extends Page {

    get userIcon () { return $('svg[data-icon="user"]') }
    get siteName() { return $('.site-name') }


}
export default new ProfilePage();