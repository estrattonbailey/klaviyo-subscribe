export function subscribe (listId, email, params = {}) {
  const config = Object.assign({}, params, {
    g: listId,
    email
  })

  const body = Object.keys(config).reduce((str, key) => {
    str.append(key, config[key])
    return str
  }, new URLSearchParams())

  return fetch('https://manage.kmail-lists.com/ajax/subscriptions/subscribe', {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    body
  }).then(res => res.json())
}
