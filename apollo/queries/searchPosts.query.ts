import {gql, useLazyQuery} from '@apollo/client';

export const useSearchPosts = () => {
  const [
    searchPostsQueryFn,
    {data, loading, refetch, fetchMore, error, called},
  ] = useLazyQuery<ISearchPosts, ISearchPostsVariables>(SEE_POST_LIKES_QUERY);

  return {
    data,
    loading,
    refetch,
    fetchMore,
    error,
    searchPostsQueryFn,
    called,
  };
};

export const SEE_POST_LIKES_QUERY = gql`
  query SearchPosts($input: ISearchPostsInput!) {
    searchPosts(input: $input) {
      ok
      error
      hasNextPage
      posts {
        id
        files {
          id
          posterPath
        }
      }
    }
  }
`;

export interface ISearchPostsPost {
  id: number;
  files: {
    id: number;
    posterPath: string;
  }[];
}

export interface ISearchPostsOutput {
  ok: boolean;
  error: string | null;
  hasNextPage: boolean;
  posts: ISearchPostsPost[];
}

export interface ISearchPosts {
  searchPosts: ISearchPostsOutput;
}

export interface ISearchPostsInput {
  keyword: string;
  offset: number;
}

export interface ISearchPostsVariables {
  input: ISearchPostsInput;
}
