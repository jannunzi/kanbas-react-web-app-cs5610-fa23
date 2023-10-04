function JsonPre({ json }) {
  return (
    <pre>
      <code>{JSON.stringify(json, null, 2)}</code>
    </pre>
  );
}

export default JsonPre;
