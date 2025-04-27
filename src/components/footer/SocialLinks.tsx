import Image from 'next/image';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socials: SocialLink[] = [
  {
    name: 'Telegram',
    href: '#',
    icon: <Image src="/socials/tg.png" alt="Telegram" width={35} height={35} />,
  },
  {
    name: 'VKontakte',
    href: '#',
    icon: <Image src="/socials/vk.png" alt="Vkontakte" width={35} height={35} />,
  },
  {
    name: 'Whatsapp',
    href: '#',
    icon: <Image src="/socials/whatsapp.png" alt="WhatsApp" width={35} height={35} />,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex justify-center mt-6 gap-11 lg:justify-start">
      {socials.map((social) => (
        <li key={social.name}>
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
