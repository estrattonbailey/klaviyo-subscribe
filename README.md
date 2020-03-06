# klaviyo-subscribe
Tiny Klaviyo list subscribe utility. **320 bytes gzipped.**

## Install
```
npm i klaviyo-subscribe --save
```

# Usage
```javascript
import subscribe from 'klaviyo-subscribe'

const listId = 'JFDd6y'
const email = 'email@email.com'

subscribe(listId, email, {
  $first_name: 'Eric',
  // any optional traits
}).then(response => {})
```

Sending Custom field data into a list:
```javascript
import subscribe from 'klaviyo-subscribe'

const listId = 'JFDd6y'
const email = 'email@email.com'

subscribe(listId, email, {
  $fields: ['Size', 'Type'],
  Size: 10,
  Type: 'US Mens'
}).then(response => {})
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
