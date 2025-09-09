
import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'

export function ChatMessage({ message, sender }) { // Component function
    return (
        <div className={sender === 'user' ? 'chat-user-message' : 'chat-robot-message'}>
            {sender === 'robot' && (
                <img src={RobotImage} className='change-message-profile'></img>
            )}
            <div className="chat-message-text">
                {message}
            </div>

            {sender === 'user' && (
                <img src={UserImage} className='change-message-profile'></img>
            )}
        </div>
    );
}
