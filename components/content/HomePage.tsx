import DownloadButtons from '../DownloadButtons';
import Image from '../Image';

export default function HomePage() {
  return (
    <div className='page type-page status-publish hentry'>
      <h2 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        Download Counter-Strike 1.6
      </h2>
      <p>
        Download Counter-Strike 1.6 by clicking one of the download buttons, this CS 1.6 setup
        contains full version of the game. The game does not contains any ads or additional
        modifications. CS 1.6 install contains default maps, game models (player, gun skins).
      </p>
      <p>
        Counter-Strike is, despite the growing competition from games such as Call of Duty or
        Battlefield, one of the most popular multiplayer FPS of today, that, with its game modes
        that incentivize teamwork and competitiveness, achieved to become a phenomenon, not only on
        the Internet, but in e-sport competitions, and that this 2019 will be 20 years since its
        first appearance. But as amazing as this sounds, this game had modest origins.
      </p>
      <DownloadButtons className='w-[10rem] my-6' />

      <a href={require('../../images/csdownload/server-list.jpg')} target='_blank'>
        <Image
          className='mb-6'
          width='739'
          height='410'
          src={require('../../images/csdownload/server-list.jpg?resize&size=739')}
          webp={require('../../images/csdownload/server-list.jpg?resize&size=739&format=webp')}
          alt='CS 1.6 Download'
        />
      </a>

      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        What is the origin of Counter-Strike?
      </h3>

      <p>
        Counter-Strike was created by Minh " Gooseman" Le, who had previously worked as a character
        modeler on a mod for Quake II called Action Quake 2. He wanted to create a realistic action
        game, pitting anti-terrorist squads against terrorists, at a time when action games were
        dominated by science fiction, and the idea of a realistic game was little exploited (Rainbow
        Six is one of the few examples). For this, he proposed to create a mod that would allow him
        to create the game he wanted, and although there were popular games such as Unreal
        Tournament or Quake with graphics engines to work with, these lacked the level of realism
        that he was looking for, so finally opted for Half-Life, that, despite its higher learning
        curve, its graphics engine had the level of realism he needed for Counter-Strike.
      </p>
      <p>
        Nor should we forget Jess Cliffe, who had met Le before when they both developed Action
        Quake 2. It was Le who proposed the idea of creating a mod that combined weapons and
        anti-terrorist objects into a free multiplayer game that would entertain the community,
        while Jess Cliffe initially supported him as a webmaster, and it was his work behind the
        mod's website that gained strong support from the online community, who helped not only by
        sharing their opinions and comments to correct errors and improve elements of the game, but
        even helped in the creation of maps that Le and his team later reviewed and included in
        Counter-Strike, a name that was also proposed by Jeff Cliffe
      </p>
      <a href={require('../../images/csdownload/single-player.jpg')} target='_blank'>
        <Image
          className='my-6'
          width='739'
          height='410'
          src={require('../../images/csdownload/single-player.jpg?resize&size=739')}
          webp={require('../../images/csdownload/single-player.jpg?resize&size=739&format=webp')}
          alt='CS 1.6 Download'
        />
      </a>
      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        Minimum system requirements
      </h3>

      <ul>
        <li>CPU: 1.2 GHz Processor</li>
        <li>512 MB RAM</li>
        <li>Graphics card that supports DirectX 7</li>
        <li>750 MB space in your HDD</li>
        <li>Keyboard, mouse</li>
        <li>Internet</li>
        <li>OS: Windows 2000/XP</li>
      </ul>
      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        Recommended system requirements
      </h3>
      <ul>
        <li>CPU: 2.4 GHz Processor</li>
        <li>512 MB RAM</li>
        <li>Graphics card that supports DirectX 9</li>
        <li>750 MB space in your HDD</li>
        <li>Keyboard, mouse</li>
        <li>Internet</li>
        <li>OS: Windows 2000/XP</li>
      </ul>

      <a href={require('../../images/csdownload/1.png')} target='_blank'>
        <Image
          className='py-6'
          width='739'
          height='410'
          src={require('../../images/csdownload/1.png?resize&size=739')}
          webp={require('../../images/csdownload/1.png?resize&size=739&format=webp')}
          alt='cs 1.6 in game'
        />
      </a>
    </div>
  );
}
