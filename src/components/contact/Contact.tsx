import './contact.scss';
import mailIcon from '../../assets/svg/contact/mail.svg';
import linkedInIcon from '../../assets/svg/contact/linkedIn.svg';
import githubIcon from '../../assets/svg/contact/github.svg';
import { Link } from 'react-router-dom';
import type { ContactType } from '../../types/sectionTypes';

export default function Contact() {
  const contactList: ContactType[] = [
    { id: 0, icon: mailIcon, value: 'legrand.malobe@outlook.fr' },
    { id: 1, icon: linkedInIcon, value: 'Legrand Malobe', link: 'https://www.linkedin.com/in/legrand-malobe-3a0937244/' },
    { id: 2, icon: githubIcon, value: 'Legrand-Malobe', link: 'https://github.com/Legrand-Malobe' },
  ]
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        Contact
      </div>
      <div className="contact-content">
        {contactList.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">
              <img src={contact.icon} alt="" />
            </div>
            <div className="contact-label">
              {contact.id == 0 ?
                <a href={`mailto:${contact.value}`}>
                  <span>{contact.value}</span>
                </a>
                :
                <Link to={contact.link!} target='blank'>
                  <span>
                    {contact.value}
                  </span>
                </Link>
              }
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}