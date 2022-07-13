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
                <h2 className='text-amber-300 pb-2 text-md font-medium uppercase'>
                  Counter-Strike 1.6 – Download em Português
                </h2>
                <p>
                  Descrição Counter-Strike 1.6 Steam: Clique aqui Counter-Strike (CS) é um dos jogos
                  mais populares do mundo. É jogado apenas on-line contra outros jogadores e é uma
                  modificação do game Half-Life. Jogo de tiro em primeira pessoa, consiste em
                  rodadas na qual duas equipes se confrontam: Os Counter-Terrorist
                  (Contra-Terroristas) e os Terrorist (Terroristas). Para jogar você poderá baixar
                  uma versão pirata (no-steam) na rede ou comprando uma STEAM por apenas 9 dólares
                  através do site oficial. A grande vantagem do jogo original (Steam) é a qualidade
                  da conexão e quantidade de servidores, além de existir poucos trapaceiros. Sua
                  versão mais famosa é a 1.6, porém em 2005 foi lançada uma nova versão, o
                  Counter-Strike: Source com melhores gráficos, por ém menos “jogabilidade”.
                </p>
                <DownloadButtons className='my-6' />
                <a href={require('../images/csdownload/knf.png')} target='_blank'>
                  <img src={require('../images/csdownload/knf.png')} alt='CS game for windows' />
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
    title: 'CS 1.6 Download - Counter-Strike 1.6 Download em Português',
    description:
      'Descrição Counter-Strike 1.6 Steam: Clique aqui Counter-Strike (CS) é um dos jogos mais populares do mundo. É jogado apenas on-line contra outros jogadores e é uma modificação do game Half-Life.'
  }
};
