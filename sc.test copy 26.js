import { deleteUser, login } from './sc';

jest.mock('./sc', () => ({
  ...jest.requireActual('./sc'),
  deleteUser: jest.fn()
}));

it('should call delete user', () => {
  login('user');
  expect(deleteUser).toHaveBeenCalledWith('user');
});