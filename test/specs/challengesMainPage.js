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

        it('link Challenges is displayed ', () => {
            LoginPage.login(credentials[1].username, credentials[1].password);
            expect(ProfilePage.linkChallenges).toBeExisting();
            ProfilePage.linkChallenges.click();
        });



        it(' test 1 challenges on the page by default', () => {
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);
        });

        it(' test 3 filter - name of challenge ', () => {

            ChallengesPage.searchChallenge.setValue('Anagram');
            // $('#name').setValue('Anagram');
            browser.pause(3000);
            let numberOfRows = $$('//table/tbody/tr/td[@class="ant-table-cell"][1]').length;
            expect($$('//table/tbody/tr/td[@class=\'ant-table-cell\'][1]')).toBeElementsArrayOfSize(numberOfRows);
        });

        it('every displayed challenge after search should have the particular text in it\'s name', () => {

            let numberOfRows = $$('//table/tbody/tr').length;
                for (let i = 1; i <= numberOfRows; i++ ) {
                    expect($('//table/tbody/tr["+i+"]/td[@class="ant-table-cell"][1]/a')).toHaveTextContaining('Anagram');
                }

        });


        it('after clear search field the number of challenges on the page is by default', () => {
            ChallengesPage.searchChallenge.click();
            ChallengesPage.clearInput(ChallengesPage.searchChallenge);
            let numberOfRows = $('.ml-3.h-100.d-flex.small').getText().split(' ')[1];
            numberOfRows = +numberOfRows;
            expect($$('.ant-table-row')).toBeElementsArrayOfSize(numberOfRows);

        });


        //programmingLang

        // it(' test 5 filter - programming language ', () => {
        //     $('#programmingLang').setValue('Anagram');
        //     browser.pause(3000);
        //     let challengesLength = $$('//table/tbody/tr/td[@class="ant-table-cell"][1]').length;
        //     expect($$('//table/tbody/tr/td[@class=\'ant-table-cell\'][1]')).toBeElementsArrayOfSize(challengesLength);
        // });







    });



})
