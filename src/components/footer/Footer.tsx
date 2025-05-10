import FooterBranding from './FooterBranding';
import FooterNav from './FooterNav';
import FooterContact from './FooterContact';

export default function Footer() {
  return (
    <footer className="w-[85%] xl:w-6xl mx-auto py-5">
      <div className="grid grid-cols-1 gap-5 xl:gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <FooterBranding />
        <FooterNav
          title="О нас"
          items={[
            { label: 'Отзывы', href: '/#reviews' },
            { label: 'Партнёры', href: '/#partners' },
            { label: 'Контакты', href: '/kontakty' },
            { label: 'О компании', href: '/o-nas' },
          ]}
        />

        <FooterNav
          title="Услуги"
          items={[
            { label: 'Теплоэнергетика', href: '/uslugi/teploenergetika' },
            { label: 'Электроэнергетика', href: '/uslugi/elektroenergetika' },
            { label: 'Промышленная безопасность', href: '/uslugi/promyshlennaya-bezopasnost' },
          ]}
        />
        <FooterContact />
      </div>

      <div className="mt-8 text-center text-sm text-white/60 border-t border-white/20 pt-3">
        © {new Date().getFullYear()} ООО «ТрудНадзор». Все права защищены.
      </div>
    </footer>
  );
}
