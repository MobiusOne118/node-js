// Logic for request
// Data from file/server/database etc

// import jsonData from '../../mock-data/mech-data.json';

const mockData = [
  {
    name: 'Locust',
    class: 'small' 
  },
  {
    name: 'Commando',
    class: 'small'
  }
];

const getMechs = (req, res) => {
  const payload = mockData;
  
  res.end(JSON.stringify(payload));
};

export { getMechs };