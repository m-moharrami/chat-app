import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "7195d1f3-c36a-47f5-b433-ed062af3e731"
            userName = "mafan"
            userSecret = "123456"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App;