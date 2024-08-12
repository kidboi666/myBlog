export const TextInput = ({ ...props }) => {
  return (
    <label htmlFor="input">
      <input id="input" {...props} />
    </label>
  )
}
