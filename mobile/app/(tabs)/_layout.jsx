import {useAuth} from "@clerk/clerk-expo";
imoprt {Redirect, Stack} from "expo-router";
const TabsLayout = () => {
    if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;

    return <Stack />;
};

export default TabsLayout;