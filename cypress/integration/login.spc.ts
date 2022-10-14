import { LoginPage } from "../pages/login_page"

const loginpage = new LoginPage()
it.only('login test', () => {
    loginpage.navigate('https://trytestingthis.netlify.app/')
    loginpage.enterUsername('test')
    loginpage.enterPassword('test')
    loginpage.clickLogin()
   
    // cy.get('h2').should("contain","Login Successful")
})