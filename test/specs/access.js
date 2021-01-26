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
            username: "testermike@mail.ru", // student
            password: "12345"
        },
        {
            username: "iryna.anpilogova@gmail.com", // student
            password: "123456"
        }
    ];

    before(() => {
        LoginPage.open();
    });

    // after(() => {
    // });

    describe('for user with role Learner', () => {

        it(' Links should be displayed', () => {
            LoginPage.login(credentials[0].username, credentials[0].password);
            expect(ProfilePage.linkCourses).toBeDisplayed();
            expect(ProfilePage.linkCards).toBeDisplayed();
            expect(ProfilePage.linkDiary).toBeDisplayed();
            expect(ProfilePage.linkChallenges).toBeDisplayed();
            expect(ProfilePage.linkShop).toBeDisplayed();
            expect(ProfilePage.linkChat).toBeDisplayed();
        });

        it(' should show 6 pages of top menu', () => {
            expect($$('.item')).toBeElementsArrayOfSize(6);
        });

        it(' the role should be displayed on the ProfilePage ', () => {
            expect($('.ant-scroll-number.ant-badge-count.ant-badge-multiple-words')).toHaveText('learner');
        });

        it(' on the Challenges main page the button "create Challenge" is not present', () => {
            ProfilePage.linkChallenges.click();
            const displayed = ChallengesPage.buttonCreate.isDisplayed();
            expect(displayed).toEqual(false);
        });

    })

    describe('for user with role Admin', () => {

        it(' links should be displayed', () => {
            LoginPage.open();
            LoginPage.login(credentials[1].username, credentials[1].password);
            expect(ProfilePage.linkCourses).toBeExisting();
            expect(ProfilePage.linkCards).toBeDisplayed();
            expect(ProfilePage.linkDiary).toBeDisplayed();
            expect(ProfilePage.linkChallenges).toBeDisplayed();
            expect(ProfilePage.linkShop).toBeDisplayed();
            expect(ProfilePage.linkChat).toBeDisplayed();

        });

        it(' should show 9 pages of top menu', () => {
            expect($('//a[contains(text(), "Admin")]')).toBeExisting();
            expect($$('.item')).toBeElementsArrayOfSize(8);
        });

        it(' the role should be displayed on the ProfilePage ', () => {
            expect($('.ant-scroll-number.ant-badge-count.ant-badge-multiple-words')).toHaveText('admin');
        });

        it(' on the Challenges main page the button "create Challenge" should be displayed', () => {
            ProfilePage.linkChallenges.click();
            expect(ChallengesPage.buttonCreate).toBeDisplayed();
        });
    })

    describe('for user with role Student', () => {

        it(' links should be displayed', () => {
            LoginPage.open();
            LoginPage.login(credentials[2].username, credentials[2].password);
            expect(ProfilePage.linkCourses).toBeExisting();
            expect(ProfilePage.linkCards).toBeDisplayed();
            expect(ProfilePage.linkDiary).toBeDisplayed();
            expect(ProfilePage.linkChallenges).toBeDisplayed();
            expect(ProfilePage.linkShop).toBeDisplayed();
            expect(ProfilePage.linkChat).toBeDisplayed();
        });

        it(' should show 8 pages of top menu', () => {
            expect($$('.item')).toBeElementsArrayOfSize(8);
        });

        it(' the role should be displayed on the ProfilePage ', () => {
            expect($('.ant-scroll-number.ant-badge-count.ant-badge-multiple-words')).toHaveText('student');
        });

        it(' on the Challenges main page the button "create Challenge" should be displayed', () => {
            ProfilePage.linkChallenges.click();
            expect(ChallengesPage.buttonCreate).toBeDisplayed();
        });
    })

})