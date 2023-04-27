Feature: Validate Login Functionality

   Positive and negative Tests of Login Functionality

   Scenario: Verify login with Valid credentials

      Given  User launch the Application
      When   User Enter valid username "Admin" and Valid password "admin123"
      And    User clicks on login Button
      Then   User should be navigated to Dashboard Page

   # Scenario: Verify login with InValid credentials

   #    Given  User launch the Application
   #    When   User Enter Invalid username "Adfnkunhmin" and Invalid password "admifbjkfn123"
   #    And    User clicks on login Button
   #    Then   User should get error Message

   Scenario Outline: Verify login with InValid credentials

      Given  User launch the Application
      When   User Enter Invalid username '<username>' and Invalid password '<password>'
      And    User clicks on login Button
      Then   User should get error Message

      Examples:
         | username    | password  |
         | admin       | admin1234 |
         | Adfnkunhmin | admin123  |
         | Adfnkunhmin | admin1234 |