Feature: Google Main Page

  I want to open a search engine

  Scenario Outline: Opening a search engine page
    Given I open Google page
    # Then I see "Google" in the title
    When I enter in '<locator>' and "<text>" in search box

    Examples:
      | locator | text  |
      | #APjFqb | India |
      | xyz     | USA   |
