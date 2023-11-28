import React, { useEffect } from 'react';
import user from '../../assets/icons/person_24px.svg';
import user2 from '../../assets/icons/grey_person_24px.svg';
import RandomDate from './RandomDate';
import { useUser } from '../../store/apiUsers';
import { useComments } from '../../store/apiComments';
import { ChatGroupProps } from '../../utils/component';

const ChatGroup: React.FC<ChatGroupProps> = ({ onClick, showImage, inChatRoom }) => {
  const { data: randomUserData, getUser } = useUser();
  const { data: comments, getComment } = useComments();

  useEffect(() => {
    getUser();
    getComment();
  }, [getUser, getComment]);

  return (
    <div onClick={onClick} className="flex items-center">
      {showImage && (
        <div className='relative bg-quicks-primary-white rounded-full w-14 h-14 flex items-center justify-center' style={{ marginLeft: '-15px' }}>
          {inChatRoom ? (
            <div className='bg-quicks-primary-white rounded-full w-14 h-14 flex items-center justify-center absolute top-0 left-0' style={{ left: '-15px' }}>
              <img src={user2} className='object-center w-4 h-4' alt="User Icon" />
            </div>
          ) : (
            <div className='bg-quicks-primary-blue rounded-full w-14 h-14 flex items-center justify-center absolute top-0 left-0'>
              <img src={user} className='object-center w-4 h-4' alt="User Icon" />
            </div>
          )}
        </div>
      )}
      <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
        <div className='flex items-center'>
          {inChatRoom ? (
            <h1 className='text-quicks-primary-blue font-lato_bold text-md'>
              {randomUserData?.[0]?.first_name} {randomUserData?.[0]?.last_name} [{randomUserData?.[0]?.employment.title}]
            </h1>
          ) : (
            <>
              <h1 className='text-quicks-primary-blue font-lato_bold text-md'>{randomUserData?.[0]?.employment.title}</h1>
              <h1 className='pl-4 text-quicks-primary-black font-lato_regular text-sm'>{<RandomDate />}</h1>
            </>
          )}
        </div>

        {randomUserData.length > 0 && comments.length > 0 && (
          <div>
            {inChatRoom ? (
              <p className='text-quicks-primary-black font-lato_regular text-sm'>3 participants</p>
            ) : (
              <div>
                <h1 className='text-quicks-primary-black font-lato_bold text-base'>{randomUserData[0]?.first_name} {randomUserData[0]?.last_name}</h1>
                <p className='text-quicks-primary-black font-lato_regular text-sm'>
                  {comments[0]?.body.split(' ').slice(0, 5).join(' ')}
                  {comments[0]?.body.split(' ').length > 5 ? '...' : ''}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGroup;
