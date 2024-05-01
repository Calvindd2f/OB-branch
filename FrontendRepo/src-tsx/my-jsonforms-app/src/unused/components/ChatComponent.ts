import React, { KeyboardEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addMessage } from '../chat/chatSlice';

interface Message {
  text: string;
}

const ChatComponent: React.FC = (): JSX.Element => {
  const messages: Message[] = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();

  const sendMessage = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      dispatch(addMessage({ text: event.currentTarget.value }));
      event.currentTarget.value = '';
    }
  };

  const renderMessages = (): JSX.Element[] => {
    return messages.map((msg: Message, idx: number) => <li key={idx}>{msg.text}</li>);
  };

  return (
    <div>
      <input type="text" onKeyDown={sendMessage} />
      <ul>
        {renderMessages()}
      </ul>
    </div>
  );
};

