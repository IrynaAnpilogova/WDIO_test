import Page from './page';
import selectors from '../../data/selectors.json'

class CoursesPage extends Page {

    get statusCourses() { return $(selectors.statusCourses) }

}
export default new CoursesPage();