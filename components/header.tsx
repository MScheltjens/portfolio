import { ModeToggler } from './mode-toggler';
import { SocialLinks } from './social-links';

export const Header = () => (
  <header className="flex py-5">
    <div className="container mx-auto flex flex-1 items-center justify-between">
      <SocialLinks />
      <ModeToggler />
    </div>
  </header>
);
