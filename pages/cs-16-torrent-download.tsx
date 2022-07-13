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
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          <Card>
            <div className='p-4 font-medium'>
              <div className='page type-page status-publish hentry'>
                <h2 className='text-amber-300 pb-2 text-sm font-medium uppercase'>
                  Download Counter-Strike 1.6 Torrent
                </h2>
                <p>
                  CS 1.6 Torrent - This is file which allows you to download Counter-Strike 1.6 game
                  at maximum speed using uTorrent or another torrent application. If you are newbie
                  and still never used uTorrent application probably immediately wondered when and
                  why CS 1.6 or any other file (movies, games, applications, etc.). Better to use
                  uTorrent download rather than a direct link? uTorrent application is most useful
                  in case if your Internet connection is not fast, this amazing application you will
                  be able to suspend and/or resume the download whenever you likely want, these
                  applications also help you download any file at maximum speed (of course if a
                  sufficient amount of file seeder's).
                </p>
                <DownloadButtons className='w-[10rem] mt-6' />
                <h3 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>
                  How to download CS 1.6 torrent?
                </h3>
                <ul className='mt-6 list-decimal list-inside'>
                  <li>
                    First of all, download uTorrent application (you can do this by clicking on this
                    link: Download uTorrent ), then choose one of few uTorrent version's (we
                    recommend to download latest stable version) after this click DOWNLOAD TORRENT
                    button, download and install it.
                  </li>
                  <li>
                    Wait until the application will be downloaded (it will only take a moment,
                    because uTorrent application is very "easy").
                  </li>
                  <li>
                    Click on uTorrent.exe application, run it and instal it (just click next by next
                    until you will see finish button, it's super simple!).
                  </li>
                  <li> After download CS 1.6 torrent file (download link is below this text).</li>
                  <li> Open downloaded torrent file.</li>
                  <li>
                    Now you will see uTorrent dialog box, click on OK button and wait until
                    Counter-Strike 1.6 game setup file will be downloaded.
                  </li>
                  <li> Install CS 1.6 and enjoy it!</li>
                </ul>

                <iframe
                  title='How to download cs using torrent'
                  height='345'
                  className='w-full my-10'
                  loading='lazy'
                  src='https://www.youtube.com/embed/AQbZbcN9LPo'
                />
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
    title: 'CS 1.6 Download - Counter-Strike 1.6 Download Torrent',
    description:
      'Download Counter-Strike 1.6 from Torrent, Torrent allows you to download CS 1.6 game without loosing the progress even with slow internet'
  }
};
