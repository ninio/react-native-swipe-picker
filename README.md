# react-native-swipe-picker
An inline picker with swipe-to-select-an-item interaction

# Example
![Swipe Picker Example](https://raw.githubusercontent.com/ninio/react-native-swipe-picker/master/docs/Demo-app.gif)

This is a screenshot from the demo app, that is located in the `demo` folder.

## Installation
In an existing react-native or expo project run:

```
npm install --save react-native-swipe-picker
```
or
```
yarn add react-native-swipe-picker
```

## Usage

```jsx
/* ... */
import SwipePicker from 'react-native-swipe-picker'

/* ... */

export default () => {
  return (
    { /* ... */ }
      <SwipePicker
        items={[
          {
            value: 101,
            label: 'Item 101'
          },
          {
            value: 202,
            label: 'Item 202'
          },
          {
            value: 303,
            label: 'Item 303'
          },
          {
            value: 404,
            label: 'Item 404'
          },
          {
            value: 505,
            label: 'Item 505'
          }
        ]}
        onChange={ ({ index, item }) => {
          console.log( `Selected index: ${ index }` );
          console.log( `Selected item: ${ item }` );
        }}
        height={ 80 }
        width={ 120 }
       />
    { /* ... */ }
  )
}

/* ... */

```