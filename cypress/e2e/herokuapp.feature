Feature: Validate login of HerokuApp

    description

    # Scenario: Validate login with invalid creds

    #   Given User Launch the Heroku Application
    #   When  User Enter inValid creds linke Username "bvjhbfuiwehb" and password "jhbiufhbqwudgvb"
    #   And   User click on LoginButton in LoginPage
    #   Then  User should see error message

    Scenario Outline: Validate login with invalid creds

        Given User Launch the Heroku Application
        When  User Enter inValid creds linke Username "<username>" and password "<password>"
        And   User click on LoginButton in LoginPage
        Then  User should see error message
        Examples:
            | username | password |
            | raju     | raju1234 |
            | raju2     | raju12345 |
            | raju3     | raju12346 |