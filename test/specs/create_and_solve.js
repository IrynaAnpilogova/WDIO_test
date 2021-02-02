import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import ChallengesPage from "../pageobjects/challenges.page";


describe('create challenge from scratch', () => {

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





    it('go to Challenges page', () => {
        LoginPage.login(credentials[2].username, credentials[2].password);
        ProfilePage.linkChallenges.click();
    });



    it(' inputs ', () => {
        ChallengesPage.buttonCreate.click();
        ChallengesPage.challengeName.setValue("Odd or even?");
        ChallengesPage.addInstruction.setValue('Given a list of numbers, determine whether the sum of its elements is odd or even. ' +
            'Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).');

    });



})