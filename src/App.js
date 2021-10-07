import './App.css';
import './index.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import {auth} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {

  const [user] = useAuthState(auth);

  return (
    <>
    {user ? <ChatRoom /> : <SignIn />}
    </>
  );
}

export default App;
