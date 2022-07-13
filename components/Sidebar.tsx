import { FC, ReactNode } from 'react';
import { ListGroup, ListGroupItem } from './ListGroup';
import Image from './Image';
import Link from 'next/link';

export interface SidebarProps {
  children?: ReactNode;
}

const downloads = [
  {
    linkTitle: 'CS 1.6 Indir',
    title: 'CS 1.6 Indir',
    href: '/cs-1-6-indir'
  },
  {
    linkTitle: 'CS 1.6 download em Português',
    title: 'CS 1.6 download em Português',
    href: '/cs-1-6-download-em-portugues'
  },
  {
    linkTitle: 'CS 1.6 Windows 10 Download',
    title: 'CS 1.6 Windows 10 Download',
    href: '/cs-16-windows-10-download'
  },
  {
    linkTitle: 'CS 1.6 Torrent Download',
    title: 'CS 1.6 Torrent Download',
    href: '/cs-16-torrent-download'
  },
  {
    linkTitle: 'Atsisiųsti cs 1.6',
    title: 'CS 1.6 Atsisiųsti',
    href: '/atsisiusti-cs'
  },
  {
    linkTitle: 'CS 1.6 Full Install',
    title: 'CS 1.6 Full Install',
    href: '/cs-16-full-install'
  },
  {
    linkTitle: 'cs 1.6 high FPS',
    title: 'CS 1.6 high FPS settings',
    href: '/how-to-get-high-fps'
  }
];

const externalLinks = [
  {
    href: 'http://counter-strike-download.lt',
    title: 'Counter-Strike 1.6 Download'
  },
  {
    href: 'https://counterstrike16download.net',
    title: 'CS 1.6 download'
  },
  {
    href: 'https://fleshas.lt/csdownload',
    title: 'Fleshas.lt - CS 1.6 download'
  }
];

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <ListGroup>
        {downloads.map((link) => (
          <ListGroupItem key={link.linkTitle}>
            <Image
              width='25'
              height='25'
              src={require('../images/icons/cs-boost-b.png?resize&size=25')}
              webp={require('../images/icons/cs-boost-b.png?resize&size=25&format=webp')}
              alt='CS 1.6 Download'
              title='Counter-Strike 1.6'
            />
            <Link href={link.href ?? '/cs-1.6-warzone/'}>
              <a title={link.linkTitle}>{link.title}</a>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>

      <h2 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>External links</h2>
      <ListGroup>
        {externalLinks.map((link) => (
          <ListGroupItem key={link.href}>
            <Image
              width='25'
              height='25'
              src={require('../images/icons/cs-boost-b.png?resize&size=25')}
              webp={require('../images/icons/cs-boost-b.png?resize&size=25&format=webp')}
              alt='CS 1.6 Download'
              title='Counter-Strike 1.6'
            />
            <a target='_blank' rel='noopener' href={link.href}>
              {link.title}
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>

      {children}
    </>
  );
};
export default Sidebar;
