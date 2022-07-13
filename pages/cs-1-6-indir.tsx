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
                  Counter-Strike 1.6 Indir
                </h2>
                <p>
                  Tanım Counter-Strike 1.6 Steam: Burayı tıklayın Counter-Strike (CS) dünyanın en
                  popüler oyunlarından biridir. Yalnızca çevrimiçi olarak diğer oyunculara karşı
                  oynanır ve Half-Life oyununun bir modifikasyonudur. Birinci şahıs nişancı, iki
                  takımın karşı karşıya geldiği turlardan oluşur: Terörle Mücadele (Terörle
                  Mücadele) ve Terörist (Teröristler). Oynamak için netten korsan bir sürüm
                  (buharsız) indirebilir veya resmi web sitesi aracılığıyla sadece 9 dolara bir
                  STEAM satın alabilirsiniz. Orijinal oyunun (Steam) en büyük avantajı, birkaç
                  dolandırıcıya sahip olmasının yanı sıra bağlantı kalitesi ve sunucu sayısıdır. En
                  ünlü sürümü 1.6'dır, ancak 2005'te Counter-Strike: Source daha iyi grafiklere
                  sahip, ancak daha az “oynanış” olan yeni bir sürüm yayınlandı.
                </p>
                <DownloadButtons className='w-[10rem] my-6' />

                <p className='mb-6'>
                  Counter-Strike's impact on the industry was big and immediate, quickly becoming
                  not only one of the most important online and LAN multiplayer games, but a
                  reference for future games, and there are several reasons for this. First,
                  Counter-Strike's success has much to thank Half-Life, since, being a free mod,
                  everyone who owned Half-Life (which was a sales success) could acquire the
                  Counter-Strike mod at no additional cost. Second, the minimum requirements for
                  playing Counter-Strike were low, even at the time, making the game accessible to
                  many users without powerful computers. Third, the speed of the rounds and the
                  possibility of playing on LAN massified the game in network rooms and cybercafés
                  where fast and intense games between players were a success. And fourth, and
                  perhaps most important, was the massification of ADSL subscribers in the world
                  since 2000, that brought a multitude of new Internet users eager to try online
                  multiplayer games.
                </p>

                <a href={require('../images/csdownload/awp.png')} target='_blank'>
                  <img src={require('../images/csdownload/awp.png')} alt='CS 1.6 game' />
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
    title: 'CS 1.6 Download - Counter-Strike 1.6 Indir',
    description:
      'Tanım Counter-Strike 1.6 Steam: Burayı tıklayın Counter-Strike (CS) dünyanın en popüler oyunlarından biridir. Yalnızca çevrimiçi olarak diğer oyunculara karşı oynanır ve Half-Life oyununun bir modifikasyonudur.'
  }
};
