import Image from 'next/image';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socials: SocialLink[] = [
  {
    name: 'Telegram',
    href: 'https://t.me/linnikIrinka',
    icon: <Image src="/socials/tg.png" alt="Telegram" width={45} height={45} />,
  },
  {
    name: 'Whatsapp',
    href: 'https://wa.me/79264803823',
    icon: <Image src="/socials/whatsapp.png" alt="WhatsApp" width={45} height={45} />,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex justify-center mt-6 gap-7">
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
