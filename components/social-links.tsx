import { Github, Linkedin } from 'lucide-react';
import { IconLink } from './icon-link';

export const SocialLinks = () => (
  <div className="flex gap-5 items-center">
    <IconLink href="http://www.linkedin.com">
      <Linkedin />
    </IconLink>
    <IconLink href="http://www.github.com">
      <Github />
    </IconLink>
  </div>
);
