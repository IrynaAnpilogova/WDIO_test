import Page from './page';
import selectors from '../../data/selectors.json'

class DiaryPage extends Page {

    get statusDiary() { return $(selectors.statusDiary) }


}
export default new DiaryPage();