import { EmailSection } from "./EmailSection/emailSection.js";

const appElm = document.querySelector('#app');

appElm.append(EmailSection({
  heading: "Nepřečtene",
  emails: [],
  folder: "unread"
}))

appElm.append(EmailSection({
  heading: "Přečtene",
  emails: [],
  folder: "read"
}))

// const renderSection = (emails, element) => {
//   const emailElms = emails.map((email) => {
//     return Email({
//       senderName: email.sender.name,
//       subject: email.subject,
//       time: email.time,
//       unread: email.unread
//     })
//   })
//   element.append(...emailElms)
// };

// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
//   .then((response) => response.json())
//   .then((data) => {
//     const appElm = document.querySelector('#app');
//     appElm.append(EmailSection({
//       heading: "Nepřečtene",
//       emails: data.emails,
//       folder: "unread"
//     }))
//   })
// // renderSection(data.emails, document.getElementById('unread')

// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
//   .then((response) => response.json())
//   .then((data) => {
//     const appElm = document.querySelector('#app');
//     appElm.append(EmailSection({
//       heading: "Přečtene",
//       emails: data.emails,
//       folder: "read"
//     }))
//   });
