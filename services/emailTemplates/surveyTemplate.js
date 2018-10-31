const keys = require('../../config/keys')

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2>We'd love to hear your opinion!</h2>
          <h3>Please answer the following question:</h3>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}
