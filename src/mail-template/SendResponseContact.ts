const contactEmailResponse = (clientName: string) => `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>E-mail contato</title>
    </head>
    <body style="width: 100%; display: flex; justify-content: center; align-items: center; background-color: #111418">
        <div style="width: 100%; max-width: 900px; padding: 0px 40px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
          <h1 style="font-weight: bold; color: #fff; text-decoration-line: underline; text-decoration-color: rgb(173, 0, 255); font-size: 20px;">Gabriel Müller Dev</h1>
          <h1 style="text-align: left; color: #fff; font-size: 16px">Olá ${clientName}, obrigado pelo seu contato, em breve entrarei em contato para que possamos começar esse projeto incrível juntos!</h1>
          <h1 style="text-align: left; color: #fff; font-size: 16px">Enquanto isso, me siga nas redes sociais, isso vai me ajudar muito! </h1>
          <ul style="width: 100%; display: flex; flex-direction: column">
              <li style="width: max-content; color: #fff"><a style="color: #fff; text-decoration-line: underline; text-decoration-color: rgb(173, 0, 255);" href="https://instagram.com/_muller.dev" target="_blank">_muller.dev - Instagram</a></li>
              <li style="width: max-content; color: #fff"><a style="color: #fff; text-decoration-line: underline; text-decoration-color: rgb(173, 0, 255);"  href="https://www.linkedin.com/in/muller-g/" target="_blank">muller-g - Linkedin</a></li>
              <li style="width: max-content; color: #fff"><a style="color: #fff; text-decoration-line: underline; text-decoration-color: rgb(173, 0, 255);"  href="https://github.com/muller-g" target="_blank">muller-g - Github</a></li>
          </ul>
        </div>
    </body>
</html>
`

export {contactEmailResponse};