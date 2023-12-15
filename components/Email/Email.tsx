// WILL ONLY WORK WITH TS B/C PROP VALIDATION NECESSARY
// https://resend.com/docs/send-with-nextjs#3-send-email-using-react
import * as React from "react";

interface EmailTemplateProps {
  first: string;
  last: string;
  email: string;
  phone: string;
  message: string;
}

// use this for templates: https://react.email/examples
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  first,
  last,
  email,
  phone,
  message,
}) => (
  <div>
    <h1 style={{ color: "red" }}>
      Welcome, {first} {last}!
    </h1>
    <h2>Your email is: {email}</h2>
    <h3>Your phone number is: {phone}</h3>
    <p>Here is your message: {message}</p>
  </div>
);
