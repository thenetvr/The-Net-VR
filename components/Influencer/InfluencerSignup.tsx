"use server";
import { Resend } from 'resend';

export default async function InfluencerSignup(first: string, last: string, email: string, username: string, primary_category: string, total_followers: number, streaming_channel: string, twitter: string) {

    /* Load API Key from environment variables */
    var secret = process.env.WEBHOOK_SECRET as string;
    const resend = new Resend(secret);

    try {
        const { data, error } = await resend.emails.send({
        from: 'info@thenetvr.com',
        to: [email],
        subject: `Welcome, ${username}!`,
        html: `<strong>Hello, ${username}! We are sending this email to verify your information.</strong>
                <br>
                First Name:  ${first}<br>
                Last Name:  ${last}<br>
                Email: ${email}<br>
                Username: ${username}<br>
                Primary Category: ${primary_category}<br>
                Total Followers: ${total_followers}<br>
                Streaming Channel: ${streaming_channel}<br>
                Twitter: ${twitter}<br>`,
        });
        if (error) {
        return console.error({ error });
        }
        console.log({ data });
        console.error("Your Message Was Sent Successfully!");
    } catch (e) {
        console.log(e);
        console.error("Something Went Wrong. Please Try Again Later.");
    }
};