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
            { label: 'Company History', href: '/' },
            { label: 'Meet the Team', href: '/' },
            { label: 'Employee Handbook', href: '/' },
            { label: 'Careers', href: '/' },
          ]}
        />
        <FooterNav
          title="Сотрудничество"
          items={[
            { label: 'Web Development', href: '/' },
            { label: 'Web Design', href: '/' },
            { label: 'Marketing', href: '/' },
            { label: 'Google Ads', href: '/' },
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
