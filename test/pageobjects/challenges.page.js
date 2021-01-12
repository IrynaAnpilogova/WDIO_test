import Page from './page';
import selectors from '../../data/selectors.json'

class ChallengesPage extends Page {

    get statusChallenges() { return $(selectors.statusChallenges) }
    get headerChallenges() { return $(selectors.headerChallenges) }


}
export default new ChallengesPage();