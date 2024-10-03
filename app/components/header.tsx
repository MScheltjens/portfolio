import { ModeToggler } from './mode-toggler';
import { SocialLinks } from './social-links';

export const Header = () => (
  <header className="flex py-5">
    <div className="flex-1 container mx-auto flex justify-between items-center">
      <SocialLinks />
      <ModeToggler />
    </div>
  </header>
);
