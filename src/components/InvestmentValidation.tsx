export default function  validate  (values : { 
    investmentType:string,
    Amount:number,
    expectedAmount:number,
    timeOfReturn:Date,
    holdTime:number}
    )  {
  
      const errors = {};
  
      if (!values.investmentType) {
        errors.investmentType = 'Type of investment is required ';
      } else if (values.investmentType.length > 15) {
        errors.investmentType = 'Must be 15 characters or less';
      }
  
     if(!values.Amount){
      errors.Amount = 'Amount of investment is Required';
     } else if (values.Amount <= 0) {
        errors.Amount = 'Amount must be greater than zero';
      }
     if(!values.expectedAmount){
      errors.expectedAmount = 'Expected Amount after investment is Required';
     } else if (values.expectedAmount <= 0) {
        errors.expectedAmount = 'Amount must be greater than zero';
      }
     if(!values.holdTime){
      errors.holdTime = 'Time period is a Required feild';
     } else if (values.holdTime <= 0) {
        errors.holdTime = 'Please enter valid time in months';
      }
      var date = new Date(values.timeOfReturn);
      var nowDate =  new Date();
  
      if (!values.timeOfReturn) {
        errors.timeOfReturn = 'Date of investment is a Required feild';
      }
      
      else if(0 >= (date.getTime()-nowDate.getTime())){
        errors.timeOfReturn = 'Enter a valid date ';
      }
      return errors;
    };

