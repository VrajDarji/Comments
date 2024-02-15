import React from "react";

export interface CommentProps {
  id: number;
  text: string;
  children?: CommentProps[];
}

const Comment: React.FC<{ comment: CommentProps }> = ({ comment }) => {
  return (
    <div>
      <div className="p-4 border-2 rounded-xl shadow-lg my-8 bg-white border-black">
        <p>{comment.text}</p>
      </div>
      {comment.children && (
        <div className="flex flex-col w-full">
          {comment.children.map((child, index) => (
            <div key={child.id} className="relative w-full h-full pl-[40px]">
              <div
                className={`absolute -top-8 left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black h-[90px]`}
              ></div>
              <Comment comment={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
