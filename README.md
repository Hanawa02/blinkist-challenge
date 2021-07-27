# Blinkst Challenge

## AB-Tests

### Main Text

An AB-Test is applied to the main text of the article, with the main informations described bellow for each variant.

#### Control Variant

- id: 0
- name: control-variant
- value: Meet the app that revolutionized reading.

#### Test Variant

- id: 1
- name: test-variant
- value: Meet the app that has 18 million users.

## Analytics

Considering that the distribution of the users to the AB-test variants is done before the navigation, we may have more users that receives one variant thant the other, to allow better analysis of the data, we send the variant selected also on the Page View.

### Page View

An analytics event is triggered on Page View, limited to one time per user, sending the accessed url and the AB-test data as data for the events.
We use the local storage of the browser to identify if the Page View event was already triggered.

### Sign Up Link Click

An analytics event is triggered when the user clicks in the Sign Up Link, this event is triggered only once per user, sending the event name/identifier and the applied AB-test data.
We use the local storage of the browser to identify if the Page View event was already triggered.
