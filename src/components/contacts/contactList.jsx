export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteBtn(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
