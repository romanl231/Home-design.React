import Link from "shared/components/Link";

export const CopyrightInfo = () => {
    return (
        <div className="flex justify-between items-center text-sm">
          <Link linkText="© 2021 Agence Dnd" navigateTo="copyright" />

          <div className="flex gap-6">
            <Link linkText="Privacy policy" navigateTo="privacypol" />
            <Link linkText="Term of service" navigateTo="terms" />
            <Link linkText="Language" navigateTo="lang" />
          </div>
        </div>
    );
}