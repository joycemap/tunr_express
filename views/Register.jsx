var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-Equiv="X-UA-Compatible" content="ie=edge" />
          <title>Register for Tunr Here!</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <div>
            <h2>Register for Tunr Here!</h2>
            <form action="/register" method="POST">
              <p>
                Name <input name="name" required />
              </p>
              <p>
                Password <input type="password" name="password" required />
              </p>
              <div>
                <input
                  type="submit"
                  value="Register!"
                  style={{ borderRadius: `5px`, marginRight: `10px` }}
                />
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;
