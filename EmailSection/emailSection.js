import { Email } from "../Email/email.js";

export const EmailSection = (props) => {
  const { heading, emails, folder } = props;

  //Vytvor element section
  const element = document.createElement('section');
  element.classList.add('inbox');

  //Pridej elementu section innerHTML
  element.innerHTML = `
      <h2>${heading}</h2>
      <div class="emails" id="${folder}"></div>
  `
  //Oznac element kontejneru emailu
  const emailContainer = element.querySelector(`#${folder}`);

  //Rekni si o data
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("emaily", data.emails)
      //Dostan data z data.emails do pole emails
      emails.push(...data.emails) //email1, email2, email3,...

      //emails=[email1, email2, email3,...]
      //Vygeneruj si pole s komponentami Email
      const emailElms = emails.map((email) => {
        // console.log("email", email)
        return Email({
          id: email.id,
          senderName: email.sender.name,
          subject: email.subject,
          time: email.time,
          unread: email.unread,
          // body: 'Nejaky testovaci text'
        })
      })
      //emailElms=[Email,Email,Email,Email,...]

      //Vysyp komponenty Email do kontejneru emailu
      emailContainer.append(...emailElms);
    });

  //Return element section
  return element;
};

