import { gql, useMutation } from '@apollo/client';

const Login = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`;
export const useLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(Login);

  return { loginMutation, data, loading, error };
};
