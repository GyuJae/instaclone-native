import {gql, useMutation} from '@apollo/client';

export const useDeleteComment = () => {
  const [deleteCommentMutate, {loading}] = useMutation<
    IDeleteCommentMutation,
    IDeleteCommentVariables
  >(DELETE_COMMENT_MUTATION);

  return {
    deleteCommentMutate,
    loading,
  };
};

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($input: IDeleteCommentInput!) {
    deleteComment(input: $input) {
      ok
    }
  }
`;

export interface IDeleteCommentOutput {
  ok: boolean;
}

export interface IDeleteCommentMutation {
  deleteComment: IDeleteCommentOutput;
}

export interface IDeleteCommentInput {
  commentId: number;
}

export interface IDeleteCommentVariables {
  input: IDeleteCommentInput;
}
