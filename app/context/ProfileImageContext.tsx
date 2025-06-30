// context/ProfileImageContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_KEY = 'profileImageUri';

const ProfileImageContext = createContext<{
  profileUri: string | null;
  setProfileUri: (uri: string | null) => void;
}>({
  profileUri: null,
  setProfileUri: () => {},
});

export const useProfileImage = () => useContext(ProfileImageContext);

// ✅ Add proper type to props
export const ProfileImageProvider = ({ children }: { children: ReactNode }) => {
  const [profileUri, setProfileUri] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const uri = await AsyncStorage.getItem(PROFILE_KEY);
      if (uri) setProfileUri(uri);
    };
    load();
  }, []);

  return (
    <ProfileImageContext.Provider value={{ profileUri, setProfileUri }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
