import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function FooterBranding() {
  return (
    <div className="lg:col-span-2 max-lg:flex max-lg:justify-center">
      <div className="flex flex-col items-stretch max-w-55">
        <Image src="/logo.png" alt="Труд надзор логотип" width={400} height={400} priority />
        <SocialLinks />
      </div>
    </div>
  );
}
