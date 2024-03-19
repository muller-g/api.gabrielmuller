const contactEmail = (clientName: string, email: string, phone: string, msg: string) => `
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
          <h1 style="text-align: left; color: #fff; font-size: 16px">${clientName}</h1>
          <h1 style="text-align: left; color: #fff; font-size: 16px">${email}</h1>
          <h1 style="text-align: left; color: #fff; font-size: 16px">${phone}</h1>
          <h1 style="text-align: left; color: #fff; font-size: 16px">${msg}</h1>          
        </div>
    </body>
</html>
`

export {contactEmail};