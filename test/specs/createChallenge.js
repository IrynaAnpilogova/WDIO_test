
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

            describe('using template for role student', () => {

                it('link Challenges is displayed ', () => {
                    LoginPage.login(credentials[2].username, credentials[2].password);
                    browser.maximizeWindow();
                    expect(ProfilePage.linkChallenges).toBeExisting();
                    ProfilePage.linkChallenges.click();
                });

                it('should have button Create Challenge on Challenges Page ', () => {
                    expect(ChallengesPage.buttonCreate).toBeEnabled();
                });

                it('should open the drawer when the button Create Challenge has been clicked  ', () => {
                    ChallengesPage.buttonCreate.click();
                    expect(ChallengesPage.drawerCreateNewChallenge).toBeDisplayed();
                });

                it('should open the drawer when the button Create Challenge has been clicked  ', () => {
                    expect(ChallengesPage.drawerCreateNewChallenge).toHaveText('Create new Challenge');
                });

                it('the drawer Create new Challenge has buttons', () => {
                    expect(ChallengesPage.buttonValidateSolution).toBeEnabled();
                    expect(ChallengesPage.buttonSendToReview).toBeDisabled();
                });

                it('create new challenge  ', () => {
                    const challangeName = 'Test_challenge_uniq';
                    ChallengesPage.fillOutFormByTemplate.click();
                    ChallengesPage.challengeName.click();
                    ChallengesPage.clearInput(ChallengesPage.challengeName);
                    ChallengesPage.challengeName.setValue(challangeName);
                    ChallengesPage.addInstruction.click();
                    ChallengesPage.clearInput(ChallengesPage.addInstruction);
                    ChallengesPage.addInstruction.setValue('Write a script');
                })

                it('validate challenge and send to review  ', () => {
                    ChallengesPage.buttonValidateSolution.click();
                    expect($('//h5')).toHaveText('Congratulations! All tests have passed.');
                    expect(ChallengesPage.buttonSendToReview).toBeEnabled();
                    ChallengesPage.buttonSendToReview.click();
                })

                it('go to AdminChallenge page', () => {
                    LoginPage.open();
                    LoginPage.login(credentials[1].username, credentials[1].password);
                    ChallengesPage.linkAdmin.click();
                    browser.pause(1000);
                    ChallengesPage.linkAdminChallenges.click();
                })


                it(' check the body of challenge', () => {
                    browser.refresh();
                    const challangeName = 'Test_challenge_uniq';
                    $('#name').setValue(challangeName);
                    let numberOfRows = $$('//table/tbody/tr').length;
                    for (let i = 1; i <= numberOfRows; i++) {
                        expect($('//table/tbody/tr["+i+"]/td/a')).toHaveTextContaining(challangeName);
                    }

                    expect($('//tr[1]/td[2]/div/div[1]')).toHaveText('Easy');
                    expect($('//tr[1]/td[2]/div/div[2]')).toHaveText('review');
                    expect($('//tr[1]/td[2]/div/div[3]')).toHaveText('JavaScript');

                    const challengeLink = $('//td/a');
                    challengeLink.click();

                    expect($('.ant-btn.ant-btn-default.mr-4')).toBeDisplayed();
                    expect($('.ant-btn.ant-btn-primary.mr-4')).toBeDisplayed();
                    expect($('.ant-btn.ant-btn-default.ant-btn-dangerous.mr-4')).toBeDisplayed();
                })


                it('delete challenge', () => {
                    browser.back();
                    $('.ant-btn.ant-btn-link.ant-btn-dangerous').click();
                    browser.pause(1000);
                    $$('//div[@class=\'ant-modal-confirm-btns\']/button')[0].click();
                    browser.pause(3000);

                })

            })



















})
