import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import LocalCoding from '../pageobjects/localCoding';
import CoursesPage from '../pageobjects/courses.page';
import CardsPage  from '../pageobjects/cards.page';
import DiaryPage  from '../pageobjects/diary.page';
import GroupsPage  from '../pageobjects/groups.page';
import ChallengesPage  from '../pageobjects/challenges.page';

describe('My application\'s top menu ' , () => {

    let credentials = [
        {
            username: "helga.pataki@gmail.com",  // learner
            password: "1234897"
        },
        {
            username: "phoebe.buffae@gmail.com", // admin
            password: "7896542"
        },
        {
            username: "iryna.anpilogova@gmail.com", // student
            password: "123456"
        }
    ];


    before(() => {
        LoginPage.open();
    });

    xdescribe('for user with role Admin', () => {

        it(' Link Courses should be displayed', () => {
            LoginPage.login(credentials[1].username, credentials[1].password);
            expect(ProfilePage.linkCourses).toBeExisting();

        });
        it(' should show 9 pages of top menu', () => {
            expect($('//a[contains(text(), "Admin")]')).toBeExisting();
            expect($$('.item')).toBeElementsArrayOfSize(8);
        });

        it('should go to Courses Page if Courses has been clicked  ', () => {
            ProfilePage.linkCourses.click();
            expect(browser).toHaveUrl('https://stage.localcoding.us/course');
            expect(CoursesPage.header.getText()).toEqual("Courses");
            expect((CoursesPage.statusCourses).getAttribute('class')).toEqual('item active');

        });

        it('should have element (button ) on Course Page ', () => {
            expect($('//button/span[contains(text(), \'Create Course\')]')).toBeExisting();
        });

        it('should have element (JavaScript Practice) on Course Page ', () => {
        expect($('a=JavaScript Syntax')).toBeExisting();
        });




        it(' Link Cards should be displayed', () => {
            expect(CardsPage.linkCards).toBeExisting();
        });

        it('should go to Cards Page if Cards has been clicked  ', () => {
            CoursesPage.linkCards.click();
            expect(browser).toHaveUrl('https://stage.localcoding.us/flash');
            let pageHeader = CardsPage.header.getText();
            console.log(pageHeader);
            expect(CardsPage.header.getText()).toEqual("Interview practice cards");
            expect((CardsPage.statusCards).getAttribute('class')).toEqual('item active');

        });

        it('should have 14 elements on Cards Page ', () => {
            expect($$('.space-align-container')).toBeElementsArrayOfSize(14);
        });

        it('should have element on Cards Page ', () => {
            expect($('//a[contains(text(), \'QA Basics 1\')]')).toBeExisting();
            expect($$('.item')).toBeElementsArrayOfSize(8);
        });


        it(' Link Diary should be displayed', () => {
            expect(DiaryPage.linkDiary).toBeExisting();
        });

        it('should go to Diary Page if Diary has been clicked  ', () => {
            CoursesPage.linkDiary.click();
            expect(browser).toHaveUrl('https://stage.localcoding.us/diary');
            expect(DiaryPage.header.getText()).toEqual("Daily reports");
            expect((DiaryPage.statusDiary).getAttribute('class')).toEqual('item active');

        });

        it('should have element on Diary Page ', () => {
            expect($('//button/span[contains(text(), \'Create day report\')]')).toBeExisting();
        });


        it(' Link Groups should be displayed', () => {
            expect(CoursesPage.linkGroups).toBeExisting();
        });

        it('should go to Groups Page if Groups has been clicked  ', () => {
            CoursesPage.linkGroups.click();
            expect(GroupsPage.header.getText()).toEqual("Groups");
            expect(browser).toHaveUrl('https://stage.localcoding.us/group');
            expect((GroupsPage.statusGroups).getAttribute('class')).toEqual('item active');
        });

        it('should have button Create New Group on Diary Page ', () => {
            expect($('//button/span[contains(text(), \'Create new Group\')]')).toBeExisting();
            expect($('//button/span[contains(text(), \'Create new Group\')]')).toBeEnabled();

        });

        it('should have element QA7 on Diary Page ', () => {
            expect($('//a[contains(text(), \'QA7\')]')).toBeExisting();

        });

        it(' Link Challenges should be displayed', () => {
            expect(CoursesPage.linkChallenges).toBeExisting();
        });

        it('should go to Challenges Page if Challenges has been clicked  ', () => {
            CoursesPage.linkChallenges.click();
            expect(ChallengesPage.headerChallenges.getText()).toEqual("Challenges");
        });

        it('should have valid url  ', () => {
            expect(browser).toHaveUrl('https://stage.localcoding.us/challenge');

        });
        it('should be active  ', () => {
            expect((ChallengesPage.statusChallenges).getAttribute('class')).toEqual('item active');
        });


        it('should have button Create Challenge on Challenges Page ', () => {
            expect($('//button/span[contains(text(), \'Create Challenge\')]')).toBeExisting();
            expect($('//button/span[contains(text(), \'Create Challenge\')]')).toBeEnabled();

        });

        it('should have 28 elements in the table ', () => {
            expect($$('.ant-table-row.ant-table-row-level-0')).toBeElementsArrayOfSize(28);

        });

        it('should contain the searching value', () => {
            $('#name').setValue('string');
            expect($$('.ant-table-row.ant-table-row-level-0')).toBeElementsArrayOfSize(14);

        });


        let array = $$('*=string');
        console.log(array[0].getText());


        for (let i = 0; i < array.length; i++) {
            it ('should have the searching word in Challenge\'s name' , () => {
                expect(array[i].getText()).toHaveTextContaining('other text');
            });

        }

    });

})






