import ChallengesPage  from '../pageobjects/challenges.page';
import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";

describe('Challenges main page ' ,() => {
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

    describe('for role admin', () => {

        it('test_1 link Challenges is displayed ', () => {
            LoginPage.login(credentials[1].username, credentials[1].password);
            expect(ProfilePage.linkChallenges).toBeExisting();
            ProfilePage.linkChallenges.click();
        });

        it(' test_2 number of challenges on the page by default', () => {
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);
        });

        it(' test_3 filter - search challenge ', () => {
            ChallengesPage.searchChallenge.setValue('Anagram');
            browser.pause(3000);
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('//table/tbody/tr/td[@class=\'ant-table-cell\'][1]')).toBeElementsArrayOfSize(numberOfRows);
        });

        it(' test_4 every displayed challenge after search should have the particular text in it\'s name', () => {
            let numberOfRows = $$('//table/tbody/tr').length;
                for (let i = 1; i <= numberOfRows; i++ ) {
                    expect($('//table/tbody/tr["+i+"]/td[@class="ant-table-cell"][1]/a')).toHaveTextContaining('Anagram');
                }
        });

        it(' test_5 after clear search field the number of challenges on the page is by default', () => {
            ChallengesPage.searchChallenge.click();
            ChallengesPage.clearInput(ChallengesPage.searchChallenge);
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);
        });

        //programmingLang

        it('should wait until page is reloaded', () => {
            const elem = $('.h1');
            elem.waitForDisplayed({ timeout: 1000 });
        });

        it(' test_6 filter - programming language ', () => {
            browser.pause(3000);
            $('#programmingLang').click();
            $$('.ant-select-item-option-content')[1].click(); //Java
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);
        });

        it(' test_7 every displayed challenge after language filter', () => {
            let language = $('.ant-select-selection-item').getAttribute('title');
            let numberOfRows = $$('//table/tbody/tr').length;
            for (let i = 1; i <= numberOfRows; i++ ) {
                expect($('//table/tbody/tr["+i+"]/td[@class="ant-table-cell"][3]')).toHaveTextContaining(language);
            }
        });


        it('should find the circle and click it', () => {
            const arrow = $('.ant-select-arrow');
            const location = arrow .getLocation();
            console.log(location);

            const xLocation = arrow.getLocation('x');
            console.log(xLocation);

            const yLocation = arrow.getLocation('.ant-select-arrow', 'y');
            console.log(yLocation);

            $('.ant-select-arrow').moveTo({ xLocation, yLocation });
            browser.pause(3000);
            $('.anticon.anticon-close-circle').click();
        });

        it('should wait until page is reloaded', () => {
            const elem = $('.h1');
            elem.waitForDisplayed({ timeout: 1000 });
        });

        it('should find the arrow and click it', () => {
            const arrow = $('#programmingLang');
            const location = arrow.getLocation();
            console.log(location);

            const xLocation = arrow.getLocation('x');
            console.log(xLocation);

            const yLocation = arrow.getLocation('.ant-select-arrow', 'y');
            console.log(yLocation);

            $('#programmingLang').moveTo({ xLocation, yLocation });
            browser.pause(3000);
            $('#programmingLang').click();
        });

        it(' test_8 filter - programming language - All languages ', () => {
            // $('.ant-select-arrow').click();
            $$('.ant-select-item-option-content')[2].click(); // Java Script
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);
        });

        it(' test_9 every displayed challenge after language filter', () => {
            let language = $('.ant-select-selection-item').getAttribute('title');
            let numberOfRows = $$('//table/tbody/tr').length;
            for (let i = 1; i <= numberOfRows; i++ ) {
                expect($('//table/tbody/tr["+i+"]/td[@class="ant-table-cell"][3]')).toHaveTextContaining(language);
            }
        });



    });



})
