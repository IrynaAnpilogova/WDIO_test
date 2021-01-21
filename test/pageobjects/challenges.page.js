import Page from './page';
import selectors from '../../data/selectors.json'

class ChallengesPage extends Page {

    get statusChallenges() { return $(selectors.statusChallenges) }
    get headerChallenges() { return $(selectors.headerChallenges) }
    get buttonCreate() {return $(selectors.buttonCreate)}
    get buttonValidateSolution() {return $(selectors.buttonValidateSolution)}
    get buttonSendToReview() {return $(selectors.buttonSendToReview)}
    get drawerCreateNewChallenge() {return $(selectors.drawerCreateNewChallenge)}
    get searchChallenge() {return $(selectors.searchChallenge)}



}
export default new ChallengesPage();