export default function  validate(values : { 
    category:string,
    Amount:number,
    description:string,}
    )  {
  
      const errors = {};
  
      if (!values.category) {
        errors.category = 'Budget category is required ';
      } else if (values.category.length > 15) {
        errors.category = 'Must be 15 characters or less';
      }
  
     if(!values.Amount){
      errors.Amount = 'Amount of the budget is Required';
     } else if (values.Amount <= 0) {
        errors.Amount = 'Amount must be greater than zero';
      }
     if(!values.description){
      errors.description = 'Expected Amount after investment is Required';
     } else if (values.description <= 0) {
        errors.description = 'Amount must be greater than zero';
      }
      return errors;
    };

