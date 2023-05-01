import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
interface props {
  signOut?: React.MouseEventHandler<HTMLButtonElement>;
}
function App({ signOut }: props) {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <View className="App">

        <Card>
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </>
  );
}

export default withAuthenticator(App);