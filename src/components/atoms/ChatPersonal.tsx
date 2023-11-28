import React, { useEffect } from 'react';
import userF from '../../assets/icons/F.svg';
import RandomDate from './RandomDate';
import { useUser } from '../../store/apiUsers';
import { useComments } from '../../store/apiComments';
import { ChatPersonalProps } from '../../utils/component';
import { Icon } from '@iconify/react/dist/iconify.js';

const ChatPersonal: React.FC<ChatPersonalProps> = ({ onClick, showImage = true, inChatRoom, onBackClick  }) => {
  const { data: randomUserData, getUser} = useUser();
  const { data: comments, getComment } = useComments();

  useEffect(() => {
    getUser();
    getComment();
  }, [getUser, getComment]);



  if (isUserLoading ) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={onClick} className="flex items-center">
      {showImage && (
        <div className='relative bg-quicks-primary-white rounded-full w-14 h-14 flex items-center justify-center'>
          <div className='bg-quicks-primary-blue rounded-full w-14 h-14 flex items-center justify-center absolute top-0 left-0'>
            <img src={userF} className='object-center w-4 h-4' alt="User Icon" />
          </div>
        </div>
      )}
      <div className={`text-${inChatRoom  ? 'start' : 'center'} sm:ml-4 sm:mt-0 sm:text-left mb-4`}>
        <div className='flex items-start'>
          {inChatRoom ? (
            <>
            <div className='p-1'>
              <Icon onClick={onBackClick} icon="ep:back" />

            </div>
              <h1 className='text-quicks-primary-blue font-lato_bold text-md justify-start'>
                {randomUserData?.[0]?.employment.title}
              </h1>
            </>
          ) : (
            <>
              <h1 className='text-quicks-primary-blue font-lato_bold text-md'>{randomUserData?.[0]?.employment.title}</h1>
              <h1 className='pl-4 text-quicks-primary-black font-lato_regular text-sm'>{<RandomDate />}</h1>
            </>
          )}
        </div>

        {!inChatRoom && (
          randomUserData.length > 0 && comments.length > 0 && (
            <div className=''>
              <h1 className='text-quicks-primary-black font-lato_bold text-base'>{randomUserData[0]?.first_name} {randomUserData[0]?.last_name}</h1>
              <p className='text-quicks-primary-black font-lato_regular text-sm'>
                {comments[0]?.body.split(' ').slice(0, 5).join(' ')}
                {comments[0]?.body.split(' ').length > 5 ? '...' : ''}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChatPersonal;
