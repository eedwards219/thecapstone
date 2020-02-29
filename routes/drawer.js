import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import driverProfile from "../screens/driverForm";
import UserProfileView from "../screens/profile";
import Home from "../screens/home";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  },
  MyProfile: {
    screen: UserProfileView
  }
});

export default createAppContainer(RootDrawerNavigator);
