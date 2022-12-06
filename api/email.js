const nodemailer = require('nodemailer')

export default async function (req, res, next) {

let body = [];
req.on('data', (chunk) => {
  body.push(chunk);
}).on('end', async () => {
  body = await Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
  body = JSON.parse(body)
  
  // let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'kostafan_roc@list.ru', // generated ethereal user
      pass: 'DgccqQvZqhxcDeQ5ekeC', // generated ethereal password
    },
  });
  
  let result = await transporter.sendMail({
    from: '"Administrator" <kostafan_roc@list.ru>',
    to: 'kostafan_roc@list.ru',
    subject: 'Заявка с сайта',
    text: 'Входящая заявка',
    html:
      `<strong>Заказ звонка</strong><br/></br>Имя ${body.name}<br/></br>Телефон ${body.phone}<br/></br>${body.comment ? 'Комментарий ' + body.comment : ''}`,
  })
  
  res.end(JSON.stringify(result))
  return
});

}