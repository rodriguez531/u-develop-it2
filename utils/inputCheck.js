// utility to check if an object has the required properties
// e.g., inputCheck(object, 'prop1', 'prop2', 'etc')

module.exports = function(obj, ...props) {
  const errors = inputCheck(req.body, 'party_id');

  
    props.forEach((prop) => {
      // if property is blank or doesn't exist, add to errors array
      if (obj[prop] === undefined || obj[prop] === '') {
        errors.push(`No ${prop} specified.`);
      }
    });
  
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    
    return null;
  };