import gsap from 'gsap';
import {Draggable} from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


import { Navbar, Welcome, Dock, Home, MobileHome, MobileBottomNav } from '#components';
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos, Archive } from '#windows';

const App = () => {
  return (
   <main>
    <Navbar />
    <Welcome />
    <Dock />
    <MobileHome />
    <MobileBottomNav />

    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
    <Photos />
    <Archive />
    <Home />
   </main>
  )
}

export default App;
