import DownloadButtons from '../DownloadButtons';

export default function Page() {
  return (
    <div className='page type-page status-publish hentry'>
      <h2 className='text-amber-300 pb-2 text-sm font-medium uppercase'>
        Download Counter-Strike 1.6 Full install
      </h2>
      <ul className='mt-6'>
        <li>- Servers can not change your configuration</li>
        <li>- The installation is clean and free of viruses!</li>
        <li>- Engine version is 1.1.2.6 (build 4554)</li>
        <li>- The installation takes only 200Mb</li>
        <li>- Works great with Windows 95, 98, 2000,Vista,7,8,8.1, 2010</li>
        <li>- 100% Steam GCFs (Game cache files) copy</li>
        <li>- 47 + 48 protocol client</li>
        <li>- Latest CS 1.6 bots</li>
        <li>- Added Steam / Non-Steam server</li>
        <li>- Added active HLTV</li>
        <li>- Internet and LAN servers are allowed</li>
        <li>- Can be played on 47/48 protocol servers</li>
      </ul>

      <DownloadButtons className='mt-6' />
      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>
        About Counter-Strike 1.6 install
      </h3>
      <a href={require('../../images/csdownload/1.png')} target='_blank'>
        <img src={require('../../images/csdownload/1.png')} alt='contorl-panel' />
      </a>
      <p className='mt-6'>
        Counter-Strike game was created by Minh " Gooseman" Le, who had previously worked as a
        character modeler on a mod for Quake II called Action Quake 2. He wanted to create a
        realistic action game, pitting anti-terrorist squads against terrorists, at a time when
        action games were dominated by science fiction, and the idea of a realistic game was little
        exploited (Rainbow Six is one of the few examples). For this, he proposed to create a mod
        that would allow him to create the game he wanted, and although there were popular games
        such as Unreal Tournament or Quake with graphics engines to work with, these lacked the
        level of realism that he was looking for, so finally opted for Half-Life, that, despite its
        higher learning curve, its graphics engine had the level of realism he needed for
        Counter-Strike 1.6.
      </p>
    </div>
  );
}
