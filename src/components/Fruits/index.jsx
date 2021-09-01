export const Fruits = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};
