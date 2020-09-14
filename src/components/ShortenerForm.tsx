const ShortenerForm: React.FC = () => {
  return (
    <div>
      <form name="shorten-form">
        <input name="url" type="text" />
        <input name="slug" type="text" />
        <input name="submit" type="submit" />
      </form>
    </div>
  );
};

export default ShortenerForm;
