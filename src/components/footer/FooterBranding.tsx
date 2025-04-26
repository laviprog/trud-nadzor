import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function FooterBranding() {
  return (
    <div className="lg:col-span-2 max-lg:pl-7">
      <Image
        src="/logo.png"
        alt="Труд надзор логотип"
        width={400}
        height={400}
        className="w-55 mx-auto lg:mx-0"
        priority
      />
      <p className="text-lg text-center max-lg:pr-5 lg:text-left mx-auto lg:mx-0 ">
        <i>Трудимся и надзираем</i>
      </p>
      <SocialLinks />
    </div>
  );
}
