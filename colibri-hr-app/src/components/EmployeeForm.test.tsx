import { act, fireEvent, render, screen } from '@testing-library/react';
import { IEmployee } from '../@types.employee';
import EmployeeForm from './EmployeeForm';
import * as constants from '../utils/constants';

const employeeDetails: IEmployee = {
  id: 1,
  first_name: 'Loutitia',
  last_name: 'Steaning',
  email: 'lsteaning0@usnews.com',
  date_of_birth: '2022-06-28',
  industry: 'n/a',
  salary: 98803.83,
  years_of_experience: 6.6
};

const mockSave = jest.fn((data) => {
  return Promise.resolve(data);
});

describe('EmployeeForm', () => {
  test('should call the save method when form is submitted', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });
    await act(async () => {
      fireEvent.submit(screen.getByRole('button'));
    });
    expect(mockSave).toBeCalled();
  });

  test('should display matching error when first name is too long', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });

    const firstNameField = screen.getAllByRole('textbox')[1] as HTMLInputElement;
    const over100Value = 'test'.repeat(26);
    fireEvent.input(firstNameField, {
      target: {
        value: over100Value
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText(constants.MAX_100_CHARS_ERROR)).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
    expect(firstNameField.value).toBe(over100Value);
  });

  test('should display matching error when last name is too long', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });

    const lastNameField = screen.getAllByRole('textbox')[2] as HTMLInputElement;
    const over100Value = 'test'.repeat(26);
    fireEvent.input(lastNameField, {
      target: {
        value: over100Value
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText(constants.MAX_100_CHARS_ERROR)).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
    expect(lastNameField.value).toBe(over100Value);
  });

  test('should display matching error when email is invalid', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });

    // - should be screen.getByRole('textbox', { name: /email/i })
    // but for some reason the testing library cannot find it that way
    // - the issue might have to do with the latest version
    const emailField = screen.getAllByRole('textbox')[3] as HTMLInputElement;
    fireEvent.input(emailField, {
      target: {
        value: 'test'
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText('Invalid email address')).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
    expect(emailField.value).toBe('test');
  });

  test('should display matching error when industry is too long', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });

    const industryField = screen.getAllByRole('textbox')[4] as HTMLInputElement;
    const over100Value = 'test'.repeat(26);
    fireEvent.input(industryField, {
      target: {
        value: over100Value
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText(constants.MAX_100_CHARS_ERROR)).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
    expect(industryField.value).toBe(over100Value);
  });

  test('should display matching error when years of experience exceeds 100', async () => {
    await act(async () => {
      render(<EmployeeForm defaultValues={employeeDetails} onSubmit={mockSave} />);
    });

    const yoeField = screen.getAllByRole('spinbutton')[1] as HTMLInputElement;
    fireEvent.input(yoeField, {
      target: {
        value: 101
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText(constants.MAX_100_VALUE_ERROR)).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
    expect(yoeField.value).toBe('101');
  });
});
