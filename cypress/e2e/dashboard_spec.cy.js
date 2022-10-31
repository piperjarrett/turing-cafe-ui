describe("dashboard spec", () => {
  beforeEach(() => {
    cy.intercept(
      { method: "GET", url: "http://localhost:3001/api/v1/reservations" },
      [
        {
          id: 1,
          name: "Christie",
          date: "12/29",
          time: "7:00",
          number: 12,
        },
        {
          id: 2,
          name: "Leta",
          date: "4/5",
          time: "7:00",
          number: 2,
        },
        {
          id: 3,
          name: "Pam",
          date: "1/21",
          time: "6:00",
          number: 4,
        },
        {
          id: 4,
          name: "Khalid",
          date: "5/9",
          time: "7:30",
          number: 7,
        },
        {
          id: 5,
          name: "Will",
          date: "5/15",
          time: "6:30",
          number: 2,
        },
        {
          id: 6,
          name: "Eric",
          date: "5/30",
          time: "6:00",
          number: 8,
        },
        {
          id: 7,
          name: "Robbie",
          date: "6/5",
          time: "5:30",
          number: 2,
        },
        {
          id: 8,
          name: "Travis",
          date: "6/8",
          time: "7:00",
          number: 12,
        },
        {
          id: 9,
          name: "Brittany",
          date: "9/9",
          time: "7:30",
          number: 3,
        },
      ]
    ).as("resyData");
    cy.visit("http://localhost:3000");
  });
  it("Should render a form on page load", () => {
    cy.get("input[name='name']")
      .get("input[name='date']")
      .get("input[name='time']")
      .get("input[name='number']");
  });
  it("Should display all the previous reservations on page", () => {
    cy.get("h2")
      .contains("Christie")
      .get("p")
      .contains("12/29")
      .get("p")
      .contains("7:00 pm")
      .get("p")
      .contains("Number of guest: 12");
  });
  it("Should have a cancel button for a reservation", () => {
    cy.get("button[class='cancel']").contains("Cancel");
  });
  it("Should be able to fill in the form and create a new reservation", () => {
    cy.get("input[name='name']")
      .type("Piper Jarrett")
      .get("input[name='date']")
      .type("11/05")
      .get("input[name='time']")
      .type("6:45")
      .get("input[name='number']")
      .type("4");
  });
  it("Should be able to create a new reservation when the form is filled in and Make Reservation is clicked on", () => {
    cy.get("input[name='name']")
      .type("Piper Jarrett")
      .get("input[name='date']")
      .type("11/05")
      .get("input[name='time']")
      .type("6:45")
      .get("input[name='number']")
      .type("4");
    cy.get("button[class='reserve']").click();
    cy.get("h2")
      .contains("Piper Jarrett")
      .get("p")
      .contains("11/05")
      .get("p")
      .contains("6:45 pm")
      .get("p")
      .contains("Number of guest: 4");
  });
});
