import Page from './page';
import selectors from '../../data/selectors.json'

class CardsPage extends Page {

    get statusCards() { return $(selectors.statusCards) }


}
export default new CardsPage();