import { LocaleSwitcher } from './locale-switcher';
import { ModeToggler } from './mode-toggler';
import { SocialLinks } from './social-links';

export const Header = () => (
  <header className="flex p-5">
    <div className="container mx-auto flex flex-1 items-center justify-between">
      <SocialLinks />
      <div className="flex gap-3">
        <ModeToggler />
        <LocaleSwitcher />
      </div>
    </div>
  </header>
);
