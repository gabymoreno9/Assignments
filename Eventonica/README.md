# Eventonica

This project is basically an event management site.


## Running the tests

The test I used were Jasmine.

### Break down into end to end tests

There were a total of 5 tests

Test 1: Adds a New Event to the System
```
  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent("Anne Concert", "11/09/2020", "Music");
      expect(er.events.length).toEqual(1);
      expect(er.events[0].title).toEqual("Anne Concert"); // what are some other things you can test?
    });
  });
  ```

  Test 2: Adds a New User to the System
```
 describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser("Jennifer")
      expect(er.users.length).toEqual(1);
      expect(er.users[0].username).toEqual("Jennifer")
    });
  });
  ```

  Test 3: Adds an event to a user's personal event array
```
  describe("saveUserEvent", () => {
    it("adds an event to a user's personal event array", () => {
      er.addEvent("Anne Concert", "11/09/2020", "Music");
      er.addUser("Jennifer");
      er.saveUserEvent("Jennifer", "Anne Concert");
      expect(er.users[0].username).toEqual("Jennifer");
      expect(er.users[0].savedEvents.length).toEqual(1);
      expect(er.users[0].savedEvents[0].title).toEqual("Anne Concert");
    });
  });
  ```

  Test 4: Removes a user from the system
```
 describe("deleteUser", () => {
    it("removes a User from the system", () => {
      er.addUser("Jennifer");
      expect(er.users.length).toEqual(1);
      er.deleteUser("Jennifer");
      expect(er.users.length).toEqual(0);
    });
  });
  ```

  Test 5: Removes event from the system
```
  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      er.addEvent("Anne Concert");
      expect(er.events.length).toEqual(1);
      er.deleteEvent("Anne Concert");
      expect(er.events.length).toEqual(0);
    });
  });
  ```

### And coding style tests

We need these tests to learn how testing works and also make sure the code works.


## Built With

* jQuery
* HTML/CSS


