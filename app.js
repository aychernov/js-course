const fnError = () => {
  throw new Error('Error')
}


try {
  fnError()
} catch (err) {
  console.error(err)
  console.log(err.message)
}

