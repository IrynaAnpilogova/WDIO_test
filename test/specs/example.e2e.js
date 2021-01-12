
import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';


xdescribe('My Login application', () => {
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

    beforeEach(() => {
        LoginPage.open();

    });


    for (const iteration of credentials) {
        it('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(ProfilePage.userIcon).toBeExisting();
        });
    }

    it('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    });

    it('auth fails if wrong credentials provided', () => {
        LoginPage.setUsername('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmit();
        expect(LoginPage.notification).toHaveText('Auth failed');
    });

    it('email format validation', () => {
        LoginPage.setUsername('helga.pataki@gmail');
        expect(LoginPage.usernameValidation).toHaveText(`'email' is not a valid email`);
    });

    it('email required validation', () => {
        LoginPage.setUsername('123');
        LoginPage.clearUsername();
        expect(LoginPage.usernameValidation).toHaveText('Required');
    });

    it('password required validation', () => {
        LoginPage.setUsername('helga.pataki@gmail.com');
        LoginPage.setPassword('1234897');
        LoginPage.clearPassword();
        expect(LoginPage.passwordValidation).toHaveText('Required');
    });

});















