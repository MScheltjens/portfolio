type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at <strong>{email}</strong>
    </p>
    <h2>Message</h2>
    <p>Message: {message}</p>
  </div>
);