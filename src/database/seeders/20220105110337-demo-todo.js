const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface) => {
    const todos = [];
    for (let i = 1; i < 10; i += 1) {
      todos.push({
        id: uuidv4(),
        name: `item${i}`,
        total: 1000,
        description: `test${i}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }
    return queryInterface.bulkInsert('todo', todos, {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('todo', null, {
    truncate: true
  })
};
