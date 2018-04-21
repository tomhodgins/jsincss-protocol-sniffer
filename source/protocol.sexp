mixin('protocol', ['protocols', 'stylesheet'],
  returnValue(
    prelude('protocols.some(test => location.protocol === `${test}:`)\n\
         ? stylesheet\n\
         : \'\'')))
