import { locations } from "#constants";
import { assetUrl } from '#utils/assetUrl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
const projects = locations.work?.children?? [];


const Home = () => {
    const{setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => {
        Draggable.create(".folder");
    }, []);

    
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li onClick={() => handleOpenProjectFinder(project)} key={project.id} className="group folder">
            <img src={assetUrl('/images/folder.png')} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home
