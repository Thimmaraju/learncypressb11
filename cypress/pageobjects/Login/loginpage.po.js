class LoginPage{

   Orangehrmlogo= '//img[@alt="company-branding"]'



    usernameInput(){
        return '//input[@name="username"]'
        return '//input[@name="username"]'
        return '//input[@name="username"]'
    }

    passwordInput(){

        return '//input[@name="password"]'
    }

    loginButton(){

        return 'button[type="submit"]'
    }

    loginerrorMessage(){

        return "Invalid credentials"
    }

    loginwithCredentials(username, password){

        cy.xpath(this.usernameInput()).type(username)
        cy.xpath(this.passwordInput()).type(password)
        cy.get(this.loginButton()).click()
    }

}

const login = new LoginPage()
export default login