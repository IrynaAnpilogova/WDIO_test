
import ChallengesPage  from '../pageobjects/challenges.page';
import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";



    describe('Create challenge ' ,() => {
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

            describe('for role student', () => {

                it('link Challenges is displayed ', () => {
                    LoginPage.login(credentials[2].username, credentials[2].password);
                    expect(ProfilePage.linkChallenges).toBeExisting();
                    ProfilePage.linkChallenges.click();
                });

                it('should have button Create Challenge on Challenges Page ', () => {
                    expect(ChallengesPage.buttonCreate).toBeEnabled();
                });

                it('should open the drawer when the button Create Challenge has been clicked  ', () => {
                    ChallengesPage.buttonCreate.click();
                    expect(ChallengesPage.drawerCreateNewChallenge).toBeDisplayed();
                    // expect(ChallengesPage.buttonValidateSolution).toBeExisting();
                });


                it('should open the drawer when the button Create Challenge has been clicked  ', () => {
                    expect(ChallengesPage.drawerCreateNewChallenge).toHaveText('Create new Challenge');
                });

                it('the drawer Create new Challenge has buttons', () => {
                    expect(ChallengesPage.buttonValidateSolution).toBeEnabled();
                    expect(ChallengesPage.buttonSendToReview).toBeDisabled();
                });

                it('create new challenge  ', () => {
                    ChallengesPage.fillOutFormByTemplate.click();

                    ChallengesPage.challengeName.click();
                    ChallengesPage.clearInput(ChallengesPage.challengeName);
                    ChallengesPage.challengeName.setValue('Test_challenge_1');

                    ChallengesPage.addInstruction.click();
                    ChallengesPage.clearInput(ChallengesPage.addInstruction);
                    ChallengesPage.addInstruction.setValue('Write a script');

                    ChallengesPage.buttonValidateSolution.click();
                    expect($('//h5')).toHaveText('Congratulations! All tests have passed.');
                    ChallengesPage.buttonSendToReview.click();
                    expect(ChallengesPage.buttonSendToReview).toBeEnabled();

                });

                it('make sure the new challenge appeared on the admin page ', () => {


                })




            });




})
