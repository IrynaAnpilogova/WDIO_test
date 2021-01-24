import Page from './page';
import selectors from '../../data/selectors.json'

class ChallengesPage extends Page {

    get statusChallenges() { return $(selectors.statusChallenges) }
    get headerChallenges() { return $(selectors.headerChallenges) }
    get buttonCreate() {return $(selectors.buttonCreate)}
    get searchChallenge() {return $(selectors.searchChallenge)}
    get programmingLang() {return $(selectors.programmingLang)}

// drawer "create new Challenge"

    get challengeName() {return $(selectors.challengeName)}
    get addInstruction() {return $(selectors.addInstruction)}
    get fillOutFormByTemplate() {return $('.ant-btn-link')}
    get buttonValidateSolution() {return $(selectors.buttonValidateSolution)}
    get buttonSendToReview() {return $(selectors.buttonSendToReview)}
    get drawerCreateNewChallenge() {return $(selectors.drawerCreateNewChallenge)}




}
export default new ChallengesPage();