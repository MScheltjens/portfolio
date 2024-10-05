import { Github, Linkedin } from 'lucide-react';
import { IconLink } from './icon-link';

export const SocialLinks = () => (
  <div className="flex items-center gap-3">
    <IconLink href="http://www.linkedin.com">
      <Linkedin />
    </IconLink>
    <IconLink href="http://www.github.com">
      <Github />
    </IconLink>
  </div>
);
