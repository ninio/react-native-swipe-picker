# react-native-swipe-picker
An inline picker with swipe-to-select-an-item interaction

## Installation
In an existing react-native or expo project run:

```
npm install --save https://github.com/ninio/react-native-swipe-picker
```
or
```
yarn add https://github.com/ninio/react-native-swipe-picker
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