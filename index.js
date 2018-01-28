export default (options, stylesheet) => {

  const results = []

  for (let test in options) {

    results.push(location.protocol === `${options[test]}:` ? true : false)

  }

  return results.includes(true) ? stylesheet : ''

}