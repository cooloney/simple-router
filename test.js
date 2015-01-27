if (Meteor.isClient) {
  Template.test.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
}

