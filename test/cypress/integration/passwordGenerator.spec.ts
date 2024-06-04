describe("Password Generator App", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  const clickCheckbox = (
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
  ) => {
    if (uppercase) {
      cy.get('[data-test="SettingsCheckboxes:upperCase:checkbox"]').click()
    }
    if (lowercase) {
      cy.get('[data-test="SettingsCheckboxes:lowerCase:checkbox"]').click()
    }
    if (numbers) {
      cy.get('[data-test="SettingsCheckboxes:numbers:checkbox"]').click()
    }
    if (symbols) {
      cy.get('[data-test="SettingsCheckboxes:symbols:checkbox"]').click()
    }
  }

  it("Password Generator should successfully load and have the correct application title", () => {
    cy.get('[data-test="PasswordGenerator:title"]').should(
      "have.text",
      "Password Generator",
    )
  })

  it("Password box should have the default value of P4$5W0rD! upon first page load", () => {
    cy.get('[data-test="Password:generatedPasswordText"]').should(
      "have.text",
      "P4$5W0rD!",
    )
    cy.get('[data-test="Password:copyIcon"]').should("exist")
    cy.get('[data-test="Password:copyIconPopUpText"]').should("not.be.visible")
  })

  it("Settings Panel should have four checkboxes for including upper case letters, lowercase letters, numbers and symbols", () => {
    cy.get('[data-test="CharacterLengthSlider:label"]').should(
      "have.text",
      "Character Length",
    )
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "6",
    )

    cy.get('[data-test="SettingsCheckboxes:container"]').within(() => {
      cy.get('[data-test="SettingsCheckboxes:upperCase:checkbox"]').should(
        "have.text",
        "Include Uppercase Letters",
      )
      cy.get('[data-test="SettingsCheckboxes:lowerCase:checkbox"]').should(
        "have.text",
        "Include Lowercase Letters",
      )
      cy.get('[data-test="SettingsCheckboxes:numbers:checkbox"]').should(
        "have.text",
        "Include Numbers",
      )
      cy.get('[data-test="SettingsCheckboxes:symbols:checkbox"]').should(
        "have.text",
        "Include Symbols",
      )
    })
  })

  it("Generate button should be disabled when there is no checkbox checked", () => {
    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').should(
      "be.disabled",
    )
  })

  it("Should generate a six characters long password with only upper case letters upon clicking the generate button with the include uppercase checkbox checked", () => {
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "6",
    )

    clickCheckbox(true, false, false, false)
    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').click()
    cy.get('[data-test="Password:generatedPasswordText"]')
      .invoke("text")
      .should("match", /[A-Z]/)
  })

  it("Should generate a thirteen characters long password with only lower case letters upon clicking the generate button with the include lowercase checkbox checked", () => {
    cy.get('[data-test="CharacterLengthSlider:slider"]').type("{rightArrow}")
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "13",
    )

    clickCheckbox(false, true, false, false)

    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').click()
    cy.get('[data-test="Password:generatedPasswordText"]')
      .invoke("text")
      .should("match", /[a-z]/)
  })

  it("Should generate a thirteen characters long password with only numbers upon clicking the generate button with the include numbers checkbox checked", () => {
    cy.get('[data-test="CharacterLengthSlider:slider"]').type("{rightArrow}")
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "13",
    )

    clickCheckbox(false, false, true, false)

    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').click()
    cy.get('[data-test="Password:generatedPasswordText"]')
      .invoke("text")
      .should("match", /\d/)
  })

  it("Should generate a thirteen characters long password with only symbols upon clicking the generate button with the include symbols checkbox checked", () => {
    cy.get('[data-test="CharacterLengthSlider:slider"]').type("{rightArrow}")
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "13",
    )

    clickCheckbox(false, false, false, true)

    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').click()
    cy.get('[data-test="Password:generatedPasswordText"]')
      .invoke("text")
      .should("match", /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/)
  })

  it("Should generate a thirteen characters long password with at least one uppercase letter, lowercase letter, number and symbol with all the checkboxes checked", () => {
    cy.get('[data-test="CharacterLengthSlider:slider"]').type("{rightArrow}")
    cy.get('[data-test="CharacterLengthSlider:label:value"]').should(
      "have.text",
      "13",
    )

    clickCheckbox(true, true, true, true)

    cy.get('[data-test="SettingsPanel:generatePasswordbutton"]').click()
    cy.get('[data-test="Password:generatedPasswordText"]')
      .invoke("text")
      .should(
        "match",
        /\S*(\S*([A-Z]\S*[0-9])|([0-9]\S*[a-zA-Z])([ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]))\S*/,
      )
  })
})
