import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select   styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : 'red',
    }),
  }} options={options} />
)
export default MyComponent;