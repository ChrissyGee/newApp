import { Redirect } from 'expo-router';

export default function Index() {
  console.log("🔥 I'm running!");
  return <Redirect href="/Home" />;
}

