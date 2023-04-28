class LoginPageHeroku{


      usernameinput(){

        return "#username"
       
      }

      passwordinput(){

        return "#password"
      }

      Loginbutton(){

        return 'button[type="submit"]'
      }

      errormessage(){

        return 'div[class="flash error"]'
      }


      entercreds(username, password){

        cy.get(this.usernameinput()).type(username)
        cy.get(this.passwordinput()).type(password)
      }

}

const herokulogin = new LoginPageHeroku()

export default herokulogin