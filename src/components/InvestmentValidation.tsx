import Investment from '@/models/Investment';
// import { isDate } from 'util/types';

export default function validate(values: Investment) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Type of investment is required ';
  }
  //  else if (values.name.length > 15) {
  //   errors.name = 'Must be 15 characters or less';
  // }
  if (!values.description) {
    errors.description = 'Type of investment is required ';
  }
  // else if (values.description.length > 15) {
  //   errors.description = 'Must be 15 characters or less';
  // }
  if (!values.type_of_investment) {
    errors.type_of_investment = 'Type of investment is required ';
  }
  //  else if (values.type_of_investment.length > 15) {
  //   errors.type_of_investment = 'Must be 15 characters or less';
  // }

  if (!values.amount) {
    errors.amount = 'Amount of investment is Required';
  }
  // else if (values.amount > 0) {
  //   errors.amount = 'Amount must be greater than zero';
  // }
  // if (!values.date_of_acquisition) {
  //   errors.date_of_acquisition = 'Expected Amount after investment is Required';
  // } else if (isDate(values.date_of_acquisition)) {
  //   errors.date_of_acquisition = 'Amount must be greater than zero';
  // }
  // if (!values.date_of_return) {
  //   errors.date_of_return = 'Time period is a Required feild';
  // } else if (isDate(values.date_of_return)) {
  //   errors.date_of_return = 'Please enter valid time in months';
  // }
  if (!values.apy) {
    errors.apy = 'APY is a Required feild';
  }
  //  else if (values.apy > 0) {
  //   errors.apy = 'Please enter valid APY more than 0';
  // } else if (values.apy > 100) {
  //   errors.apy = 'Please enter valid APY less than 100';
  // }

  // var date = new Date(values.timeOfReturn);
  // var nowDate = new Date();

  // if (!values.timeOfReturn) {
  //   errors.timeOfReturn = 'Date of investment is a Required feild';
  // } else if (0 >= date.getTime() - nowDate.getTime()) {
  //   errors.timeOfReturn = 'Enter a valid date ';
  // }
  return errors;
}
