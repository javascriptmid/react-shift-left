jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

it('instances app without crashing', () => {
  require('../index');
});
