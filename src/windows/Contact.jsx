import { WindowControls } from "#components";
import windowWrapper from "#hoc/windowWrapper";
import { socials } from "#constants";
const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      
      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="Adrian" className="w-20 rounded-full" />
        <h3>Abdelrhman Elsawy</h3>
        <p> Got an idea? Let's talk! </p>
        

        <ul>
          {socials.map(({id, text, icon, bg, link}) => (
            <li key={id} style={{backgroundColor: bg}}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>


    </>
  )
}

const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;
