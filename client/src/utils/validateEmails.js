export default (emails) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const trim = email => email.trim()
  const isntEmail = email => !emailRegex.test(email)

  const invalidEmails = emails.split(',')
    .map(trim)
    .filter(isntEmail)

  if (invalidEmails.length) { return `These emails are invalid: ${invalidEmails}` }
}
