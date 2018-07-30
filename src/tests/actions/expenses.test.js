import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// removeExpense test
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// editExpense test
test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'Paid Shendl back for hotel.' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Paid Shendl back for hotel.'
    }
  });
});

// addExpense test
test('should setup add expense object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1000,
    createdAt: 1000,
    note: 'This was July\'s rent'
  };

  const action = addExpense({
    ...expenseData
  });

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});