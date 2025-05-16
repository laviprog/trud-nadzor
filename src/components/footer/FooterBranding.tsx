import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function FooterBranding() {
  return (
    <div className="lg:col-span-2">
      <Image
        src="/logo.png"
        alt="Труд надзор логотип"
        width={400}
        height={400}
        className="w-55 mx-auto lg:mx-0"
        priority
      />
      <SocialLinks />
    </div>
  );
}
