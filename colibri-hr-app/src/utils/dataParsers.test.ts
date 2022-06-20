import { formatDateString } from './dataParsers';

describe('#convertStringToDate', () => {
  test('returns new date format when a valid date string is passed', () => {
    const dateString = '16/06/2022';
    const convertedDate = formatDateString(dateString);
    expect(convertedDate).toEqual('2022-06-16');
  });
  test('returns null when no value is passed - empty string', () => {
    const dateString = '';
    const convertedDate = formatDateString(dateString);
    expect(convertedDate).toEqual(null);
  });
  test('returns initial string when an invalid date is passed - random string', () => {
    const dateString = 'random';
    const convertedDate = formatDateString(dateString);
    expect(convertedDate).toEqual(dateString);
  });
  test('returns initial string when an invalid date is passed - different date format', () => {
    const dateString = '16-06-2022';
    const convertedDate = formatDateString(dateString);
    expect(convertedDate).toEqual(dateString);
  });
});
