module.exports = {
  possessive: (string) => {
    if (string) {

      const lastLetter = string.slice(-1);
      if (lastLetter.toLowerCase() === 's') {
        return `${string}'`
      }
      return `${string}'s`
    }
  }
}