import {Slot} from "expo-router";
import {useEffect} from "react";
import {authenticateAsync} from "expo-local-authentication";

export default function BiometricProtectedLayout() {

  useEffect(() => {
    const authenticate = async () => {
      const res = await authenticateAsync();
      console.log(res);
    }
    authenticate();
  }, []);

  return (<Slot />)
}
