import React from "react";

export default class ProfileCode extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      height: "100vh",
      width: "100vw",
      border: "none",
      transform: "translate3d(0, 0, 0)",
      position: "fixed",
      margin: "0",
      padding: "0",
      overflow: "hidden"
    };
  }

  WrapHtml(profileCode) {
    return `
    <html>
        <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <style type="text/css">
                html {height: 100%; width: 100%;}
                body {height: 100%; width: 100%; margin 0;}
            </style>
        </head>
        <body>
        ${profileCode}
        </body>
    </html>
    `;
  }

  render() {
    return (
        <iframe
          title={"I'm a Roleplace Profile!"}
          srcDoc={this.WrapHtml(this.props.personaProfileCode)}
          style={this.styles}
          sandbox="allow-scripts allow-top-navigation-by-user-activation allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-modals"
        />
      );
  }
}