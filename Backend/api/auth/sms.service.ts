
import axios from 'axios';

const TWILIO_SID = process.env.TWILIO_SID!;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN!;
const TWILIO_FROM = process.env.TWILIO_FROM!;

export async function sendVerificationSms(phone: string, code: string) {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`;
  const params = new URLSearchParams();
  params.append('To', phone);
  params.append('From', TWILIO_FROM);
  params.append('Body', `Your TourneyPredict verification code is: ${code}`);
  const auth = { username: TWILIO_SID, password: TWILIO_TOKEN };
  await axios.post(url, params, { auth });
}
