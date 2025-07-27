import Link from "shared/components/Link";

export const CopyrightInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
      <Link linkText="© 2021 Agence Dnd" navigateTo="copyright" />

      <div className="flex flex-wrap justify-center gap-6">
        <Link linkText="Privacy policy" navigateTo="privacypol" />
        <Link linkText="Term of service" navigateTo="terms" />
        <Link linkText="Language" navigateTo="lang" />
      </div>
    </div>
  );
};