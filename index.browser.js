function protocol(protocols, stylesheet) {

  return protocols.some(test => location.protocol === `${test}:`)
          ? stylesheet
          : ''

}
