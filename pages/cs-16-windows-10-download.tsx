import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import { schema } from '../csSchema';
import DownloadButtons from '../components/DownloadButtons';

export default function Page() {
  return (
    <>
      <Head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }} />
      </Head>
      <Top />
      <NavBar />
      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24 pt-6 bg-gray-900'>
        <div className='basis-1/3'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          <Card>
            <div className='p-4 font-medium'>
              <div className='page type-page status-publish hentry'>
                <h2 className='text-amber-300 pb-2 text-sm font-medium uppercase'>
                  Download Counter-Strike 1.6 for Windows 10
                </h2>
                <p>
                  Download Counter-Strike 1.6 for windows 10, this CS 1.6 install is fully
                  compatible with the latest windows 10 updates
                </p>
                <DownloadButtons className='mt-6' />
                <a href='/svg/windows-10-logo-svgrepo-com.svg' target='_blank'>
                  <img
                    src='/svg/windows-10-logo-svgrepo-com.svg'
                    alt='windows 10'
                    className='p-6'
                  />
                </a>
                <p className='mb-6'>
                  Immediately after the latest (10) in the Microsoft Windows operating system
                  release, a lot of players faced with a problem - the old version of the game did
                  not work in the new operating system version, despite the fact that it is very
                  well acted earlier this operating system versions (including Windows 8 and Windows
                  8.1). Non Steam game version developers, immediately after the occurrence of the
                  problem, began to look for ways to create a new version of the game and after a
                  few weeks of hard work has been published in this one, with all operating system
                  versions compatible version of the game, which can be downloaded free of charge
                  directly from the site. If you want to download the free version of the CS 1.6
                  WINDOWS 10 compatible game, first of all, you need to decide which way you want to
                  do it. Currently, we offer you two most popular game download methods - directly
                  (just click the direct download link - For a moment start the game downloading) or
                  by using the torrent file (Just click direct torrent file download link and
                  immediately after that, open the torrent file using uTorrent and other torrent
                  version), game will begin download after one moment, CS 1.6 windows 10 download
                  will take only few minutes.
                </p>

                <a href={require('../images/csdownload/public.png')} target='_blank'>
                  <img src={require('../images/csdownload/public.png')} alt='CS game for windows' />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - Counter-Strike 1.6 Windows 10 Download',
    description:
      'Download Counter-Strike 1.6 for windows 10, this CS 1.6 install is fully compatible with the latest windows 10 updates'
  }
};
