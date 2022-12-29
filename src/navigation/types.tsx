import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type TabParamList = {
  Home: undefined,
  Calendar: undefined,
  ShareReport: undefined | { accessCode: string }
}

type StackParamList = {
  Login: undefined,
  SignUp: undefined,
  Tabs: undefined,
  EditReport: { reportDate: string },
  EditReportCategory: { reportDate: string, categoryName: string } // ex:  "2022-01-01", "Menstruations",
  ShareReportChooseSymptoms: undefined
}

type StackNavProp = NativeStackNavigationProp<StackParamList>
type TabNavProp = BottomTabNavigationProp<TabParamList>

export type {
  TabParamList,
  StackParamList,
  StackNavProp,
  TabNavProp
}