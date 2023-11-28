import React, { useEffect, useState } from 'react';
import { useUser } from '../store/apiUsers';
import { useComments } from '../store/apiComments';
import LoadingSpinner from './atoms/LoadingSpinner';

const Messenger: React.FC = () => {
  const { data: randomUserData, getUser } = useUser();
  const { data: comments, loading: commentLoading, getComment } = useComments();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShowModal(true);
    getUser();
    getComment();
  }, [getUser, getComment]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (commentLoading) ? (
        <div>
          <LoadingSpinner />
          <button onClick={closeModal}>Close Modal</button>
        </div>
      ) : (
        showModal && randomUserData.length > 0 && comments.length > 0 && (
          <ul>
            {comments.map((comment: any, index: number) => (
              <li key={comment.id}>
                <h3>Title (User): {randomUserData[index].employment.title}</h3>
                <p>Name (User): {randomUserData[index].first_name} {randomUserData[index].last_name}</p>
                <p>Email (User): {randomUserData[index].email}</p>
                <h3>Title (Comment): {comment.name}</h3>
                <p>Body (Comment): {comment.body}</p>
              </li>
            ))}
          </ul>
        )
      )}
     

    </div>
  );
};

export default Messenger;
