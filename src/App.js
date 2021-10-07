import './App.css';
import './index.css';
import { Helmet } from "react-helmet";
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  <Helmet>
    <meta charSet="utf-8" />
    <title>React Firebase Chat App</title>
    <meta name="description" content="Chat app built with React and Firebase" />
  </Helmet>

  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <ChatRoom /> : <SignIn />}
    </>
  );
}

export default App;
