const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
      
    }
    
  ];
  
  const formattedNames = users.map(user => ` ${user.first_name} ${user.last_name} `);
  
  document.write(formattedNames);
  
  